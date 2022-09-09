const app_abstract = document.querySelector("[data-app-abstract]")
const table_wrapper = document.querySelector("[data-table-wrapper]")

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

function randint(min,max) {
    return Math.floor(Math.random() * (max - min)) + min
}

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
const dummy_list = [
    ["Earth & Life Science","https://meet.google.com/unc-yezp-jve"],
    ["Komunikasyon","https://meet.google.com/pku-nver-vze"],
    ["Per. Dev.","https://meet.google.com/paz-zknd-rog"],
    ["Gen Math","https://meet.google.com/one-kdym-xyd"],
    ["Intro. of Philosophy","https://meet.google.com/awu-dkzo-ujo"],
    ["Oral Comm.","https://meet.google.com/ssw-shfy-sbr"],
    ["Pre-Calculus","https://meet.google.com/sfq-xrke-cxb"],
    ["General Chemistry","https://meet.google.com/txj-yooa-mrn"],
    ["PE","https://meet.google.com/gfn-sypq-qav"]
]

function set_tables(table_lists) {
    for(list of table_lists){
        const nth_table = document.createElement("a")
        nth_table.setAttribute("class","nth-table")
        nth_table.textContent = list[0]
        nth_table.setAttribute("data-nth-table",list[1])

        if(list[1].includes("https://","http://")) {
            nth_table.addEventListener("click",() => {
                location.href = nth_table.getAttribute("data-nth-table")
            })
        }
        else {
            nth_table.addEventListener("click",() => {
                create_tab(nth_table.getAttribute("data-nth-table"))
            })
        }
       
        table_wrapper.appendChild(nth_table)
    }
}
set_tables(dummy_list)


setInterval(() => {
    manifest_abstract(magnifying_abstract)
}, 4000);