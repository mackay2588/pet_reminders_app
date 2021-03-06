
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const addOwnerRouter = require('./routes/addOwner.router');
const ownerProfileRouter = require('./routes/ownerProfile.router');
const addPetRouter = require('./routes/addPet.router');
const getPetsRouter = require('./routes/getPets.router');
const updatePetsRouter = require('./routes/updatePet.router');
const careTypeRouter = require('./routes/careType.router');
const careHistoryRouter = require('./routes/careHistory.router');
const smsMessageRouter = require('./routes/smsMessage.router');
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/addOwner', addOwnerRouter);
app.use('/api/ownerProfile', ownerProfileRouter);
app.use('/api/addPet', addPetRouter);
app.use('/api/getPets/', getPetsRouter);
app.use('/api/updatePet', updatePetsRouter);
app.use('/api/careTypes', careTypeRouter);
app.use('/api/careHistory', careHistoryRouter);
app.use('/api/smsMessage', smsMessageRouter);


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
