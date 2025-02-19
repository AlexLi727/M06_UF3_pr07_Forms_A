let formulario = document.forms["formulario"];
let texto = formulario["texto"];
let email = formulario["email"];
let checkbox = formulario["check"];
let select = formulario["select"];
formulario.addEventListener("submit", function(evt){
    var formOk = false;
    if(validateCheckbox() && validateEmail() && validateText() && validateSelect()){
        formOk = true;
    }
    if(!formOk){
        evt.preventDefault();
    }
})
email.addEventListener("input", validateEmail);
    function validateEmail(){
        if(!email.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            email.nextElementSibling.innerText = "Email no válido";
            email.nextElementSibling.style.color = "red";
            return false;    
        }else{
            email.nextElementSibling.innerText = "Email válido";
            email.nextElementSibling.style.color = "green";
            return true;
        }
    };

texto.addEventListener("input", validateText)
    function validateText(){
        if(texto.value.length > 5 || texto.value.length < 3){
            texto.nextElementSibling.innerText = "Formulario incorrecto";
            texto.nextElementSibling.style.color = "red";
            return false;
        }else{
            texto.nextElementSibling.innerText = "Texto Correcto";
            texto.nextElementSibling.style.color = "green";
            return true;
        }
    }

for(var i = 0; i < checkbox.length; i++){
    checkbox[i].addEventListener("input", validateCheckbox)
        function validateCheckbox(){
        var selecciones = 0;
        checkbox.forEach(function(a, index, c){
            if(c[index].checked == true){
                selecciones++;
            }
        })
        if(selecciones != 2){
            document.getElementById("validatecheck").innerHTML = "Hay que seleccionar dos opciones";
            document.getElementById("validatecheck").style.color = "red";
            return false;
        }else{
            document.getElementById("validatecheck").innerHTML = "Seleccion correcta";
            document.getElementById("validatecheck").style.color = "green";
            return true;
        }
        
    }
}
var selectOptions = select.options;
for(var i = 0; i < selectOptions.length; i++){
    select.addEventListener("input", validateSelect);
    function validateSelect(){
        var index = select.selectedIndex;
        if(selectOptions[index].value == "2"){
            document.body.style.backgroundColor = "greenyellow";
            return true;
        }else{
            document.body.style.backgroundColor = "white";
            return false;
        }
    }
}
