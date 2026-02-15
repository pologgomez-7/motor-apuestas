export default async function handler(req, res) {

  const API_KEY = process.env.API_KEY;

  const { date } = req.query;

  const response = await fetch(`https://v3.football.api-sports.io/fixtures?date=${date}`, {
    headers: {
      "x-apisports-key": API_KEY
    }
  });

  const data = await response.json();

  res.status(200).json(data);
}
