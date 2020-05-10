const express = require('express');
const keys = require('./config/keys')
const stripe = require('stripe')(keys.stripeSecretKey);
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();
// handlebars middleware
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

//body parser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//set static folder for a place to put images and extra style sheets

app.use(express.static(`${__dirname}/publics`));

//Index route

app.get('/addon', (req, res) => {
    res.render('index', {
        stripePublishableKey: keys.stripePublishableKey
    });
});
//charge route
app.post('/charge', (req, res) => {
    const amount = 250000;
   // console.log(req.body);
   // res.send('test');
    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
    .then(customer => stripe.charges.create({
        amount,
        description: 'Neldo Light',
        currency: 'usd',
        customer: customer.id
    }))
    .then(charge => res.render('success'))
});
const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});