let htmlInput=document.querySelector(".htmlEditor textarea");
let cssInput=document.querySelector(".cssEditor textarea");
let jsInput=document.querySelector(".jsEditor textarea");

let copy=document.querySelectorAll(".copy");

let save=document.querySelector("#save");
let output=document.querySelector("#output");

let full=document.querySelector("#full");
let outputContainer=document.querySelector(".outputContainer");

save.addEventListener("click",()=>{
    // html file 
    output.contentDocument.body.innerHTML=htmlInput.value;
    // css file 
    output.contentDocument.head.innerHTML=`<style>${cssInput.value}</style>`;
    //js file
    output.contentWindow.eval(jsInput.value);
});

full.addEventListener("click",()=>{
    outputContainer.classList.toggle("outputFullActive");

    if(outputContainer.classList.contains("outputFullActive")){
        full.style.transform="rotate(180deg)";
    }
    else{
        full.style.transform="rotate(0deg)";
    }
});

// copy 
copy.forEach((e)=>{
    e.addEventListener("click",()=>{
        if(e.classList.contains("htmlCopy")){
            navigator.clipboard.writeText(htmlInput.value);
        }
        else if(e.classList.contains("cssCopy")){
            navigator.clipboard.writeText(cssInput.value);
        }
        else{
            navigator.clipboard.writeText(jsInput.value);
        }
    });
});