//variables
const button=document.querySelector(".btn");
const image=document.querySelector(".share-img");
const afterS=document.querySelector(".share-after");
button.style.backgroundColor="rgb(236, 242, 249)";
//event listeners
button.addEventListener("click",changeStyle);
//functions

function changeStyle(e){

    console.log(e.target);
    const btn=e.target;
    //console.log(btn.style.backgroundColor);

    if(btn.style.backgroundColor=="rgb(236, 242, 249)"){
    btn.style.transform="scale(0.1)";
    
    setTimeout(changeStyleTwo,200);
    }
    else{
        btn.style.transform="scale(0.1)";
        setTimeout(changeStyleOne,200);
    }
    
}

function changeStyleTwo(){

    button.style.transform="scale(1)";
    console.log(image.src);
    image.src="./images/share-after.png";
    button.style.backgroundColor="rgb(108, 127, 153)";
    afterS.style.transform="scaleY(1)";
    afterS.style.opacity="1";


}

function changeStyleOne(){
    button.style.transform="scale(1)";
    image.src="./images/share-before.png";
    button.style.backgroundColor="rgb(236, 242, 249)";
    afterS.style.transform="scaleY(0)";
    afterS.style.opacity="0";
}