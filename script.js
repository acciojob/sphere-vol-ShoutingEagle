function volume_sphere() {
    //Write your code here
	let radius = document.getElementById("radius").value;
	let volume = document.getElementById("volume");
	volume.input = (4/3) * 3.14 * radius * radius *radius;
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
