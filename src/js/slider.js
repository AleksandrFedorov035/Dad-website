const BtnSliderRight = document.getElementById("sliderright")
const BtnSliderLeft = document.getElementById("sliderleft")
let ArticlePreviews = Array.from(document.getElementsByClassName("article__preview"));


BtnSliderRight.addEventListener("click", () => {
    let arrBlock = [];
    for(let i = 0; i < ArticlePreviews.length; i++) {
        if (ArticlePreviews[i].style.display !== "none") {
            arrBlock.push(ArticlePreviews[i]);
        }
    }
    if(arrBlock.length > 3) {
        arrBlock[0].style.display = "none";
    }
   

})

BtnSliderLeft.addEventListener("click", () => {
    let arrNone = [];
    for(let i = 0; i < ArticlePreviews.length; i++) {
        if (ArticlePreviews[i].style.display == "none") {
            arrNone.push(ArticlePreviews[i]);
        }
    }
    arrNone[arrNone.length - 1].style.display = "block";
})