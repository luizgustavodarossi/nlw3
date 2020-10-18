const options ={
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
//get value from html 
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng
//create map
const map = L.map('mapid', options).setView([lat, lng], 15);
//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
//create icon
const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor:[29, 68],
    popupAnchor:[170, 2]
})
//create and add marker
L.marker([lat, lng], {icon})
.addTo(map)
.bindPopup(popup)
/* image gallery*/ 
function selectImage(event) {
    const button = event.currentTarget
    //remover todas as class active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass);
    function removeActiveClass(button){
        button.classList.remove(".active")
    }
    //selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    //atualizar o container de image
    imageContainer.src = image.src
    //adicionar a class .active para este button
    button.classList.add("active")
}