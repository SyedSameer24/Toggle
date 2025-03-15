let body = document.querySelector("body");
let bt1= document.querySelector("#bt1")
var currMode="light";
bt1.addEventListener("click",() =>{
    if (currMode==="light") {
         body.classList.add("dark");
         body.classList.remove("light")
         currMode="dark";
    }else{
        body.classList.add("light");
         body.classList.remove("dark")
         currMode="light";
    }
    console.log(currMode);
});

