let taskBar = document.getElementsByClassName("taskbar")[0];
let startMenu = document.getElementsByClassName("startmenu")[0];

taskBar.addEventListener("click", () => {
    if(startMenu.style.bottom === "50px"){
        startMenu.style.bottom = "-650px"
    }else{
        startMenu.style.bottom = "50px";
    }
})