let navigator_switch_boolean

const navigator_switch = document.querySelector("[data-navigator-switch]")
const navigator_wrapper = document.querySelector("[data-navigator-wrapper]")

navigator_switch.addEventListener("click",() => {
    if(navigator_switch_boolean) {
        navigator_wrapper.style.right = `calc(-1 * clamp(300px,40vw,100%))`
        navigator_switch_boolean = false
    }
    else {
        navigator_wrapper.style.right = `0`
        navigator_switch_boolean = true
    }
})


// redirect because they're supposed to be here

if(location.port != 5500) location.replace("https://youtu.be/dQw4w9WgXcQ")