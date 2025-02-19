let formulario = document.forms["formulario"];
let texto = formulario["texto"];
let email = formulario["email"];
let checkbox = formulario["check"];
formulario.addEventListener("submit", function(){
    console.log("hola");
})
email.addEventListener("input", function(){
    if(!email.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        // email.setCustomValidity("holadfasdf");
        // email.validity.valid=false;
        // email.reportValidity();
        email.nextElementSibling.innerText = "Email no válido";
        console.log("working");
    }else{
        email.nextElementSibling.innerText = "Email válido";
        console.log("working");
    }
});
texto.addEventListener("input", function(){
    if(texto.value.length > 5){
        texto.nextElementSibling.innerText = "Formulario incorrecto";
        console.log("hola");
    }else{
        texto.nextElementSibling.innerText = "Texto Correcto";
    }
})
for(var i = 0; i < checkbox.length; i++){
    checkbox[i].addEventListener("input", function(){
        this.nextElementSibling.innerText = "xd";
    })
}


    
