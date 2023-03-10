const video = document.getElementsByTagName('video')
const btnPlay = document.querySelector('.project-play-icon')
const content = document.querySelector('.project-content-video')
const btnPause = document.querySelector('.project-video-btn-pause')

function videoPlay() {
    btnPlay.addEventListener('click', () => {
        video[0].play()
        content.classList.add('none')
        btnPause.classList.remove('none')
    })
}

function videoPause() {
    btnPause.addEventListener('click', () => {
        video[0].pause()
        content.classList.remove('none')
        btnPause.classList.add('none')
    })
}


videoPlay()
videoPause()