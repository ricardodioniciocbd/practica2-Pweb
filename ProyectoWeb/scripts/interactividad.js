document.addEventListener("DOMContentLoaded", function() {
    fetch("data/contenido.xml")
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");
            const contenido = document.getElementById("contenido");
            contenido.innerHTML = xml.getElementsByTagName("titulo")[0].textContent;
        });
});