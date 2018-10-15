# Geolocation API

This mini project uses the Geolocation API to track the coordinate location of a user's computer when using this website.
When creating this mini-project I used this documentation [MDN Geolocation Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API).

This function gets the coordinates, and displays them to the user:
```
function success(pos) {
  const coord = pos.coords;
  const lat = document.getElementById('lat');

  lat.innerHTML = coord.latitude;
  const lon = document.getElementById('lon');
  lon.innerHTML = coord.longitude;

  console.log(`More or less ${coord.accuracy} meters.`);
}
```

Show an error to the user if there was an issue getting the location.
```
function error(err) {
  console.log(`ERROR(${err.code}): ${err.message}`);
}
```
