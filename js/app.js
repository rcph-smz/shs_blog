const app_abstract = document.querySelector("[data-app-abstract]")
const table_wrapper = document.querySelector("[data-table-wrapper]")
const _quotes_ = document.querySelector("[data-quotes]")

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
    ["Prayer",
        `Lord, Almighty, we thank you for the gift of life. We thank you for the blessings that you have showered upon us. Forgive us for our mistake, as we forgive those who have mistaken against us. We pray for healing. We pray for peace. We pray for blessings. We ask for your guidance as we start our class for today. Keep us safe, Oh Lord. These we asked in the name of Jesus, Our Lord, Amen.`
    ],
    ["Prayer_2",
        `Dear Lord and Father of all, Thank you for today. Thank you for ways in which you provide for us all. For Your protection and love we thank you. Help us to focus our hearts and minds now on what we are about to learn. Inspire us by Your Holy Spirit as we listen and write. Guide us by your eternal light as we discover more about the world around us. We ask all this in the name of Jesus. Amen.`
    ],
    ["Prayer_3",`
    Loving Father, Thank you
    
    for all who are part of our school.  Please grant them your encouragement, wisdom and peace.
    
    Strengthen teachers
    
    with heavy workloads. May they be firm, yet patient, expecting excellence but forgiving mistakes.
    
    May they support their students, playing to strengths, helping with struggles and motivating them to do their best.
    
    Comfort and restore
    
    those living under shadows of unhappiness, abuse, pain or fear.  May many find faith discovering their identity in You and knowing Your amazing grace in their lives.
    
    Please pour out Your blessings
    
    upon our whole school community.
    
    In Jesus name.
    
    Amen`],
    ["reminders,assignment,etc",
        `https://rcph-smz.github.io/shs_blog/notes/reminder`],
    ["my scripts",
        `https://rcph-smz.github.io/shs_blog/notes/script`],
    ["learn ai path","https://www.louisbouchard.ai/learnai/"],
    ["beat per 60 sec","https://rcph-smz.github.io/shs_blog/notes/script/PHYSIOLOGY%20INDICATORS/formula/counter.html"]
])


const intervals = function() {
    try {
        fetch("https://type.fit/api/quotes").then((res) => {
            return res.json()
        }).then(res => {
            setInterval(() => {
                _quotes_.textContent = `"${res[randint(0,res.length)].text}"`
            }, 5000)
            _quotes_.addEventListener("click",async () => {
                await navigator.clipboard.writeText(_quotes_.textContent)
            })
        })
    }
    catch (err){
        console.log("api quotes are not working")
    }
    setInterval(() => {
        manifest_abstract(magnifying_abstract)
    }, 5000)
}()
