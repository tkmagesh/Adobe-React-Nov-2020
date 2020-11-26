import bugApi from '../services/bugApi'

export function load(){
    return async function(dispatch){
        const bugs = await bugApi.getAll();
        const action = { type : 'BUG_INIT', payload : bugs };
        dispatch(action);
    }
}