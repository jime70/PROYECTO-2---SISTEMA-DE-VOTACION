GITHUB PROYECTO 2
DISEÑO DE SISTEMA DE VOTACIÓN
En este proyecto, tenemos el desafío de desarrollar un programa de JavaScript que permita a los usuarios crear encuestas, votar y ver los resultados aplicando comandos en terminal. Por lo tanto, en este ejercicio, el sistema de votación diseñado debe contar con requisitos tales como: 
•	Permitir a los usuarios crear encuestas con opciones de respuesta.
•	Permitir a los usuarios votar en las encuestas. 
•	Mostrar los resultados de las encuestas en tiempo real.
•	Almacenar los datos de las encuestas y los votos en una variable.
•	Implementar la solución utilizando programación orientada a objetos (POO) y programación funcional (PF),
Para este proyecto comencé con la Programación Funcional, el tratar de entenderla plenamente me va a tomar práctica, pero en palabras sencillas lo que aprendí de este tipo de programación es vamos creando funciones que permitan sortear cada etapa que se usará en el resultado final. Sin embargo, el término “encuestas” puede tener más de una definición, por lo tanto, el tipo de encuesta también puede ser de distintos tipos, entonces volví a lo que decían la instrucción y espero haber diseñado un programa que permita al usuario crear cualquier tipo de encuesta y crear también las opciones a entregar. 

Programación Funcional
Se basa en un estilo de programación que se centra en el uso de funciones que actúan igual que las piezas de LEGO para resolver un problema. Entonces, comencé creando varios pasos: 
1.	Primero creé una función para crear el cuestionario. Esta función contiene el elemento cuestionario y va a albergar la función flecha que llama a la constante preguntas. Esta constante tiene un array vacío que alberga dos promt, uno relacionado a las preguntas donde pedimos que se ingrese la cantidad de preguntas y el segundo pide que se ingrese la cantidad de opciones. Luego usé método push para agregar preguntas al cuestionario y eso retorna las nuevas preguntas. 

const crearCuestionario = (cantidad) => {
    const preguntas = [];
    for (let i = 0; i < cantidad; i++) {
      const question = prompt(`Por favor, ingrese la pregunta:`);
      const options = prompt(`Por favor, ingrese sus opciones, separadas por comas:`).split(',');
      preguntas.push({ question, options });
    }
    return preguntas
  };

2.	Ahora que ingresé las preguntas, tengo que mostrarlas para futuros usuarios. Por lo que creé la función “mostrar una pregunta”, con una const mostrarPregunta que alberga una función flecha que llamará a la pregunta que hicimos previamente y mostrará las opciones. 
// Función para mostrar una pregunta
  const mostrarPregunta = (encuesta) => {
    console.log(`La pregunta es: ${encuesta.question} y las opciones son: ${encuesta.options.join(', ')}`);
  };

3.	Tenemos las preguntas pero aún no hemos permitido que nuestro usuario responda las preguntas. Entonces se creó la const obtenerRespuesta, que llama a (respuesta). Para asegurar que el usuario responda solo las alternativas entregadas, usé un bucle con while / if / else. 

  const obtenerRespuesta = (encuesta) => {
    let respuesta;
    let respuestaValida = false;
    while (!respuestaValida) {
      respuesta = prompt(`Elija su respuesta a la pregunta: ${encuesta.question} (opciones: ${encuesta.options.join(', ')})`);
      if (encuesta.options.includes(respuesta)) {
        respuestaValida = true;
      } else {
        console.log(`Respuesta inválida. Por favor, elija una de las siguientes opciones: ${encuesta.options.join(', ')}`);
      }
    }
    return respuesta;
  };

4.	Ahora que tenemos el cuestionario y las opciones, entonces llega el momento de votar. Para eso se creó la conts “votar” que muestra cada pregunta del cuestionario, obtiene la respuesta del usuario y luego devuelve una lista con las preguntas y sus respuestas.

  const votar = (cuestionario) => {
    console.log("Bienvenido al cuestionario, por favor siga estas instrucciones");
    const respuestas = cuestionario.map(encuesta => {
      mostrarPregunta(encuesta);
      const respuesta = obtenerRespuesta(encuesta);
      console.log(`Su respuesta a la pregunta "${encuesta.question}" fue: ${respuesta}`);
      return { pregunta: encuesta.question, respuesta };
    });
    return respuestas;

5.	Por último, se creó la const numeroDePreguntas para establecer que será un cuestionario con 8 preguntas, que recoge las respuestas mediante una votación y luego imprime las respuestas en la consola.

const numeroDePreguntas = 8; const cuestionario = crearCuestionario(numeroDePreguntas); const respuestas = votar(cuestionario); console.log(respuestas);


PROGRAMACIÓN ORIENTADA A OBJETOS

1.	Para comenzar creamos la clase “questionario” con un array vacío donde después iremos ingresando las preguntas y opciones. 
const questionario = [];

class crearEncuesta {
    constructor(question, options) {
        this.question = question;
        this.options = options.split(',');    }
}

2.	Al igual que el programa anterior, usé un bucle para asegurarme que el número mínimo de preguntas fuera 8 con condicional if, usé for para crear el requerimiento de ingreso de las preguntas y opciones, “else” lo usé cuando no se cumple con el número mínimo de preguntas.
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

3.	Como etapa final, creé una función para votar las preguntas del cuestionario. En esta función se indica que para cada pregunta, se muestran las opciones disponibles y solicita una respuesta válida. Las respuestas se almacenan en el arreglo respuestas y, al finalizar, agradece la participación del usuario.

var respuestas = [];

function votar(questionario) {
    console.log("Bienvenido al cuestionario, por favor siga estas instrucciones");
    for (let i = 0; i < questionario.length; i++) {
        console.log(`La pregunta es: ${questionario[i].question} y las opciones son: ${questionario[i].options.join(', ')}`);
        let respuesta;
        let respuestaValida = false;

        while (!respuestaValida) {
            respuesta = prompt(`Elija su respuesta a la pregunta: ${questionario[i].question} (opciones: ${questionario[i].options.join(', ')})`);
            if (questionario[i].options.includes(respuesta)) {
                respuestaValida = true;
                respuestas.push(respuesta);
                console.log(`Su respuesta a la pregunta: ${questionario[i].question} es: ${respuesta}`);
            } else {
                console.log(`Respuesta inválida. Por favor, elija una de las siguientes opciones: ${questionario[i].options.join(', ')}`);
            }
        }
    }
    console.log("GRACIAS POR SU PARTICIPACIÓN");
}

4.	Finalmente usamos votar(questionario) para ejecutar el programa.
votar(questionario);


