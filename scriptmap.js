let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 59.12982955006703, lng: 11.34963646937453 },
        zoom: 15,
    });
}