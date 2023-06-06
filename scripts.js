let resultat = "";

function addNombre(char){

resultat += (char);
document.querySelector('#result').value = resultat
}

function clearResultat(){
    resultat ="";
    document.getElementById('result').value ="";

}

function calculate(){
    const nombreUser = eval(resultat);
    resultat = nombreUser.toString();
    document.getElementById('result').value = resultat;
    
}
console.log(calculate);