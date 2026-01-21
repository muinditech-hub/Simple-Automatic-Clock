let intervalid = null;

document.getElementById('btn').addEventListener("click" , function (){
 if(intervalid !==null ) return;
 
intervalid = setInterval(function (){
    const now = new Date ();
    document.getElementById('demo').textContent = now.toLocaleString ();
}, 1000);
})