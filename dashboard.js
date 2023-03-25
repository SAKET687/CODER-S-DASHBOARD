let time=document.getElementById("Current Time");
setInterval(() =>{
		let t = new Date();
		time.innerHTML=t.toLocaleTimeString();
},1000);
