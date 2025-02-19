let form1 = document.forms["form1"];
let edadfecha = form1["edadfecha"];
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
    if(!edadfecha.validity.patternMismatch){
        console.log("hola");
        return false;
    }else{
        return true;
    }
}