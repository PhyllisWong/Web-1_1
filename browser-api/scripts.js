console.log("YOLO");

// const options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0
// };

function success(pos) {
  let coord = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${coord.latitude}`);
  const lat = document.getElementById('lat');
  lat.innerHTML = coord.latitude;
  console.log(`Longitude: ${coord.longitude}`);
  const lon = document.getElementById('lon');
  lon.innerHTML = coord.longitude;
  console.log(`More or less ${coord.accuracy} meters.`);
}

function error(err) {
  console.log(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error);