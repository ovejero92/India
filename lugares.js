window.addEventListener('hashchange', ()=> {
    console.log(window.location.hash);
    router(window.location.hash)
})

let content = document.getElementById("app")

const router = (hash) => {
    content.innerHTML = "";
    switch(hash) {
        case '#/':{
            content.appendChild(lugares())
            return console.log("Lugares")
        }
        default:
            content.appendChild(notfound())
            return console.log("404")
    }
}
const lugares = () => {
    const views = "<h1>hola</h1>";
    const divLugares = document.createElement('div')
    divLugares.innerHTML = views;

    return divLugares;
}