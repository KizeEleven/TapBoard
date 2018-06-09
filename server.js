/*
Import des composants du serveur
Pour fonctionner, un serveur NodeJS à besoin de différents composants spécifiques.
*/
const express = require('express'); // => Composant principale
const bodyParser = require('body-parser'); // => Composant poru analyser les requêtes serveur
const path = require('path'); // => Composant pour définir le dossier statique
const ejs = require('ejs'); // => Composant pour le moteur de rendu
const mongoose = require('mongoose');
const cors = require('cors');
//

/*
Import du fichier des routes
Les routes du serveurs sont configurer dans des fichiers spécifiques
*/
const index = require('./routes/index');
const auth = require('./routes/auth');
const game = require('./routes/game');

const app = express();
app.use(cors());
/* Configuration du serveur

Une fois les composants du serveur importés, il faut les configurer pour qu'ils soient actifs.
*/
mongoose.connect('mongodb://127.0.0.1:27017');
// Définition du serveur et du port

app.set('port', (process.env.PORT || 3000));

// Définition du dossier static
app.set('views', __dirname + '/www');
app.use(express.static(path.join(__dirname, 'www')));

// Configuration du moteur de rendu
app.engine('html', require('ejs').renderFile);
// Définition du moteur de rendu
app.set('view engine', 'html');

// Configuration de BodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//



/*
Définition des routes
Chaque adresse (route) appelle un fichier JS spécifique.
*/  
// Routes client
app.use('/api', auth);
app.use('/api', game);
app.use('/', index);

/*
Redirection 404
Après la définition des routes, il faut configurer la redirection 404
*/
app.get('*', (req, res) => { // => Capter l'appel sur les pages inéxistantes
    res.render('404'); // => Renvoyer la vue "404.html"
});
//

/*
Lancer le serveur
A la fin de toute la configuration serveur, il faut le lancer pour l'écouter.
*/
app.listen(app.get('port'), () => console.log(`Le serveur est lancé sur le port ${ app.get('port') }`) );
//
