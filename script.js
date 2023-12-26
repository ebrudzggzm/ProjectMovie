const arrows = document.querySelectorAll(".arrow")
const movieLists = document.querySelectorAll(".movie-list")

arrows.forEach((arrow,i)=>{
    const widthRatio = Math.floor(window.innerWidth /300)
    let clickCounter = 0;
    const imageItem = movieLists[i].querySelectorAll("img").length;
    const maxSlides = Math.ceil(imageItem /4);
    arrow.addEventListener("click",function(){       
        if (imageItem - (4 + clickCounter) + (4 - widthRatio)>= 0){    
        clickCounter++;       
       movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
    
}else {
    clickCounter = 0; 
    movieLists[i].style.transform = "translateX(0)"
}
});
});

const ball = document.querySelector(".toggle-ball");
const items =document.querySelectorAll(".container-wrapper,.navbar .navbar-container,.aside,.aside i,.navlinks .navlist a,.toggle,.toggle-ball,.movie-list-filter select")

ball.addEventListener("click",function(){
    items.forEach((item)=>item.classList.toggle("active"));
})