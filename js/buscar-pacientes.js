var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
    console.log("Buscando pacientes...");

    var pacientes = JSON.parse(localStorage.getItem("dbPacientes"))
    console.log(pacientes)

    pacientes.forEach(function (paciente) {
        adicionaPacienteNaTabela(paciente);
    });
});