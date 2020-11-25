const StateManager = (function(){
    let _currentState = undefined,
        _callbacks = [],
        _reducer = undefined;

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        if (typeof callback === 'function')
            _callbacks.push(callback);
    }

    //private
    function triggerStateChange(){
        _callbacks.forEach(callback => callback());
    }

    function dispatch(action){
        const newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        triggerStateChange();
    }

    function createStore(reducer){
        if (typeof reducer !== 'function')
            throw new Error('reducer has to be a function');
        _reducer = reducer;
        const store = { 
            getState : getState,  
            subscribe : subscribe, 
            dispatch : dispatch
        };
        return store;
    }

    return { createStore };
})();