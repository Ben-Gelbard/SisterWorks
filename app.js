const express = require('express');
const keys = require('./config/keys')
const stripe = require('stripe')(keys.stripeSecretKey);
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const favicon = require('serve-favicon')


const app = express();

// Favicon
app.use(favicon(__dirname + '/public/img/icons/favicon.png'));

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

// Body Parser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

// Set Static Folder
app.use(express.static(`${__dirname}/public`));

// Index Route
app.get('/', (req, res) => {
    res.render('index', {
        stripePublishableKey: keys.stripePublishableKey
    });
});

// Charge Route
app.post('/charge', (req, res) => {
    const amount = donation_amount;
    stripe.customers.create({
        amount: donation_amount,
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
    .then(customer => stripe.charges.create({
        amount,
        description: "SisterWorks Donation",
        currency: 'aud',
        customer: customer.id,
    }))
    .then(charge => res.render('success'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});