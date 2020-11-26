import { applyMiddleware } from 'redux';

//our custom built middlewares
/* 
import logger from './loggerMiddleware';
import thunk from './thunkMiddleware'; 
*/

//3rd party middlewares
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootMiddleware = applyMiddleware(logger, thunk);

export default rootMiddleware