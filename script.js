let clock = document.getElementById("time")

let ms = 0
let sec = 0
let min = 0
let hr = 0

let watch = null

let running = false

function start() {

    if (running == false) {
        watch = setInterval(() => {
            timer()
        }, 10)
        running = true
    } else if (running == true) {
        console.log("block");
    }
}

function pause() {
    clearInterval(watch)
    running = false

}

function stop() {
    clearInterval(watch)

    ms = 0
    sec = 0
    min = 0
    hr = 0
    running = false

    clock.innerHTML = "00:00:00:00"


}

function timer() {
    ms++

    if (ms == 99) {
        ms = 0
        sec++

        if (sec == 59) {
            sec = 0
            min++

            if (min == 59) {
                min = 0
                hr++
            }
        }
    }

    let format = (hr < 10 ? "0" + hr : hr) + ":" +
        (min < 10 ? "0" + min : min) + ":" +
        (sec < 10 ? "0" + sec : sec) + ":" +
        (ms < 10 ? "0" + ms : ms)

    clock.innerHTML = format

}