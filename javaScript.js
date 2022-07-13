containerImg = document.querySelector(".container-imagem");
buttonNext = document.querySelector("#buttonNext");
buttonPrev = document.querySelector("#buttonPrev");
imgSelected = 0;


function handleSelectImg(clickButton){
    if(clickButton > 0){
        if(imgSelected >= (4)){
            imgSelected = 0;
        }else{
            imgSelected += clickButton;
        }
    }else {
        if (imgSelected <= 0){
            imgSelected = 4;
        }else{
            imgSelected += clickButton;
        }
    }

    for (let x=0; x<5; x++){
        if (imgSelected == x){
            containerImg.children[imgSelected].style.display = "block";
        }else{
            containerImg.children[x].style.display = "none";
        }
        
    }
    
}

buttonNext.addEventListener("click", () =>{
    handleSelectImg(1);
});


buttonPrev.addEventListener("click", () =>{
    handleSelectImg(-1);
});