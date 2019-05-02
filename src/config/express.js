import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import compress from 'compression';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import passport from 'passport';


import routes from '../routes/index';

const app = express();
app.use(compress());
app.use(helmet());
app.use(helmet.hidePoweredBy());
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());


app.get('/', (req, res) => res.send('Hello World!'));
app.use('/', routes);




export default app;
