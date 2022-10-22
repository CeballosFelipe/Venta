const arepadelgada=document.getElementById("ventadelgada");
const arepacalidosa=document.getElementById("ventacalidosa");
const ptotalventa=document.getElementById("total_venta");
const botoncargar=document.getElementById("calcular");
const changeventadelgada=document.getElementById("ventadelgada");
const changeventacalidosa=document.getElementById("ventacalidosa");

changeventadelgada.addEventListener('change',funcion);
changeventacalidosa.addEventListener('change',funcion);
//botoncargar.addEventListener('click',funcion);//

function funcion(){   
    const delgada= parseFloat(arepadelgada.value);
    const calidosa= parseFloat(arepacalidosa.value);
    const totalventa=delgada+calidosa;
    ptotalventa.innerText=totalventa;
    
}

const botonquecambiadecolor=document.getElementById("botondeprueba");
botonquecambiadecolor.addEventListener('mouseover',function(){
    this.style.backgroundColor="black";
});
const botonquecambiadecolor_=document.getElementById("botondeprueba");
botonquecambiadecolor_.addEventListener('mouseout',function(){
    this.style.backgroundColor="red";
    this.style.cursor="pointer";
});


