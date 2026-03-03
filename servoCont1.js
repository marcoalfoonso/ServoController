
document.addEventListener("DOMContentLoaded",()=>{

    const q1 = document.getElementById("q1");

    q1.oninput = ()=>{
        console.log("q1:",q1.value);
    }

});