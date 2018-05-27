document.addEventListener("DocumentContentLoaded" , event =>{
    if(navigator.serviceWorker){
        navigator.serviceWorker.register('sw.js')
        .then(regsiteration => console.log("Service Registered",regsiteration))
        .catch(err => console.log("Error: ",err));

    }
})