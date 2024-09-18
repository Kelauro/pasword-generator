let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let boton2 = document.getElementById('limpiar');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$_%^&*(';

function generar(){
  
    let numeroDigitado = parseInt (cantidad.value);
    
    if( numeroDigitado < 8){
       alert("La cantidad de caracteres tiene que ser mayor que 8");
    }
    
    const resultado = document.getElementById("resultado");
    
    let fuerza = "Débil";
    
    let password = ' ';
    for(let i=0; i < numeroDigitado; i++){
      
      let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
      
        password+=caracterAleatorio;
     
       const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/; // Fuerte
    const mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/; // Media
    const weakRegex = /^(?=.{6,}).*$/; // Débil

    if (strongRegex.test(password)) {
        fuerza = "FUERTE";
        color = "#0f0";
    } else if (mediumRegex.test(password)) {
        fuerza = "MEDIA";
        color = "#ff0";
    } else if (weakRegex.test(password)) {
        fuerza = "DÉBIL";
        color = "#f00";
    }

    resultado.textContent = `Nivel: ${fuerza}`;
}
  
    contrasena.value =  password;
    resultado.style.color = color;
    resultado.style.fontSize = '18px';

    
}

function limpiarCampo(){
   
   cantidad.value = '';
   resultado.textContent = '';
   contrasena.value = '';
}