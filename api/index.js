export default async function handler(req, res) {
    const { team } = req.query;
    const API_KEY = process.env.API_KEY;

    try {
        // El robot busca los últimos 10 partidos del equipo
        const response = await fetch(`https://v3.football.api-sports.io/fixtures?team=${team}&last=10`, {
            headers: { "x-apisports-key": API_KEY }
        });
        const data = await response.json();

        if (!data.response || data.response.length === 0) {
            return res.status(200).json({ error: "No encontré datos de ese equipo." });
        }

        // El robot suma todos los goles para sacar un promedio
        let golesTotal = 0;
        data.response.forEach(partido => {
            golesTotal += (partido.goals.home + partido.goals.away);
        });
        const promedio = golesTotal / 10;

        // El robot decide el mejor "Pick" de goles solo
        let pickGoles = "Under 3.5"; 
        if (promedio > 2.5) pickGoles = "Over 2.5";
        if (promedio < 1.5) pickGoles = "Over 1.5";

        // El robot inventa un pick de córneres entre 6.5 y 9.5 (Autónomo)
        const corners = (Math.random() * (9.5 - 6.5) + 6.5).toFixed(1);

        // Enviamos la respuesta final
        res.status(200).json({
            equipo: team,
            goles: promedio.toFixed(1),
            pick_goles: pickGoles,
            pick_corners: corners + " Córneres"
        });
    } catch (error) {
        res.status(500).json({ error: "El motor se mareó un poco." });
    }
}
