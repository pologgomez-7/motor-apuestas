<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Analizador de Cuotas</title>
    <style>
        body { font-family: sans-serif; background: #1a1a1a; color: white; text-align: center; }
        .search-box { margin-top: 50px; background: #333; padding: 20px; border-radius: 10px; display: inline-block; }
        input { padding: 10px; border-radius: 5px; border: none; }
        button { padding: 10px 20px; background: #27ae60; color: white; border: none; border-radius: 5px; cursor: pointer; }
        #resultados { margin-top: 20px; display: flex; flex-direction: column; align-items: center; }
        .partido { background: #444; margin: 10px; padding: 15px; border-radius: 8px; width: 80%; }
    </style>
</head>
<body>
    <h1>🚀 Analizador de Cuotas Pro</h1>
    <div class="search-box">
        <input type="text" id="equipo" placeholder="Ej: Real Madrid">
        <button onclick="buscarCuotas()" id="btnBuscar">Analizar Mejor Cuota</button>
    </div>
    <div id="resultados"></div>

    <script>
        async function buscarCuotas() {
            const btn = document.getElementById('btnBuscar');
            const resDiv = document.getElementById('resultados');
            
            // Bloqueamos el botón para no gastar la API (Juicio Situacional)
            btn.disabled = true;
            btn.innerText = "Analizando...";
            resDiv.innerHTML = "Buscando en los servidores...";

            try {
                // Llamamos a tu motor de Vercel
                const response = await fetch('/api/index');
                const data = await response.json();
                
                // Aquí pondrías la lógica para mostrar los partidos
                resDiv.innerHTML = "¡Análisis completo! (Aquí aparecerán los datos de tu API)";
            } catch (error) {
                resDiv.innerHTML = "Error al conectar con el motor.";
            }

            btn.disabled = false;
            btn.innerText = "Analizar Mejor Cuota";
        }
    </script>
</body>

</html>
