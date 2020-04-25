//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
/*
const Diagnostics = require('Diagnostics');
const Scene = require('Scene');

const Materials = require('Materials');
const R = require('Reactive');
const S = require('Shaders');

const uv = S.fragmentStage(S.vertexAttribute({'variableName': S.VertexAttribute.TEX_COORDS}));
let color = R.pack4(1.,1.,0.,1.);

Diagnostics.log('polla');

Materials.get('material0').setTexture(color, {textureSlotName: "diffuseTexture"});
*/
// How to access scene objects (uncomment line below to activate)
// const directionalLight = Scene.root.find('directionalLight0');

// How to access class properties (uncomment line below to activate)
// const directionalLightIntensity = directionalLight.intensity;

// How to log messages to the console (uncomment line below to activate)
 Diagnostics.log('Console message logged from the script.');
