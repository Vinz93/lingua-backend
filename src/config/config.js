import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
[
    'NODE_ENV',
    'PORT',
    'DBNAME',
    'DBUSER',
    'DBPASSWORD',
    'DBDIALECT',
].forEach((name) => {
    if (!process.env[name]) {
        throw new Error(`Environment variable ${name} is missing`);
    }
});

export const database = {
    name: process.env.DBNAME,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    dialect: process.env.DBDIALECT,
};

export const appConfig = {
    env: process.env.NODE_ENV,
    host: process.env.HOST || 'http://127.0.0.1',
    path: '/v1',
    basePath: '/api',
    port: process.env.PORT,
    basePort: 3000,
    root: path.join(__dirname, '../../../'),
    passportSecret: '232323kadcfcfTHB.ssa',
};

export const constants = {
    saltRounds: 10,
    tokenExpTime: 6,
};
