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
    const canvas = document.getElementById("myCanvas");

    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 150, 100);

    q1.oninput = ()=>{
        console.log("q1:",q1.value);

        if(client.connected){
            client.publish("q1",q1.value);
        }
    }
});