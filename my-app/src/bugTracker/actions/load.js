import bugApi from '../services/bugApi'

//action using the thunk middleware
/* export function load(){
    return async function(dispatch){
        const bugs = await bugApi.getAll();
        const action = { type : 'BUG_INIT', payload : bugs };
        dispatch(action);
    }
} */

export async function load() {
    const bugs = await bugApi.getAll();
    const action = { type: "BUG_INIT", payload: bugs };
    return action;
}