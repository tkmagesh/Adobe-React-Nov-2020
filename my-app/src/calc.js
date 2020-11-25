export function add(x,y){
    return x + y;
}

export function subtract(x,y){
    return x - y;
}
//the above are assembled in module object and exported

//default export
const calc = { add, subtract }

export default calc;