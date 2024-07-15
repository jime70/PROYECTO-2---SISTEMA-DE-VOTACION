// Permitir a los usuarios crear encuestas con opciones de respuesta
//  Permitir a los usuarios votar en las encuestas
//  Mostrar los resultados de las encuestas
//  Almacenar los datos de las encuestas y los votos en una variable
//  Almacenar los datos de las encuestas y los votos en una estructura de datos
//  Las encuestas deben contener al menos 8 preguntas con opciones de respuesta.
 
//Crear una clase questinario, que alberga un objeto con preguntas y respuestas
const questionario = [];

class crearEncuesta {
    constructor(question, options) {
        this.question = question;
        this.options = options;
    }
    votar() 
}

let cantidadEncuestas = parseInt(prompt(`Ingrese el número de preguntas a responder`), 10);

if (cantidadEncuestas >= 8) {
    for (let i = 0; i < cantidadEncuestas; i++) {
        let question = prompt(`Por favor, ingrese la pregunta:`);
        let options = prompt(`Por favor, ingrese sus opciones, separadas por comas:`);
        let nuevaEncuesta = new crearEncuesta(question, options);
        questionario.push(nuevaEncuesta);
    }
    console.log("Comencemos", questionario);
} else {
    console.log("Lo sentimos, el número mínimo de preguntas es 8");
}

//¿se puede transformar esto a objeto?
var respuestas = [];

function votar(questionario) {
    console.log("Bienvenido al cuestionario, por favor siga estas instrucciones");
    for (let i = 0; i < questionario.length; i++) {
        console.log(`La pregunta es: ${questionario[i].question} y las opciones son: ${questionario[i].options}`);
        let respuesta;
        let respuestaValida = false;

        while (!respuestaValida) {
            respuesta = prompt(`Elija su respuesta a la pregunta: ${questionario[i].question} (opciones: ${questionario[i].options})`);
            if (questionario[i].options.includes(respuesta)) {
                respuestaValida = true;
                respuestas.push(respuesta);
                console.log(`Su respuesta a la pregunta: ${questionario[i].question} es: ${respuesta}`);
            } else {
                console.log(`Respuesta inválida. Por favor, elija una de las siguientes opciones: ${questionario[i].options}`);
            }
        }
    }
    console.log("GRACIAS POR SU PARTICIPACIÓN");
}
votar(questionario)