// API Route para análisis de partidos de fútbol
// Archivo: /api/index.js

const FOOTBALL_API_KEY = process.env.FOOTBALL_API_KEY;
const FOOTBALL_API_HOST = 'v3.football.api-sports.io';

// Función para obtener partidos próximos
async function getUpcomingMatches(team) {
  try {
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);

    const fromDate = today.toISOString().split('T')[0];
    const toDate = nextWeek.toISOString().split('T')[0];

    const response = await fetch(
      `https://${FOOTBALL_API_HOST}/fixtures?team=${team}&from=${fromDate}&to=${toDate}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': FOOTBALL_API_KEY,
          'x-rapidapi-host': FOOTBALL_API_HOST
        }
      }
    );

    const data = await response.json();
    
    if (!data.response || data.response.length === 0) {
      return { error: 'No se encontraron partidos próximos para este equipo' };
    }

    return data.response;
  } catch (error) {
    console.error('Error fetching matches:', error);
    return { error: 'Error al obtener datos de la API' };
  }
}

// Función para obtener estadísticas del equipo
async function getTeamStatistics(teamId, season = 2024) {
  try {
    const response = await fetch(
      `https://${FOOTBALL_API_HOST}/teams/statistics?team=${teamId}&season=${season}&league=140`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': FOOTBALL_API_KEY,
          'x-rapidapi-host': FOOTBALL_API_HOST
        }
      }
    );

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error fetching team stats:', error);
    return null;
  }
}

// Función para búsqueda de equipos
async function searchTeam(teamName) {
  try {
    const response = await fetch(
      `https://${FOOTBALL_API_HOST}/teams?search=${encodeURIComponent(teamName)}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': FOOTBALL_API_KEY,
          'x-rapidapi-host': FOOTBALL_API_HOST
        }
      }
    );

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error searching team:', error);
    return [];
  }
}

// Función de análisis con IA (algoritmo predictivo)
function analyzeMatchWithAI(homeStats, awayStats, fixture) {
  const analysis = {
    confidence: 0,
    predictions: {},
    reasoning: []
  };

  // Análisis de forma reciente
  const homeFormScore = calculateFormScore(homeStats?.form || '');
  const awayFormScore = calculateFormScore(awayStats?.form || '');

  // Análisis de goles
  const homeGoalsAvg = homeStats?.goals?.for?.average?.home || 0;
  const awayGoalsAvg = awayStats?.goals?.for?.average?.away || 0;
  const homeGoalsAgainstAvg = homeStats?.goals?.against?.average?.home || 0;
  const awayGoalsAgainstAvg = awayStats?.goals?.against?.average?.away || 0;

  // Predicción de resultado
  const homeAdvantage = 0.15; // 15% ventaja de local
  const homeScore = (homeFormScore + (homeGoalsAvg * 10) - (homeGoalsAgainstAvg * 10)) * (1 + homeAdvantage);
  const awayScore = (awayFormScore + (awayGoalsAvg * 10) - (awayGoalsAgainstAvg * 10));

  const scoreDiff = homeScore - awayScore;

  if (scoreDiff > 5) {
    analysis.predictions.result = '1'; // Victoria local
    analysis.confidence = Math.min(85, 60 + scoreDiff);
    analysis.reasoning.push('El equipo local tiene mejor forma y estadísticas ofensivas');
  } else if (scoreDiff < -5) {
    analysis.predictions.result = '2'; // Victoria visitante
    analysis.confidence = Math.min(85, 60 + Math.abs(scoreDiff));
    analysis.reasoning.push('El equipo visitante muestra mejor rendimiento reciente');
  } else {
    analysis.predictions.result = 'X'; // Empate
    analysis.confidence = 55;
    analysis.reasoning.push('Ambos equipos tienen estadísticas similares');
  }

  // Predicción de goles
  const totalGoalsExpected = (homeGoalsAvg + awayGoalsAvg + homeGoalsAgainstAvg + awayGoalsAgainstAvg) / 2;
  
  if (totalGoalsExpected > 2.5) {
    analysis.predictions.goals = 'Over 2.5';
    analysis.predictions.btts = 'Ambos marcan: Sí';
    analysis.reasoning.push(`Se esperan ${totalGoalsExpected.toFixed(1)} goles en promedio`);
  } else {
    analysis.predictions.goals = 'Under 2.5';
    analysis.predictions.btts = 'Ambos marcan: Posiblemente No';
    analysis.reasoning.push('Se espera un partido cerrado con pocos goles');
  }

  // Predicción de córneres
  const homeCorners = homeStats?.fixtures?.draws?.home || 0;
  const awayCorners = awayStats?.fixtures?.draws?.away || 0;
  const avgCorners = (homeCorners + awayCorners) / 2;

  if (avgCorners > 5) {
    analysis.predictions.corners = `Over 9.5 córneres`;
  } else {
    analysis.predictions.corners = `Under 9.5 córneres`;
  }

  return analysis;
}

// Calcular puntuación de forma basado en últimos 5 partidos
function calculateFormScore(form) {
  if (!form) return 0;
  
  let score = 0;
  const matches = form.split('').reverse();
  
  matches.forEach((result, index) => {
    const weight = 5 - index; // Más peso a partidos recientes
    if (result === 'W') score += 3 * weight;
    else if (result === 'D') score += 1 * weight;
  });
  
  return score;
}

// Handler principal de la API
export default async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { team } = req.query;

  if (!team) {
    return res.status(400).json({ error: 'Se requiere el parámetro "team"' });
  }

  if (!FOOTBALL_API_KEY) {
    return res.status(500).json({ 
      error: 'API Key no configurada. Por favor configura FOOTBALL_API_KEY en las variables de entorno de Vercel' 
    });
  }

  try {
    // Buscar el equipo
    const teams = await searchTeam(team);
    
    if (!teams || teams.length === 0) {
      return res.status(404).json({ 
        error: 'No se encontró el equipo. Intenta con otro nombre o verifica la ortografía.' 
      });
    }

    const teamData = teams[0];
    const teamId = teamData.team.id;

    // Obtener partidos próximos
    const matches = await getUpcomingMatches(teamId);

    if (matches.error) {
      return res.status(404).json(matches);
    }

    // Obtener estadísticas de ambos equipos para el primer partido
    const firstMatch = matches[0];
    const homeTeamId = firstMatch.teams.home.id;
    const awayTeamId = firstMatch.teams.away.id;

    const [homeStats, awayStats] = await Promise.all([
      getTeamStatistics(homeTeamId),
      getTeamStatistics(awayTeamId)
    ]);

    // Análisis con IA
    const aiAnalysis = analyzeMatchWithAI(homeStats, awayStats, firstMatch);

    // Preparar respuesta
    const response = {
      team: teamData.team,
      nextMatch: {
        fixture: firstMatch.fixture,
        teams: firstMatch.teams,
        league: firstMatch.league,
        venue: firstMatch.fixture.venue
      },
      statistics: {
        home: homeStats,
        away: awayStats
      },
      aiAnalysis: aiAnalysis,
      allMatches: matches.slice(0, 5) // Máximo 5 partidos
    };

    return res.status(200).json(response);

  } catch (error) {
    console.error('Error en el handler:', error);
    return res.status(500).json({ 
      error: 'Error interno del servidor',
      details: error.message 
    });
  }
}
