let form1 = document.forms["form1"];
let edadfecha = form1["edadfecha"];
var fecha = new Date();
var fecha = fecha.getFullYear();
form1.addEventListener("submit", function(evt){
    var formOk = false;
    if(validateDate()){
        formOk = true;
    }
    if(!formOk){
        evt.preventDefault();
    }
})
edadfecha.addEventListener("input", validateDate)
function validateDate(){
    edadfecha.setCustomValidity("");
    if(edadfecha.checkValidity()){
        console.log("hola");
        return true;
    }else{
        edadfecha.setCustomValidity("Formato de fecha: DD/MM/YYYY");
        edadfecha.reportValidity();
        return false;
    }
}
