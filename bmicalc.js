let heightval = document.getElementById("height");
let weightval = document.getElementById("weight");
let fbmi = document.getElementById("dmiis");

function ans() { 
    let lheightval = parseInt(heightval.value);
    let theightval = (lheightval/100)**2;
    fbmi.innerHTML = parseInt(weightval.value) / theightval;
}

let unic = document.getElementById("conv")
let unic2 = document.getElementById("conv2")
let uniti = document.getElementById("inches");
let unitcm = document.getElementById("cm");
let uniti2 = document.getElementById("inches2");
let unitm = document.getElementById("convertm");
let unitft = document.getElementById("convertft");
let unitcm2 = document.getElementById("convertcm");
let unitkm = document.getElementById("convertkm");
let unity = document.getElementById("inches2");

function convert(){
     unic.innerHTML = parseInt(uniti.value)*2.54;
}

function convert2(){
   unic2.innerHTML = parseInt(uniti2.value)*2.54;
}


function convertm(){
    unic2.innerHTML = parseInt(uniti2.value)*0.0254;
 }
 function convertmi(){
    unic2.innerHTML = parseInt(uniti2.value)*1.5783e-5;
 }
 function convertkm(){
    unic2.innerHTML = parseInt(uniti2.value)*2.54e-5;
 }
 function converty(){
    unic2.innerHTML = parseInt(uniti2.value)*0.0277778;
 }
 function convertft(){
    unic2.innerHTML = parseInt(uniti2.value)*0.0833334;
 }

let dollers = document.getElementById("mc2");
let doller = document.getElementById("minput");

 function mconvertk() {
   dollers.innerHTML = parseInt(doller.value)*129;
 }

 function mconverty() {
   dollers.innerHTML = parseInt(doller.value)*145.41;
 }

 function mconvertp() {
   dollers.innerHTML = parseInt(doller.value)*0.77 ;
 }

 function mconverte() {
   dollers.innerHTML = parseInt(doller.value)*0.90;
 }

