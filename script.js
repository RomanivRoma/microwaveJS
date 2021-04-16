const smallButtons = document.querySelectorAll(".smallButton")
const cancle = document.querySelector(".cancleButton")
const bigButton = document.querySelector(".bigButton")
var audio = new Audio('./src/1fd61b165de3a7a.mp3')
const display = document.getElementById('time')

var timing = 0
var start = 0
const clock = function updateClock() {
    console.log("Timer is working");
    display.dataset.content = displayTime()
}

timing = setInterval(clock,1000)

function displayTime(){
    var now = new Date()
    var min = now.getMinutes()
    var time = now.getHours() + ':' + min
    time = now.getHours() + ':' + (min < 10 ? '0' + min : min)
    return time
}

cancle.addEventListener("click", () =>{
    if(!start){
        clearInterval(start)
        display.dataset.content = displayTime()
        timing = setInterval(clock,1000)
    }else{
        clearInterval(start)
        start = false
    }
    audio.play();
})
smallButtons[0].addEventListener("click", () =>{
    audio.play();
    clearInterval(timing)
    if(display.dataset.content === displayTime()){
        display.dataset.content = '10:00'
    }
    else{
        console.log(display.dataset.content);
        display.dataset.content = parseInt(display.dataset.content.split(":")[0])+10 + ":" + (parseInt(display.dataset.content.split(":")[1])) + (display.dataset.content.split(":")[1].length == 1 ? "0"  : "")
    }
    console.log("10 min clicked")
})
smallButtons[1].addEventListener("click", () =>{
    audio.play();
    clearInterval(timing)
    if(display.dataset.content === displayTime()){
        display.dataset.content = '1:00'
    }
    else{
        console.log(display.dataset.content);
        display.dataset.content = (parseInt(display.dataset.content.split(":")[0]) + 1 + ":"+(parseInt(display.dataset.content.split(":")[1])) + (display.dataset.content.split(":")[1].length == 1 ? "0"  : ""));
    }
    console.log("1 min clicked")
})
smallButtons[2].addEventListener("click", () =>{
    audio.play();
    clearInterval(timing)
    if(display.dataset.content === displayTime()){
        display.dataset.content = '0:10'
    }
    else if(parseInt(display.dataset.content.split(":")[1])+10 > 60){
        console.log(display.dataset.content);
        display.dataset.content = parseInt(display.dataset.content.split(":")[0])+1 + ':' + (parseInt(display.dataset.content.split(":")[1])-50)
    }
    else if(parseInt(display.dataset.content.split(":")[1])+10 === 60){
        display.dataset.content = parseInt(display.dataset.content.split(":")[0])+1 + ":00"
    }
    else{
        console.log(display.dataset.content);
        display.dataset.content = (parseInt(display.dataset.content.split(":")[0])) + ':' + (parseInt(display.dataset.content.split(":")[1]) + 10)
    }
    console.log("10 sec clicked")
})
smallButtons[3].addEventListener("click", () =>{
    audio.play();
    console.log("time clicked")
})


bigButton.addEventListener("click", () =>{   
    audio.play();
    clearInterval(timing)
    start = setInterval(() =>{
        if(parseInt(display.dataset.content.split(":")[1]) === 0){
            if(parseInt(display.dataset.content.split(":")[0]) <= 0){
                start = clearInterval(start)
                display.dataset.content = "End"
            }
            else{
                display.dataset.content = parseInt(display.dataset.content.split(":")[0])-1 + ':' + ( parseInt(display.dataset.content.split(":")[1])+59)
            }
        }
        else{
            display.dataset.content = parseInt(display.dataset.content.split(":")[0]) + ':' + ( parseInt(display.dataset.content.split(":")[1])-1)
        }
    },1000)
    // сlearInterval(start)
    if(display.dataset.content === displayTime()){
        display.dataset.content = '0:30'
        setInterval(start)
    }
    else if(parseInt(display.dataset.content.split(":")[1])+30 > 60){
        console.log(1);
        display.dataset.content = parseInt(display.dataset.content.split(":")[0])+1 + ':' + (parseInt(display.dataset.content.split(":")[1])-30)
    }
    else if(parseInt(display.dataset.content.split(":")[1])+30 === 60){
        display.dataset.content = parseInt(display.dataset.content.split(":")[0])+1 + ":00"
    }
    else{
        console.log(display.dataset.content);
        display.dataset.content = (parseInt(display.dataset.content.split(":")[0]) + ':' + ((parseInt(display.dataset.content.split(":")[1]) + 30)));
    }

    console.log("clicked start");
},true)
clock()