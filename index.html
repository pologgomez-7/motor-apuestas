<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>⚽ Analizador IA Pro - Predicciones Deportivas</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #00d4aa;
            --primary-dark: #00a885;
            --secondary: #1a1f3a;
            --background: #0f1419;
            --card-bg: #1a1f2e;
            --text: #ffffff;
            --text-secondary: #8b92a7;
            --success: #00d4aa;
            --warning: #ffd60a;
            --danger: #ff006e;
            --border: rgba(255, 255, 255, 0.1);
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: linear-gradient(135deg, #0f1419 0%, #1a1f3a 100%);
            color: var(--text);
            min-height: 100vh;
            position: relative;
            overflow-x: hidden;
        }

        /* Animated background particles */
        body::before {
            content: '';
            position: fixed;
            width: 100%;
            height: 100%;
            background-image: 
                radial-gradient(circle at 20% 80%, rgba(0, 212, 170, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 214, 10, 0.08) 0%, transparent 50%);
            pointer-events: none;
            z-index: 0;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem 1.5rem;
            position: relative;
            z-index: 1;
        }

        .header {
            text-align: center;
            margin-bottom: 3rem;
            animation: fadeInDown 0.6s ease-out;
        }

        .logo {
            font-size: 3.5rem;
            margin-bottom: 0.5rem;
            animation: bounce 2s ease-in-out infinite;
        }

        .title {
            font-family: 'Montserrat', sans-serif;
            font-size: 2.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, var(--primary) 0%, #ffd60a 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.5rem;
            letter-spacing: -1px;
        }

        .subtitle {
            color: var(--text-secondary);
            font-size: 1rem;
            font-weight: 500;
        }

        .search-card {
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 20px;
            padding: 2rem;
            margin-bottom: 2rem;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            animation: fadeInUp 0.6s ease-out 0.1s both;
            position: relative;
            overflow: hidden;
        }

        .search-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--primary), #ffd60a, var(--primary));
            background-size: 200% 100%;
            animation: gradientShift 3s ease infinite;
        }

        .input-group {
            margin-bottom: 1.5rem;
        }

        .input-label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            font-size: 0.9rem;
            color: var(--text);
        }

        .search-input {
            width: 100%;
            padding: 1rem 1.25rem;
            background: var(--background);
            border: 2px solid var(--border);
            border-radius: 12px;
            color: var(--text);
            font-size: 1rem;
            font-family: 'Inter', sans-serif;
            transition: all 0.3s ease;
            outline: none;
        }

        .search-input:focus {
            border-color: var(--primary);
            box-shadow: 0 0 0 4px rgba(0, 212, 170, 0.1);
            transform: translateY(-2px);
        }

        .search-input::placeholder {
            color: var(--text-secondary);
        }

        .btn {
            width: 100%;
            padding: 1rem 2rem;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            border: none;
            border-radius: 12px;
            color: white;
            font-size: 1.1rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 212, 170, 0.3);
            position: relative;
            overflow: hidden;
        }

        .btn::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }

        .btn:hover::before {
            width: 300px;
            height: 300px;
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 25px rgba(0, 212, 170, 0.4);
        }

        .btn:active {
            transform: translateY(0);
        }

        .btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
        }

        .btn-text {
            position: relative;
            z-index: 1;
        }

        .loading {
            display: none;
            text-align: center;
            padding: 2rem;
            animation: fadeIn 0.3s ease;
        }

        .loading.active {
            display: block;
        }

        .spinner {
            width: 50px;
            height: 50px;
            margin: 0 auto 1rem;
            border: 4px solid var(--border);
            border-top-color: var(--primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        .results {
            display: none;
            animation: fadeInUp 0.6s ease-out;
        }

        .results.active {
            display: block;
        }

        .match-card {
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 20px;
            padding: 2rem;
            margin-bottom: 1.5rem;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .match-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
        }

        .match-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--border);
        }

        .league-info {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .league-logo {
            width: 30px;
            height: 30px;
            object-fit: contain;
        }

        .league-name {
            font-size: 0.9rem;
            color: var(--text-secondary);
            font-weight: 600;
        }

        .match-date {
            font-size: 0.85rem;
            color: var(--text-secondary);
            background: var(--background);
            padding: 0.5rem 1rem;
            border-radius: 8px;
        }

        .teams {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
        }

        .team {
            flex: 1;
            text-align: center;
        }

        .team-logo {
            width: 80px;
            height: 80px;
            object-fit: contain;
            margin-bottom: 0.75rem;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
        }

        .team-name {
            font-size: 1.1rem;
            font-weight: 700;
            margin-bottom: 0.25rem;
        }

        .vs {
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--text-secondary);
            padding: 0 1rem;
        }

        .predictions {
            background: var(--background);
            border-radius: 16px;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
        }

        .prediction-header {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }

        .ai-badge {
            background: linear-gradient(135deg, var(--primary), #ffd60a);
            color: var(--secondary);
            padding: 0.4rem 0.8rem;
            border-radius: 8px;
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.5px;
        }

        .confidence {
            margin-left: auto;
            font-size: 0.9rem;
            color: var(--text-secondary);
        }

        .confidence-bar {
            height: 4px;
            background: var(--border);
            border-radius: 2px;
            overflow: hidden;
            margin-top: 0.5rem;
        }

        .confidence-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--primary), #ffd60a);
            border-radius: 2px;
            transition: width 1s ease;
        }

        .prediction-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.75rem 0;
            border-bottom: 1px solid var(--border);
        }

        .prediction-item:last-child {
            border-bottom: none;
        }

        .prediction-label {
            color: var(--text-secondary);
            font-size: 0.9rem;
        }

        .prediction-value {
            font-weight: 700;
            font-size: 1rem;
            color: var(--primary);
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
        }

        .stat-box {
            background: var(--background);
            padding: 1rem;
            border-radius: 12px;
            text-align: center;
            border: 1px solid var(--border);
        }

        .stat-value {
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--primary);
            margin-bottom: 0.25rem;
        }

        .stat-label {
            font-size: 0.8rem;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .reasoning {
            background: var(--card-bg);
            border-left: 3px solid var(--primary);
            padding: 1rem 1.5rem;
            border-radius: 8px;
            margin-top: 1rem;
        }

        .reasoning-title {
            font-size: 0.85rem;
            color: var(--text-secondary);
            margin-bottom: 0.5rem;
            font-weight: 600;
        }

        .reasoning-item {
            font-size: 0.9rem;
            color: var(--text);
            padding: 0.4rem 0;
            padding-left: 1.2rem;
            position: relative;
        }

        .reasoning-item::before {
            content: '→';
            position: absolute;
            left: 0;
            color: var(--primary);
            font-weight: bold;
        }

        .error-message {
            background: linear-gradient(135deg, rgba(255, 0, 110, 0.1), rgba(255, 0, 110, 0.05));
            border: 1px solid rgba(255, 0, 110, 0.3);
            border-radius: 12px;
            padding: 1.5rem;
            color: #ff6b9d;
            text-align: center;
            font-weight: 600;
            display: none;
            animation: shake 0.5s ease;
        }

        .error-message.active {
            display: block;
        }

        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
        }

        @media (max-width: 768px) {
            .title {
                font-size: 2rem;
            }

            .teams {
                flex-direction: column;
                gap: 1rem;
            }

            .vs {
                transform: rotate(90deg);
            }

            .stats-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">⚽🤖</div>
            <h1 class="title">Analizador IA Pro</h1>
            <p class="subtitle">Predicciones inteligentes con tecnología avanzada</p>
        </div>

        <div class="search-card">
            <div class="input-group">
                <label class="input-label">🔍 Buscar Equipo</label>
                <input 
                    type="text" 
                    id="teamInput" 
                    class="search-input" 
                    placeholder="Ej: Real Madrid, Barcelona, Manchester United..."
                    autocomplete="off"
                >
            </div>
            <button onclick="analyzeTeam()" class="btn" id="analyzeBtn">
                <span class="btn-text">Generar Análisis IA</span>
            </button>
        </div>

        <div id="loading" class="loading">
            <div class="spinner"></div>
            <p style="color: var(--text-secondary);">Analizando datos con IA...</p>
        </div>

        <div id="error" class="error-message"></div>

        <div id="results" class="results"></div>
    </div>

    <script>
        const teamInput = document.getElementById('teamInput');
        const analyzeBtn = document.getElementById('analyzeBtn');
        const loading = document.getElementById('loading');
        const error = document.getElementById('error');
        const results = document.getElementById('results');

        // Enter key support
        teamInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                analyzeTeam();
            }
        });

        async function analyzeTeam() {
            const team = teamInput.value.trim();
            
            if (!team) {
                showError('Por favor, ingresa el nombre de un equipo');
                return;
            }

            // Reset UI
            error.classList.remove('active');
            results.classList.remove('active');
            loading.classList.add('active');
            analyzeBtn.disabled = true;

            try {
                const response = await fetch(`/api/index?team=${encodeURIComponent(team)}`);
                const data = await response.json();

                loading.classList.remove('active');
                analyzeBtn.disabled = false;

                if (data.error) {
                    showError(data.error);
                    return;
                }

                displayResults(data);
            } catch (err) {
                loading.classList.remove('active');
                analyzeBtn.disabled = false;
                showError('Error de conexión. Por favor, intenta nuevamente.');
                console.error('Error:', err);
            }
        }

        function showError(message) {
            error.textContent = message;
            error.classList.add('active');
            setTimeout(() => {
                error.classList.remove('active');
            }, 5000);
        }

        function displayResults(data) {
            const match = data.nextMatch;
            const ai = data.aiAnalysis;
            const homeStats = data.statistics.home;
            const awayStats = data.statistics.away;

            const matchDate = new Date(match.fixture.date);
            const formattedDate = matchDate.toLocaleDateString('es-ES', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });

            results.innerHTML = `
                <div class="match-card">
                    <div class="match-header">
                        <div class="league-info">
                            <img src="${match.league.logo}" alt="${match.league.name}" class="league-logo">
                            <span class="league-name">${match.league.name}</span>
                        </div>
                        <div class="match-date">${formattedDate}</div>
                    </div>

                    <div class="teams">
                        <div class="team">
                            <img src="${match.teams.home.logo}" alt="${match.teams.home.name}" class="team-logo">
                            <div class="team-name">${match.teams.home.name}</div>
                        </div>
                        <div class="vs">VS</div>
                        <div class="team">
                            <img src="${match.teams.away.logo}" alt="${match.teams.away.name}" class="team-logo">
                            <div class="team-name">${match.teams.away.name}</div>
                        </div>
                    </div>

                    <div class="predictions">
                        <div class="prediction-header">
                            <span class="ai-badge">🤖 ANÁLISIS IA</span>
                            <span class="confidence">Confianza: ${ai.confidence}%</span>
                        </div>
                        <div class="confidence-bar">
                            <div class="confidence-fill" style="width: ${ai.confidence}%"></div>
                        </div>

                        <div style="margin-top: 1.5rem;">
                            <div class="prediction-item">
                                <span class="prediction-label">🏆 Resultado Predicho</span>
                                <span class="prediction-value">${getPredictionText(ai.predictions.result, match)}</span>
                            </div>
                            <div class="prediction-item">
                                <span class="prediction-label">⚽ Total de Goles</span>
                                <span class="prediction-value">${ai.predictions.goals}</span>
                            </div>
                            <div class="prediction-item">
                                <span class="prediction-label">🎯 Ambos Marcan</span>
                                <span class="prediction-value">${ai.predictions.btts}</span>
                            </div>
                            <div class="prediction-item">
                                <span class="prediction-label">🚩 Córneres</span>
                                <span class="prediction-value">${ai.predictions.corners}</span>
                            </div>
                        </div>
                    </div>

                    ${homeStats && awayStats ? `
                        <div class="stats-grid">
                            <div class="stat-box">
                                <div class="stat-value">${homeStats.goals?.for?.average?.home || 'N/A'}</div>
                                <div class="stat-label">Goles Local</div>
                            </div>
                            <div class="stat-box">
                                <div class="stat-value">${awayStats.goals?.for?.average?.away || 'N/A'}</div>
                                <div class="stat-label">Goles Visitante</div>
                            </div>
                            <div class="stat-box">
                                <div class="stat-value">${homeStats.form || 'N/A'}</div>
                                <div class="stat-label">Forma Local</div>
                            </div>
                            <div class="stat-box">
                                <div class="stat-value">${awayStats.form || 'N/A'}</div>
                                <div class="stat-label">Forma Visitante</div>
                            </div>
                        </div>
                    ` : ''}

                    <div class="reasoning">
                        <div class="reasoning-title">📊 ANÁLISIS DETALLADO</div>
                        ${ai.reasoning.map(reason => `
                            <div class="reasoning-item">${reason}</div>
                        `).join('')}
                    </div>
                </div>
            `;

            results.classList.add('active');
        }

        function getPredictionText(prediction, match) {
            if (prediction === '1') {
                return `Victoria ${match.teams.home.name}`;
            } else if (prediction === '2') {
                return `Victoria ${match.teams.away.name}`;
            } else {
                return 'Empate';
            }
        }
    </script>
</body>
</html>
