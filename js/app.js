const app_abstract = document.querySelector("[data-app-abstract]")

function randint(min,max) {
    return Math.floor(Math.random() * (max - min)) + min
}

const magnifying_abstract = (() => {
    let quantity = 1
    const objects = []

    for(let i = 0; i < quantity; ++i){
        const object = document.createElement("img")
        object.src = "img/loupe.png"
        object.setAttribute("class","app-abstract-loupe")

        app_abstract.appendChild(object)
        objects.push(object)
    }

    return objects
})()

function manifest_abstract(objects) {
    try {
        for(object of objects){
            object.style.cssText = `    
            top: calc(${randint(0,90)}% + clamp(50px,5vw,60px));
            left: ${randint(0,60)}%;
            rotate: ${randint(0,360)}deg;
            `
        }
    }
    catch {
        throw new Error()
    }
}
setInterval(() => {
    manifest_abstract(magnifying_abstract)
}, 4000);