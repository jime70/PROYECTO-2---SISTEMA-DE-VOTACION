// Permitir a los usuarios crear encuestas con opciones de respuesta
//  Permitir a los usuarios votar en las encuestas
//  Mostrar los resultados de las encuestas
//  Almacenar los datos de las encuestas y los votos en una variable
//  Almacenar los datos de las encuestas y los votos en una estructura de datos
//  Las encuestas deben contener al menos 8 preguntas con opciones de respuesta.

// necesitamos lugar para almacenar 8 preguntas, opciones de respuesta y respuestas correctas en array questions
// si es un cuestionario con opciones de respuesta y que permita votar, se entiende que son
// respuestas abiertas, sin que haya una respuesta correcta (ej. cuánto café toma al día)
// cada pregunta tiene un objeto con la pregunta, opciones de respuesta y respuesta usuario
//no son preguntas fijas, se le da la opción al usuario de crearlas y van a variar. 


// Función para crear un cuestionario
const crearCuestionario = (cantidad) => {
    const preguntas = [];
    for (let i = 0; i < cantidad; i++) {
      const question = prompt(`Por favor, ingrese la pregunta:`);
      const options = prompt(`Por favor, ingrese sus opciones, separadas por comas:`).split(',');
      preguntas.push({ question, options });
    }
    return preguntas;
  };
  
  // Función para mostrar una pregunta
  const mostrarPregunta = (encuesta) => {
    console.log(`La pregunta es: ${encuesta.question} y las opciones son: ${encuesta.options.join(', ')}`);
  };
  
  // Función para obtener una respuesta
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
  
  // Función para votar en el cuestionario
  const votar = (cuestionario) => {
    console.log("Bienvenido al cuestionario, por favor siga estas instrucciones");
    const respuestas = cuestionario.map(encuesta => {
      mostrarPregunta(encuesta);
      const respuesta = obtenerRespuesta(encuesta);
      console.log(`Su respuesta a la pregunta "${encuesta.question}" fue: ${respuesta}`);
      return { pregunta: encuesta.question, respuesta };
    });
    return respuestas;
  };
  
  // Ejemplo de uso
  // Aquí especificamos la cantidad de preguntas que queremos en el cuestionario. 
  const numeroDePreguntas = 8;
  const cuestionario = crearCuestionario(numeroDePreguntas);
  const respuestas = votar(cuestionario);
  console.log(respuestas);
  