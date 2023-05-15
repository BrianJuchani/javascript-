const dbRopaFit = [
    {
        id:1,
        name: "remera",
        price:2500,
    },
    {
        id:2,
        name: "buzo",
        price:3500,
    },
    {
        id:3,
        name: "musculosa",
        price:2000,
    },
    {
        id:4,
        name: "termico",
        price:5000,
    },
]
ropasArr = [];
carritosArr= [];
let trueOfalse=true;


class Ropa{
    constructor(id,name,price){
        this.id=id;
        this.name=name;
        this.price=price;
    }
}


function pushRopas(){
    for(const element of dbRopaFit ){
        ropasArr.push(new Ropa(element.id,element.name,element.price));
    }
}    

pushRopas()


function HolaUsuario(){
    let usuario=prompt('HOLA , porfavor ingrese su nombre porfavor:');
    while(trueOfalse){
        if (usuario ===""){
            usuario=prompt('No ingreso su nombre,POR FAVOR INGRESE SU NOMBRE:');
            
        }else{
            alert(`Bienvenido ${usuario}`);
            ventaDeRopas()
            trueOfalse=false;
            
        }
    }
    
}
HolaUsuario()

function ventaDeRopas(){
    while(trueOfalse){
        let section=prompt('Elija: \n 1. Ver los productos disponibles que tenemos \n 2. Añadir al carrito\n 3. Ver los productos añadidos en el carrito \n 4. Eliminar un un producto del carrito\n 5. Comprar lo guardado en el carrito\n 6. salir')
        switch(section){
            case '1':
                verProductos()
                break
            case'2':
                añadirAlCarrito()
                break
            case '3':
                verProductosAñadidosAlCarrito()
                break
            case '4':
                pregunta()
                break
            case'5':
                comprarLoAñadidoAlCarrito()    
                break
            case '6':
                alert('vuelva pronto :) ')
                trueOfalse=false;
                break
            default:
                alert('no ingresaste nada')
                section=prompt('Elija: \n 1. Ver los productos disponibles que tenemos \n 2. Añadir al carrito\n 3. Ver los productos añadidos en el carrito \n 4. Eliminar un un producto del carrito\n 5. Comprar lo guardado en el carrito\n 6. salir')
        }
    }
}

function verProductos(){
    ropasArr.forEach((ropa)=>{
        alert(ropa.id+" "+ropa.name+" "+ropa.price);
    })
}

function añadirAlCarrito(){
    let compras=prompt('Diga los productos quiere comprar');
    let productoEncontrado=ropasArr.find((Ropa)=>{
        return Ropa.name === compras;
    })
    if(productoEncontrado){
        alert(productoEncontrado.name+" "+productoEncontrado.price);
        let agregar=prompt('¿desea agregarlo al carrito? \n 1. Si \n 2. No')
        if(agregar==1 ){
            carritosArr.push(productoEncontrado)
            alert("prenda agregada al carrito")
            console.log(productoEncontrado)
            seguir()
        }else{
            alert("producto no agregado")
            ventaDeRopas()
        }

    }
}

function seguir(){
    const seguirComprando =prompt ("¿desea seguir comprando? \n 1. Si \ 2.No" )
    if(seguirComprando==1){
        añadirAlCarrito()
    }else{
        if(carritosArr.length>0){
            total()
        }else{
            alert("gracias por añadir")
            ventaDeRopas()
        }
    }
}

function total(){
    let precioFinal=carritosArr.reduce((acumulador,Ropa)=>{
        return acumulador + Ropa.price
    },0)
    alert(`el total es ${precioFinal}`)
    console.log(precioFinal)
    ventaDeRopas()
}

function verProductosAñadidosAlCarrito(){
    carritosArr.forEach((ropa)=>{
        alert(ropa.id+" "+ropa.name+" "+ropa.price);
    })
    total()
}



function pregunta(){   
    while(trueOfalse){
        let seguro=prompt('estas seguro que lo queres eliminar\n 1. si \n 2 .no')
        switch(seguro){
            case '1':
                eliminar()
                break
            case '2':
                ventaDeRopas()
                break
            case 'z':  
                trueOfalse=false;  
            default:
                seguro=prompt('estas seguro que lo queres eliminar\n 1. si \n 2 .no')
                break
        }

    }
}

function eliminar(){
    let eliminar=prompt('Ingrese la prenda que quiere eliminar')
    let eliminando=carritosArr.find((producto)=>{
        return producto.name==eliminar;
    })
    if(eliminando){
        alert('la prenda si fue añadido')
        delet()
    }else{
        alert('no se encontro el producto')
    }
}

function delet(){
    carritosArr.forEach((producto)=>{
        let encontrado=carritosArr.indexOf(producto)
        carritosArr.splice(encontrado,1)
    })
    alert('se elimino con exito')
    ventaDeRopas()  
}




function comprarLoAñadidoAlCarrito(){
    carritosArr.forEach((ropa)=>{
        alert(ropa.id+" "+ropa.name+" "+ropa.price);
    })
    let comprando=prompt('Ingrese la prenda que quiera comprar del carrito')
    let comprandoRopa=carritosArr.find((producto)=>{
        return producto.name==comprando;
    })
    if(comprandoRopa){
        alert('la prenda se encontro en el carrito')
        final()
    }else{
        alert('no se encontro la prenda en el carrito')
        ventaDeRopas()
    }
}

function final(){
    carritosArr.forEach((producto)=>{
        let encontrado=carritosArr.indexOf(producto)
        carritosArr.splice(encontrado,1)
    })
    alert('la compra fue un exito')
    ventaDeRopas()  
}





ventaDeRopas()
console.log(carritosArr)
console.log(ropasArr)
