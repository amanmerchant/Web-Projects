// Initialize the map
function initMap() {
    // Map options
    const mapOptions = {
        center: { lat: 40.712776, lng: -74.005974 }, // Default center: New York City (you can change this)
        zoom: 12,
        mapTypeId: 'roadmap'
    };

    // Create the map
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Array of nearby vehicle garage locations (replace this with real data or API)
    const garages = [
        { name: 'Garage 1', lat: 40.730610, lng: -73.935242, address: '123 Main St, New York, NY' },
        { name: 'Garage 2', lat: 40.749825, lng: -73.987963, address: '456 Park Ave, New York, NY' },
        { name: 'Garage 3', lat: 40.712776, lng: -74.005974, address: '789 Broadway, New York, NY' }
    ];

    // Add markers for each garage
    garages.forEach(garage => {
        const marker = new google.maps.Marker({
            position: { lat: garage.lat, lng: garage.lng },
            map: map,
            title: garage.name
        });

        // Add click event to the marker
        marker.addListener('click', function() {
            // Open an info window with the garage details
            const infoWindow = new google.maps.InfoWindow({
                content: `<h5>${garage.name}</h5><p>${garage.address}</p>`
            });
            infoWindow.open(map, marker);
        });
    });
}
