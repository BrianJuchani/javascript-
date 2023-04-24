

function Holausuario(){
    alert("hola usurio");
}
Holausuario()



let trueOfalse=true;

function imformacion(){
    let monto=Number(prompt('ingrese su monto'));
    while(trueOfalse){
        if(monto===0){
            monto=Number(prompt('ingrese su monto porfavor'));
        }else{
            calcularCuotas(monto);
            console.log('su monto es '+ monto);   
            trueOfalse=false;
        }
    }
}
imformacion()

function calcularCuotas(monto) {
    let cuotas=Number(prompt('¿En cuanta cuotas pagara? \n3\n6\n12\n24'));
    while(trueOfalse){
        switch(cuotas){
            case 3:
                alert(`el monto con las cuotas es ${monto/cuotas}`);
                console.log(`el monto con las cuotas es ${monto/cuotas}`);
                trueOfalse=false;
                break;
            case 6:
                alert(`el monto con las cuotas $${monto/cuotas}`);
                console.log(`el monto con las cuotas es ${monto/cuotas}`);
                trueOfalse=false;
                break;
            case 12:
                alert(`el monto con las cuotas es $${monto/cuotas}`);
                console.log(`el monto con las cuotas es ${monto/cuotas}`);
                trueOfalse=false;
                break;
            case 24:
                alert(`el monto con las cuotas $${monto /cuotas}`);
                console.log(`el monto con las cuotas es ${monto/cuotas}`);
                trueOfalse=false;
                break;
            default:
                cuotas=Number(prompt('¿En cuanta cuotas pagara? \n3\n6\n12\n24'));
                break;
        }
    }
}




