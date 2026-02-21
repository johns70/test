"use strict";
// const { getAge, getUUID } = require('./plugins');
Object.defineProperty(exports, "__esModule", { value: true });
// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// const { buildMakePerson } = require('./js-foundation/05-factory')
// import getPokemonById from './js-foundation/06-promises';
// getPokemonById(4)
// .then( ( pokemon ) => console.log({ pokemon }) )
// .catch( ( err ) => console.log( err ) )
// .finally( () => console.log('Finalmente') );
const logger_plugin_1 = require("./plugins/logger.plugin");
const logger = (0, logger_plugin_1.buildLogger)('app.js');
logger.log("This is a message");
const messageError = (0, logger_plugin_1.buildLogger)('app.js');
messageError.msgError("That´s value not found");
// token de acceso
// Publicas
// ! Referencia a la función factory y uso
// const makePerson = buildMakePerson({ getUUID, getAge });
// const obj = { name: 'John', birthdate: '1985-10-21' };
// const john = makePerson( obj );
// console.log({ john });
//# sourceMappingURL=app.js.map