const client = mqtt.connect("wss://e4f0d50b37b04ea79745872566f605ff.s1.eu.hivemq.cloud:8884/mqtt",{
    clientId: "web_" + Math.random().toString(16).slice(2, 10),
    username: "MarcoA",
    password: "HATeR3__",
    clean: true
});

client.on("connect", () => {
  console.log("Connecting with Outh");
});

client.on("error", (err) => {
  console.error("Error:", err);
});

document.addEventListener("DOMContentLoaded",()=>{

    const q1 = document.getElementById("q1");

    //Canvas

    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    
    const l1 = 150;

    let theta1 = (q1.value*Math.PI)/180;


    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const originX = canvas.width/2;
        const originY = canvas.height/2;

        //Cinemática directa

        const x1 = l1*Math.cos(theta1);
        const y1 = l1*Math.sin(theta1);

        ctx.lineWidth=6;
        ctx.strokeStyle = "black"

        ctx.beginPath();
        ctx.moveTo(originX, originY);   // starting point
        ctx.lineTo(originX+x1, originY+y1);    // end point moves
        ctx.strokeStyle = "blue";
        ctx.stroke();

        requestAnimationFrame(animate);
    }

    animate();

    q1.oninput = ()=>{
        console.log("q1:",q1.value);

        if(client.connected){
            client.publish("q1",q1.value);
        }
    }
});