var map;

function initMap() {
	var center = { lat: 44.6475628, lng: -63.6021981 };
    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 11,
        styles: [
            {
                elementType: 'geometry',
                stylers: [{ color: '#80Bb77' }]
            },
            {
              elementType: 'labels',
              stylers: [{visibility:'off'}]
            },
            {
              featureType : 'administrative.locality',
              elementType: 'labels',
              stylers: [{visibility:'on'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#E0EFF5' }]
                //stylers: [{ color: '#0d8cb8' }]
            }
        ],
		mapTypeId: 'roadmap',
        keyboardShortcuts: false,
		disableDefaultUI: true,
		disableDoubleClickZoom: true,
		draggable: false,
		scrollwheel: false,
    });

    map.addListener('center_changed', function() {
		map.panTo(center);
    });
}
