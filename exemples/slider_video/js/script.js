var num=0;
var videos = ["1.mp4","2.mp4"];

var myVideo = document.querySelector("#slider .centre video");

function primer(){
    num=0;
    myVideo.src = "./video/" + videos[num];
    myVideo.play();
}

function dreta() {
    num=++num%videos.length;
    myVideo.src = "./video/" + videos[num];
    myVideo.play();
}

function esquerre() {
    num=(--num+videos.length)%videos.length;
    myVideo.src = "./video/" + videos[num];
    myVideo.play();
}

primer();

/* Adding the event listeners on the video to play/pause the video. */
myVideo.addEventListener("click", function (e) {
    document.querySelector("#info-video").remove();
    myVideo.muted = false;
    myVideo.play();
})


