
function convertir() {
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = window.dolarValue;
    let euro = 185;
    if (document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("Si sigue con la operacion recibira: $" + resultado.toFixed(2))
    }
    else if (document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("Si continua con la operacion recibira: €" + resultado.toFixed(2));
    }
    else{
        alert("Tenes que completar todos los requerimientos")
    }
}
function onSuccess(result) {
    document.getElementById('dolar_value').innerHTML = result.blue.value_avg
    window.dolarValue = result.blue.value_avg
}
function onFail(result) {
    document.getElementById('dolar_value').innerHTML = 'Hubo un error';
} 
function onStartup() {
    const getDolarValues = fetch('https://api.bluelytics.com.ar/v2/latest');
    getDolarValues.then(res => res.json()).then(onSuccess).catch(onFail)
}