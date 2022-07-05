

 let comida = prompt("Ingresa una comida. Sugerencia: milanesa");

function laComida () {

    if (comida === "arroz"){
        alert("uyy que horrible")
    } if (comida === "milanesa") {
        alert("uy que delicia")
    } else {
        alert("un asco")
        
    }
}

laComida("milanesa")

//OPERADOR TERNARIO:

comida === "milanesa" ? alert("uy que delicia, eso si es una comida!") : alert("Esa " + comida + " es un asco");


//OPERADOR LOGICO AND

const cajaDeHerramientas = [];

cajaDeHerramientas.length === 0 && alert("La caja esta vacia") ;



const p = document.querySelector("#texto");


let botiquin = {
    nombreComercial: "Dioxaflex",
    cantidad: 23
}

let farmacia = botiquin.cantidad >= 20 && (p.innerHTML = `<strong>Debemos comprar este remedio:  ${botiquin.nombreComercial}</strong>`);

console.log(farmacia)


//OPERADOR LOGICO OR


const pacienteEnfermo1 = {
    nombre: "marcos",
    edad: 40
}

const pacienteSano= null;

console.log (pacienteEnfermo1 || "El paciente  asistio");

console.log (pacienteSano || "El paciente se quedo en casa")
 
//DESTRUCTURING

    //metodo anterior:

/* let nombreComercial= botiquin.nombreComercial;
console.log(nombreComercial)

 */
    //nuevo metodo: destructuring de objeto

let {nombreComercial, cantidad}= botiquin; //en laas variables que declare tengo guardadas las propiedades del objeto.
console.log(cantidad);
console.log(nombreComercial);


    //destructuring de array


const medicamento = ["reliveran", "dexmetin", "pipertazo", "lidocaina 2%"];

const [medicamento1, medicamento2, medicamento3] = medicamento;



console.log(medicamento1);
console.log(medicamento2);
console.log(medicamento3);



//SPREAD OPERATOR


console.log(...medicamento[2]);

console.log(...medicamento1);

console.log(...medicamento);


const promedio= [7, 8, 10, 4, 9];

console.log(Math.min(promedio)); //se debe usar el spread operator escribiendo ...

console.log(Math.min(...promedio))


//puedo desglosar 2 arrays

const marcas= ["nike", "adidas", "puma"];
const deportes= ["futbol", "volley", "basketball"];

const mezcla= [...marcas, ...deportes];


console.log(...mezcla)


//agregar un sweet alert al button





const sweet=document.querySelector("#sweet")

sweet.addEventListener("click", ()=>{
   
    swal({
        title: "¿Tienes ganas de continuar?",
        text: "Cuando elijas una respuesta, te daremos opciones!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Muy Bien, quien persevera triunfa!", {
                    icon: "success",
                });
            } else {
                swal("Opss, otro día será!");
            }
        });

})


