const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", async (req, res) => {
    try{
    const response = await axios.get('https://api.cartola.globo.com/partidas');
    const data = response.data;
    res.json(data);
    } catch (error) {
  console.error('Error:', error);
  res.status(500).json({ error: 'Erro ao consumir a API externa' });
}
});

app.listen(port, () => {
    console.log(`Servidor Rodando na porta ${port}`);
})