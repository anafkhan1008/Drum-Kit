const button = document.querySelectorAll(".drum");

button.forEach((btn) => {
    btn.addEventListener("click" , (e)=>{
        let drm = e.target.innerHTML;
       buttonAnimation(drm);


        if(drm === "w")
        {
            let audio = new Audio('./sounds/crash.mp3');
            audio.play();
        }

        if(drm === "a")
        {
            let audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
        }
        
        if(drm === "s")
        {
            let audio = new Audio('./sounds/snare.mp3');
            audio.play();
        }

        if(drm === "d")
        {
            let audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
        }

        if(drm === "j")
        {
            let audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
        }

        if(drm === "k")
        {
            let audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
        }

        if(drm === "l")
        {
            let audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
        }
        
    })
})

document.addEventListener("keydown" , (e)=>{
    
    let key = e.key;
    buttonAnimation(key);

    let audio;
    switch (key) {
        case "w":
            audio = new Audio('./sounds/crash.mp3');
            audio.play();
            
            break;
        case "a":
            audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();

            break;
        case "s":
            audio = new Audio('./sounds/snare.mp3');
            audio.play();

            break;
        case "d":
            audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            

            break;
        case "j":
            audio = new Audio('./sounds/tom-2.mp3');
            audio.play();

            break;
        case "k":
            audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            
            break;
        case "l":
            audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
    }
})


function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
        
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}