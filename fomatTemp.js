export function toCel(initialTemp){
    const celTemp =  (initialTemp - 273).toFixed(2);
    return celTemp;
}