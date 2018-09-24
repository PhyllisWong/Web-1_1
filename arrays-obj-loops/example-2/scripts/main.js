// Loop through the contents of data
let str = '';

for (let i = 0; i < data.length; i += 1) {
  console.log(data[i].first_name);
  const alien = data[i];
  const { prefix, first_name, last_name} = alien;
  str += `<div class="alien-card">
    <h1 class="alien-name">${prefix}  ${first_name} ${last_name}</h1>
   
  </div>`;

}

document.getElementById('content').innerHTML = str;
