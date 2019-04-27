import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import compress from 'compression';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';


const app = express();
app.use(compress());
app.use(helmet());
app.use(helmet.hidePoweredBy());
app.use(methodOverride('X-HTTP-Method-Override'));

if (process.env === 'development') {
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({
        extended: true,
    }));
}

app.use(bodyParser.json());
// c
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));




export default app;
