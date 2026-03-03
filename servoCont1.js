
document.addEventListener("DOMContentLoaded",()=>{

    const q1 = document.getElementById("q1");
    const q2 = document.getElementById("q2");

    q1.oninput = ()=>{
        console.log("q1:",q1.value);
    }

    q2.oninput = ()=>{
        console.log("q2: ",q2.value);
    }

});