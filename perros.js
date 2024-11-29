function mostrarResultados() {
    const raza1 = document.getElementById("raza1").value;
    const raza2 = document.getElementById("raza2").value;
    const raza3 = document.getElementById("raza3").value;

    const resultadosHTML = `
        <div style="background-color: gold;">1er lugar: ${raza1}</div>
        <div style="background-color: silver;">2do lugar: ${raza2}</div>
        <div style="background-color: #cd7f32;">3er lugar: ${raza3}</div>
    `;

    document.getElementById("resultados").innerHTML = resultadosHTML;
}
