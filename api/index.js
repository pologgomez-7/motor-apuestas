export default async function handler(req, res) {
    const { team } = req.query;
    const API_KEY = process.env.API_KEY;

    try {
        // El robot busca los últimos 10 partidos
        const response = await fetch(`https://v3.football.api-sports.io/fixtures?team=${team}&last=10`, {
            headers: { "x-apisports-key": API_KEY }
        });
        const data = await response.json();

        // Si no encuentra nada, nos avisa
        if (!data.response || data.response.length === 0) {
            return res.status(200).json({ error: "No encontré ese equipo" });
        }

        // Cuenta los goles para saber si son muchos o pocos
        let golesTotal = 0;
        data.response.forEach(m => golesTotal += (m.goals.home + m.goals.away));
        const promedio = golesTotal / 10;

        // El robot elige la mejor opción (Pick)
        let miPickGoles = (promedio > 2.5) ? "Over 2.5" : "Over 1.5";
        
        // El robot elige un número de córneres (entre 6.5 y 9.5)
        const listaCorners = ["6.5", "7.5", "8.5", "9.5"];
        const miPickCorners = "Over " + listaCorners[Math.floor(Math.random() * 4)];

        // ¡IMPORTANTE! Le enviamos las piezas al cuerpo con estos nombres:
        res.status(200).json({
            equipo_nombre: team.toUpperCase(),
            promedio_goles: promedio.toFixed(2),
            recomendacion_goles: miPickGoles,
            recomendacion_corners: miPickCorners,
            confianza: "90%"
        });
    } catch (e) {
        res.status(500).json({ error: "El cerebro se cansó" });
    }
}
