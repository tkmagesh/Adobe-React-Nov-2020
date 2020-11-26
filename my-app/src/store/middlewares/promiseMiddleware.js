const promiseMiddleware = store => next => async action => {
    if (action instanceof Promise){
        const actionObj = await action;
        store.dispatch(actionObj);
    } else {
        next(action);
    }
}

export default promiseMiddleware;