const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = document.querySelector("span");

for(let el of items){

    

    el.addEventListener("mouseenter", e=>{

        e.currentTarget.querySelector("video").play();
    });

    el.addEventListener("mouseleave", e=>{
        e.currentTarget.querySelector("video").pause();
    });

    //여기서부터 클릭시 재생 요소 관련

    el.addEventListener("click", e=>{
        let tit = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

        aside.querySelector("h1").innerText = tit;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("video").setAttribute("src", vidSrc);
        
        aside.querySelector("video").play();
        aside.classList.add("on");
        
    });

    close.addEventListener("Click", ()=>{
        aside.classList.remove("on");
        aside.querySelector("video").pause();
    });

    
}