var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida  Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes)


for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");

    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhvalida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso invalido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso invalido!";
        paciente.classList.add("paciente-invalido");

    }

    if (!alturaEhvalida) {
        console.log("Altura invalida!");
        alturaEhvalida = false;
        tdImc.textContent = "Altura invalida!";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhvalida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
    function validaPeso(peso) {

        if (peso >= 0 && peso <= 1000) {
            return true;
        } else {
            return false;
        }
    }
}


function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}