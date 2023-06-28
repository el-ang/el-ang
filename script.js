const
    aka = (init = ["El-Ang", "El-Yoru", "Alloy", "エルロイ", "Error", "royCe", "royCo", "royCocaCola", "Jibun", "自分", "自分はうんこです", "うんこ", "Nomerc"])=> init[Math.floor(Math.random() * init.length)],
    title = ()=> document.querySelector("header h1").textContent = document.title = aka(),
    gone = "bro's left"; 

title();
document.addEventListener("visibilitychange", ()=>{
    if(document.hidden) document.title = gone;
    else title();
});

/* const
    tt = document.createElement("dialog"),
    ttReq = document.querySelectorAll("[tooltip]");

tt.className = "tip";
ttReq.forEach((e)=>{
    tt.textContent = e.getAttribute("tooltip");
    e.after(tt);
    e.addEventListener("mouseover", tt.showModal);
    e.addEventListener("mouseout", tt.close);
}); */
