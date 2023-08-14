window.onload = function(){
    const video = document.querySelector('video');
    const playBackSpeed = 80;
    document.getElementById("shoe_index").style.height = Math.floor( video.duration) * playBackSpeed + 'px';
    window.addEventListener("scroll", function(){
        video.currentTime = window.pageYOffset/(playBackSpeed-4);
    })
}
