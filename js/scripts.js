"use strict";

let span = document.getElementById('span');

function time() {
  let date = new Date();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours   = date.getHours();
  let end     = " p.m.";
  if (hours > 12) {
	hours -= 12;
  }
  else {
      end = " a.m.";
  }
  span.textContent = 
      ("0" + hours).substr(-2) + ":" + 
    ("0" + minutes).substr(-2) + ":" + 
    ("0" + seconds).substr(-2) + end;
}

setInterval(time, 1000);
time();