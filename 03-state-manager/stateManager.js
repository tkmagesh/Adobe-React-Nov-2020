const StateManager = (function(){
    let _currentState = undefined,
        _callbacks = [],
        _reducer = undefined,
        _init_action = { type : '@@INIT-ACTION' };

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
        //to initialize the current state with the valid default state
        _currentState = _reducer(_currentState /* undefined */, _init_action);
        const store = { 
            getState : getState,  
            subscribe : subscribe, 
            dispatch : dispatch
        };
        return store;
    }

    function bindActionCreators(actionCreators, dispatch) {
        const actionDispatchers = {};
        for (let key in actionCreators) {
            actionDispatchers[key] = function (...args) {
                const action = actionCreators[key](...args);
                dispatch(action);
            }
        }
        return actionDispatchers;
    }

    return { createStore, bindActionCreators };
})();