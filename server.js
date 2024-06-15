const express = require('express');
const bodyParser = require('body-parser');
const { initDB } = require('./modeles');
const blagueRoutes = require('./routes/blagueRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api', blagueRoutes);

const PORT = process.env.PORT || 3000;

initDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Serveur démarré sur le port ${PORT}`);
    });
});
