var dbPacientes = {};

function fetchJSONData() {
    fetch("../data/pacientes.json")
        .then(async (res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            dbPacientes = await res.json();

            localStorage.setItem("dbPacientes",  JSON.stringify(dbPacientes))

            console.log('dbPacientes', dbPacientes)
        })
        .then((data) =>
              console.log(data))
        .catch((error) =>
               console.error("Unable to fetch data:", error));
}
fetchJSONData();
