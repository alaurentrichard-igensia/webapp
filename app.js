const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

function calcul(a, b) {
  return a + b;
}

app.get('/', (req, res) => {
  res.send('Hello DevOps - webapp sur Kubernetes ! 2 + 3 = ' + calcul(2, 3));
});

// Sonde utilisée par Kubernetes
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log('Serveur démarré sur le port ' + PORT);
  });
}

module.exports = { calcul, app };
