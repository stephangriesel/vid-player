let vid = document.getElementById("myvideo");

let fillBar = document.getElementById("fill");

let currentTime = document.getElementById("currentTime");

let volumeSlider = document.getElementById("volume");

function playOrPause(){

    if(vid.paused){ //review, not working
        vid.play();
        $("#playBtn").attr("src","pause.png");
    }
    else {
        vid.pause();
        $("#playBtn").attr("src","play.png");
    }
}

vid.addEventListener('timeupdate', function(){
    let position = vid.currentTime / vid.duration;

    fillBar.style.width = position * 100 +'%';

    convertTime(Math.round(vid.currentTime));

    if(vid.ended) { // review, not working
        $("playBtn").attr("src","play.png");
    }
});

function convertTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent = min + ":" + sec;

    totalTime (Math.round(vid.duration));
}

function totalTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent += "/" + min + ":" + sec;
}

function changeVolume(){ // not working, review
    vid.volume = volumeSlider.value;

    if(volumeSlider.value == 0){
        $("#speaker").attr("src","mute.png");
    }
    else {
        $("#speaker").attr("src","speaker.png");
    }
}