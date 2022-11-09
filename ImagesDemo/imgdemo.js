"use strict";

window.onload = init;



function init(){

  let imagesPara = document.getElementsByTagName("p");
  let imageLength = imagesPara.length;
  for(let i = 0; i < imageLength; i++){
    imagesPara[i].style.border = "thin solid black";
  }

}
