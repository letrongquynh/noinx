function calculateMulchVolume() {
  // Get values from input fields
  const length = parseFloat(document.getElementById('length').value);
  const depth = parseFloat(document.getElementById('depth').value);
  const price = parseFloat(document.getElementById('price').value);


  // Calculate area (square feet)
  const area = length * length;

  // Convert depth from inches to feet
  const depthFeet = depth / 12;

  // Calculate volume (cubic feet)
  const volumeCubicFeet = area * depthFeet;

  // Convert volume to cubic yards
  const volumeCubicYards = volumeCubicFeet / 27;
  // Convert volume to cubic meter
  const volumeCubicMeters = volumeCubicYards * 0.764554857984;
  // Calculate cost (dollars)
  const cost = volumeCubicYards * price;

  // Display result
  document.getElementById('cubic-yards').innerText = ` ${volumeCubicYards.toFixed(2)} cubic yards`;
  document.getElementById('cubic-feet').innerText = ` ${volumeCubicFeet.toFixed(2)} cubic feet`;
  document.getElementById('cubic-meters').innerText = ` ${volumeCubicMeters.toFixed(2)} cubic meters `;
  document.getElementById('cost').innerText = ` ${volumeCubicMeters.toFixed(2)} $ `;
}





  const reSet = document.querySelector("#reset");
  reSet.addEventListener("click", function(){
    document.getElementById('length').value = '';
    document.getElementById('depth').value = '';
    document.getElementById('price').value = '';
    document.getElementById('cubic-yards').innerText='';
    document.getElementById('cubic-feet').innerText='';
    document.getElementById('cubic-meters').innerText='';
    document.getElementById('cost').innerText='';
  });