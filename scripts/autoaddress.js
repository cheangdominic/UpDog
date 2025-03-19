mapboxgl.accessToken = 'pk.eyJ1IjoiZGNoZWFuZyIsImEiOiJjbThnZ3lqZHkwbXJlMmxwa3Y5bDlkeGZ5In0.a_DldsA41HfVtmcQ7PkJTA';  // Set the Mapbox access token

let selectedAddress = "";  // Initialize a variable to store the selected address

const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    types: 'address,place,postcode,poi',
    placeholder: 'Search for an address...', // Helps users know what to enter
    countries: 'us, ca', // Optional: Restrict to the US & Canada (change as needed)
});

geocoder.addTo('#geocoder');  // Add the geocoder widget to the DOM element with the ID 'geocoder'

geocoder.on('result', function (e) {  // Add an event listener for when a result is selected
    selectedAddress = e.result.place_name;  // Store the selected address in the variable
});
