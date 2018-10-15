// Get the Geolocation of the user's device

function success(pos) {
  const coord = pos.coords;
  const lat = document.getElementById('lat');

  lat.innerHTML = coord.latitude;
  const lon = document.getElementById('lon');
  lon.innerHTML = coord.longitude;

  console.log(`More or less ${coord.accuracy} meters.`);
}

function error(err) {
  console.log(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error);