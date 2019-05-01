import path from "path";
import fs from "fs";
import _ from 'lodash';
const Sequelize = require('sequelize');

const db = {};

const sequelize = new Sequelize('linguadb', 'dev', 'dev', {
    host: 'localhost',
    dialect: 'postgres'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

const modelsDir = path.normalize(`${__dirname}/../models`);

// loop through all files in models directory ignoring hidden files and this file
fs.readdirSync(modelsDir)
    .filter(file => (file.indexOf('.') !== 0) && (file.indexOf('.map') === -1))
    // import model files and save model names
    .forEach((file) => {
        console.log(`Loading model file ${file}`); // eslint-disable-line no-console
        const model = sequelize.import(path.join(modelsDir, file));
        db[model.name] = model;
    });

// Synchronizing any model changes with database.
sequelize
    .sync()
    .then(() => {
        console.log('Database synchronized'); // eslint-disable-line no-console
    })
    .catch((error) => {
        if (error) console.log('An error occured %j', error); // eslint-disable-line no-console
    });

module.exports = _.extend({
    sequelize,
    Sequelize,
}, db);
