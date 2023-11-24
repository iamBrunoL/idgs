//function validar(){
//    alert($("#user").val());   //con el # busca utilizando el id

//    var pass=document.getElementById("password")
//    alert(pass.value)
//}


var bandera= false;

function validar(){
    if(bandera){
        console.log("Validacion completa");
    }
}

function correctCaptcha(){
    console.log("Captcha resuelto correctamente")
    bandera= true;
}