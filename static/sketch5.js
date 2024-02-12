
// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using a pre-trained customized model and p5.js
This example uses p5 preload function to create the classifier
=== */

// Global variable to store the classifier
let classifier;

// Label (start by showing listening)
let label = "Who is this computer scientist?";

// Teachable Machine model URL:
let soundModelURL = 'https://teachablemachine.withgoogle.com/models/tXrUDgf2k/model.json';

function preload() {
  // Load the model
  classifier = ml5.soundClassifier(soundModelURL);
}

function setup() {
  var canvas = createCanvas(800, 300); // Larger canvas size

  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');

  background(255, 0, 200);

  // Start classifying
  // The sound model will continuously listen to the microphone
  classifier.classify(gotResult);
}

function draw() {
  background(0);

  // Cool Font
  fill(255);
  textSize(48);
  textAlign(CENTER, CENTER);
  textFont('Impact'); // Set a cool font
  text(label, width / 2, height / 2);

  // Subtext
  textSize(16);
  textAlign(CENTER, TOP);
  text("Please say the first and last name", width / 2, height / 2 + 60);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }

  // Check if the recognized sound is "BRODY"
  if (results[0].label === "OLIVER") {
    window.location.href = '/oliver';
  }
}
