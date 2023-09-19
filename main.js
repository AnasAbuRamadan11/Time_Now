let dateTime = document.getElementById("dateTime")




function dateT() {


    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let dim = "am"

    if(hours > 12) {

        hours -=12
        dim = "pm"
    }

    if(hours < 10) {

        hours = `0${hours}`
    }

    if(minutes < 10) {

        minutes = `0${minutes}`
    }

    if(seconds < 10) {

        seconds = `0${seconds}`
    }
    if(hours == 0) {

        hours = 12

        dim = "am"
    }

    dateTime.innerHTML = `${hours} :${minutes} :${seconds} ${dim}`



    setInterval(function () {

        dateT()

    }, 1000)
}

dateT()