const client = mqtt.connect("wss://e4f0d50b37b04ea79745872566f605ff.s1.eu.hivemq.cloud:8884/mqtt",{
    clientId: "web_" + Math.random().toString(16).slice(2, 10),
    username: "MarcoA",
    password: "HATeR3__",
    clean: true
});

client.on("connect", () => {
  console.log("Connecting with Outh");

  client.subscribe("q1", (err)=>{
    if(!err){
        console.error("Subscripcion en q1");
    }else{
        console.error("Error en subscripcion q1:", err);
    }
    });
});

client.on("error", (err) => {
  console.error("Error:", err);
});

document.addEventListener("DOMContentLoaded",()=>{

    const q1 = document.getElementById("q1");
    const q2 = document.getElementById("q2");

    //Canvas

    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    
    const l1 = 150;
    const l2 = 75;

    function animate(theta1,theta2) {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const originX = canvas.width/2;
        const originY = canvas.height/5;

        //Cinemática directa

        const x1 = l1*Math.cos(theta1);
        const y1 = l1*Math.sin(theta1);

        const x2 = x1 + l2*Math.cos(theta1+theta2);
        const y2 = y1 + l2*Math.sin(theta1+theta2);

        ctx.lineWidth=6;
        ctx.strokeStyle = "black"

        ctx.beginPath();
        ctx.moveTo(originX, originY);   // starting point
        ctx.lineTo(originX+x1, originY-y1);    // end point moves
        ctx.lineTo(originX+x2, originY-y2);    
        ctx.stroke();
    }

    function update(){
        let theta1 = (q1.value*Math.PI)/180;
        let theta2 = (q2.value*Math.PI)/180;
        animate(theta1,theta2);
    }

    q1.addEventListener("input",update);
    q2.addEventListener("input",update);

    animate((q1.value*Math.PI)/180,(q2.value*Math.PI)/180);

    q1.oninput = ()=>{
        console.log("q1:",q1.value);

        if(client.connected){
            client.publish("q1",q1.value);
        }
    }

    q2.oninput = ()=>{
        console.log("q2:",q2.value);

        if(client.connected){
            client.publish("q2",q2.value);
        }
    }

    client.on("message",(topic,message)=>{
        console.log("Topic: ",topic,"Message: ",message.toString())
    })
});