function calcularPrecio() {
    const tipoCarro = document.getElementById("tipoCarro").value;
    const dias = parseInt(document.getElementById("dias").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(dias) || dias <= 0) {
        resultado.style.backgroundColor = "red";
        resultado.innerHTML = `<p style="color: white;">Por favor, ingrese un número válido de días.</p>`;
        return;
    }

    const carros = {
        bmw: { precioPorDia: 120, imagen: "bm"},
        mercedes: { precioPorDia: 150, imagen: "mercedes.png" },
        twingo: { precioPorDia: 50, imagen: "twingo.png" },
        megane: { precioPorDia: 80, imagen: "megane.png" },
        chevrolet: { precioPorDia: 100, imagen: "chevrolet.png" }
    };

    const carroSeleccionado = carros[tipoCarro];
    if (!carroSeleccionado) {
        resultado.style.backgroundColor = "red";
        resultado.innerHTML = `<p style="color: white;">Por favor, seleccione un carro válido.</p>`;
        return;
    }

    let fondo = "";
    if (dias <= 2) {
        fondo = "orange";
    } else if (dias <= 5) {
        fondo = "yellow";
    } else if (dias <= 10) {
        fondo = "green";
    } else {
        fondo = "blue";
    }

    const precioTotal = dias * carroSeleccionado.precioPorDia;

    resultado.style.backgroundColor = fondo;
    resultado.style.padding = "15px";
    resultado.style.borderRadius = "10px";
    resultado.innerHTML = `
        <p>Has alquilado un <strong>${tipoCarro.charAt(0).toUpperCase() + tipoCarro.slice(1)}</strong> por <strong>${dias} días</strong>.</p>
        <p>El precio total es: <strong>${precioTotal}€</strong>.</p>
        <img src="images/${carroSeleccionado.imagen}" alt="${tipoCarro}" style="max-width: 100%; border-radius: 10px; margin-top: 10px;">
    `;
}

