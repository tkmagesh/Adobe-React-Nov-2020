import { applyMiddleware } from 'redux';

//our custom built middlewares
/* 
import logger from './loggerMiddleware';
import thunk from './thunkMiddleware'; 
*/

import promiseMiddleware from './promiseMiddleware';

//3rd party middlewares
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootMiddleware = applyMiddleware(logger, thunk, promiseMiddleware);

export default rootMiddleware