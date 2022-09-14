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

function set_tables(table_lists) {
    for(list of table_lists){
        const nth_table = document.createElement("a")
        nth_table.setAttribute("class","nth-table")
        nth_table.textContent = list[0]
        nth_table.setAttribute("data-nth-table",list[1])

        if(list[1].includes("https://","http://")) {
            nth_table.addEventListener("click",() => {
                // location.href = nth_table.getAttribute("data-nth-table")
                open(nth_table.getAttribute("data-nth-table"))
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
set_tables([
    ["Earth & Life Science","https://meet.google.com/unc-yezp-jve"],
    ["Komunikasyon","https://meet.google.com/pku-nver-vze"],
    ["Per. Dev.","https://meet.google.com/paz-zknd-rog"],
    ["Gen Math","https://meet.google.com/one-kdym-xyd"],
    ["Intro. of Philosophy","https://meet.google.com/awu-dkzo-ujo"],
    ["Oral Comm.","https://meet.google.com/ssw-shfy-sbr"],
    ["Pre-Calculus","https://meet.google.com/sfq-xrke-cxb"],
    ["General Chemistry","https://meet.google.com/txj-yooa-mrn"],
    ["PE","https://meet.google.com/gfn-sypq-qav"],
    ["Prayer",
        `Lord, Almighty, we thank you for the gift of life. We thank you for the blessings that you have showered upon us. Forgive us for our mistake, as we forgive those who have mistaken against us. We pray for healing. We pray for peace. We pray for blessings. We ask for your guidance as we start our class for today. Keep us safe, Oh Lord. These we asked in the name of Jesus, Our Lord, Amen.`
    ],
    ["Prayer_2",
        `Dear Lord and Father of all, Thank you for today. Thank you for ways in which you provide for us all. For Your protection and love we thank you. Help us to focus our hearts and minds now on what we are about to learn. Inspire us by Your Holy Spirit as we listen and write. Guide us by your eternal light as we discover more about the world around us. We ask all this in the name of Jesus. Amen.`
    ]
])


setInterval(() => {
    manifest_abstract(magnifying_abstract)
}, 4000);