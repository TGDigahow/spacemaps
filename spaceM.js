function selectDestination(destination) {
    alert(`Destino selecionado: ${destination}`);
    // Armazene o destino para carregamento do mapa ou adicione lógica futura
}

function toggleAccessibility() {
    alert("Opções de acessibilidade ativadas/desativadas.");
    // Adicione lógica para alterar o mapa ou elementos de acessibilidade
}

function loadRoute() {
    const mapDiv = document.getElementById('map');
    mapDiv.innerHTML = "<p>Carregando rota...</p>";
    // Adicione a lógica para carregar o mapa aqui
    // Por exemplo, usando APIs como Google Maps ou Leaflet
}
