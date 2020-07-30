const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const getRoute = require('./routes/getRoutes');

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(expressLayouts);

app.use('/static', express.static(__dirname + '/public'));
app.use(express.json());

app.use(getRoute);

app.listen(3333, () => {
	console.log('Servidor aberto! acesse: http://127.0.0.1:3333');
});