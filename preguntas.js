function verificarRespuestas() {
    const respuestasCorrectas = {
        q1: "Madrid",
        q2: "8",
        q3: "Marte"
    };

    let puntaje = 0;

    const respuestasUsuario = {
        q1: document.querySelector('input[name="q1"]:checked'),
        q2: document.querySelector('input[name="q2"]:checked'),
        q3: document.querySelector('input[name="q3"]:checked')
    };

    for (let pregunta in respuestasCorrectas) {
        if (respuestasUsuario[pregunta] && respuestasUsuario[pregunta].value === respuestasCorrectas[pregunta]) {
            puntaje++;
        }
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    if (puntaje === 3) {
        resultado.className = "ganador";
        resultado.innerHTML = "<h2>¡Felicidades, eres el ganador!</h2>";
    } else {
        resultado.className = "perdedor";
        resultado.innerHTML = `<h2>Lo siento, has perdido. Obtuviste ${puntaje} de 3 respuestas correctas.</h2>`;
    }
}
