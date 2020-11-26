import { applyMiddleware } from 'redux';

import logger from './loggerMiddleware';
import thunk from './thunkMiddleware';

const rootMiddleware = applyMiddleware(logger, thunk);

export default rootMiddleware