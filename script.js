function volume_sphere() {
  // Get the input radius value from the form
  var radius = parseFloat(document.getElementById('radius').value);

  // Calculate the volume of the sphere
  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display the volume in the volume input field
  document.getElementById('volume').value = volume.toFixed(4);

  // Return false to prevent the form from being submitted to the server
  return false;
}

// Attach the event handler after the window has loaded
window.onload = function () {
  document.getElementById('MyForm').onsubmit = volume_sphere;
};
