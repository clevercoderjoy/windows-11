"use strict";

var taskBar = document.getElementsByClassName("taskbar")[0];
var startMenu = document.getElementsByClassName("startmenu")[0];
taskBar.addEventListener("click", function () {
  if (startMenu.style.bottom === "50px") {
    startMenu.style.bottom = "-650px";
  } else {
    startMenu.style.bottom = "50px";
  }
});