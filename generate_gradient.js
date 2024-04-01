// Install node-canvas using npm: npm install canvas
import { createCanvas } from 'canvas';
import fs from 'fs';

// Function to generate a random color
function randomColor() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Function to generate a random gradient type (linear or radial)
function randomGradientType() {
	return Math.random() < 0.5 ? 'linear' : 'radial';
}

// Generate three random colors
const color1 = randomColor();
const color2 = randomColor();
const color3 = randomColor();

// Generate random gradient type
const gradientType = randomGradientType();

// Accept filename as argument or use default
const filename = process.argv[2] || 'random_gradient.png';

// Create a canvas
const canvas = createCanvas(1020, 510);
const ctx = canvas.getContext('2d');

// Create a gradient
let gradient;
if (gradientType === 'linear') {
	// Create a linear gradient
	gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
} else {
	// Create a radial gradient
	gradient = ctx.createRadialGradient(
		canvas.width / 2,
		canvas.height / 2,
		0,
		canvas.width / 2,
		canvas.height / 2,
		Math.max(canvas.width, canvas.height) / 2
	);
}

// Add color stops to the gradient
gradient.addColorStop(0, color1);
gradient.addColorStop(0.5, color2);
gradient.addColorStop(1, color3);

// Fill the canvas with the gradient
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Convert the canvas to a data URL
const dataURL = canvas.toDataURL('image/png');

// Write the data URL to a PNG file
const buffer = Buffer.from(dataURL.split(',')[1], 'base64');
fs.writeFileSync(filename, buffer);

console.log(`Random gradient saved as ${filename}`);
