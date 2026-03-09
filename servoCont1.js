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
    let x = 0;
    let y = 0;

    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(50, 50);   // starting point
        ctx.lineTo(x, y);    // end point moves
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 4;
        ctx.stroke();
        x += 2;
        y += 2;

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