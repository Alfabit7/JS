'use strict'

//Используем шаблон HTML видеоплеера
let container = document.querySelector('.container');
let playerTemplate = document.querySelector('#templatePlayer');
let templateContent = playerTemplate.innerHTML;
container.innerHTML = templateContent;

let playerEl = document.querySelector('.player')
let videoEL = document.querySelector('video');
videoEL.src = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';


let controlPanelEl = document.querySelector('.controlPanel');
let btnPlayEl = document.querySelector('.btnPlay');
let btnPauseEl = document.querySelector('.btnPause');

let btnSoundEl = document.querySelector('.btnSound');
let btnMuteEl = document.querySelector('.btnMute');

let btnSettings = document.querySelector('.btnSettings');
let closeIcon = document.querySelector('.closeIcon');
let volumeSoundEl = document.querySelector('.volumeSound');
let volumeSound = 0.1;
let timingBarVideoEl = document.querySelector('.timingBarVideo');
let settingsMenu = document.querySelector('.settingsMenu');

let lengthVideo = null;// длина видео


timingBarVideoEl.min = '0;'
timingBarVideoEl.step = '0.1';
// получает метаданные о длине видео и ставит начальное значение в ноль
videoEL.addEventListener('loadedmetadata', function () {
    lengthVideo = videoEL.duration;
    timingBarVideoEl.value = '0'
});

timingBarVideoEl.max = lengthVideo;

volumeSoundEl.min = '0;'
volumeSoundEl.max = '1';
volumeSoundEl.step = '0.01';
volumeSoundEl.value = '0.1';

//Запуск\пауза при клике на видео
videoEL.addEventListener('click', (e) => {
    if (videoEL.paused) {
        videoEL.play();
    } else {
        videoEL.pause();
    }
})

//Запуск по клику на видео
videoEL.addEventListener('play', (e) => {
    btnPauseEl.classList.remove('btnHidden');
    btnPlayEl.classList.add('btnHidden')

})

videoEL.addEventListener('pause', (e) => {
    btnPlayEl.classList.remove('btnHidden');
    btnPauseEl.classList.add('btnHidden')
})

//Обновление полосы просмотра видео
videoEL.addEventListener('timeupdate', (e) => {
    timingBarVideoEl.value = videoEL.currentTime / videoEL.duration * 100;
    timingBarVideoEl.style.background = 'linear-gradient(to right, #9a905d ' + percentage + '%, #43e5f7 ' + percentage + '%)';

})

//  
timingBarVideoEl.addEventListener('input', () => {
    videoEL.currentTime = timingBarVideoEl.value / 100 * videoEL.duration;
})


//Запуск по кнопкам
btnPlayEl.addEventListener('click', (e) => {
    if (videoEL.pause) {
        videoEL.currentTime = timingBarVideoEl.value / 100 * videoEL.duration;
        btnPlayEl.classList.add('btnHidden')
        videoEL.play();
        btnPauseEl.classList.remove('btnHidden');
    }
})
btnPauseEl.addEventListener('click', (e) => {
    if (videoEL.play) {
        videoEL.pause();
        btnPauseEl.classList.add('btnHidden')
        btnPlayEl.classList.remove('btnHidden');
    }
})


//Убрать\Установить звук по кнопке
btnSoundEl.addEventListener('click', (e) => {
    videoEL.volume = 0;
    volumeSoundEl.value = 0;
    if (btnMuteEl) {
        btnSoundEl.classList.add('btnHidden');
        btnMuteEl.classList.remove('btnHidden');
    }

})

btnMuteEl.addEventListener('click', () => {
    if (btnSoundEl) {
        videoEL.volume = 0.3;
        volumeSoundEl.value = volumeSound;
        btnSoundEl.classList.remove('btnHidden');
        btnMuteEl.classList.add('btnHidden');
    }

    if (volumeSoundEl.value == 0) {
        volumeSoundEl.value = 0.3;
    }
})

//Убавить\Добавить громкость звука по ползунку
volumeSoundEl.addEventListener('input', (e) => {
    videoEL.volume = volumeSoundEl.value;
    volumeSound = volumeSoundEl.value;
    if (videoEL.volume) {
        btnSoundEl.classList.remove('btnHidden');
        btnMuteEl.classList.add('btnHidden');
    }
    if (volumeSoundEl.value == 0) {
        btnMuteEl.classList.remove('btnHidden');
        btnSoundEl.classList.add('btnHidden');
    }
})

//Меню натсроек
let settingSpeedEl = document.querySelector('.settingSpeed')
let resetSpeedEl = document.querySelector('.resetSpeed')

settingSpeedEl.innerHTML = 'Увеличить cкорость:';
resetSpeedEl.innerHTML = 'Сбросить скорость';


//Скрыть\Показать меню настроек
btnSettings.addEventListener('click', (e) => {
    settingsMenu.classList.remove('hidden');
    setTimeout(() => {
        settingsMenu.classList.add('hidden')
    }, 15000)
})

closeIcon.addEventListener('click', (e) => {
    settingsMenu.classList.add('hidden');
})

// Увеличение\Сброс скорости воспроизведения
settingSpeedEl.addEventListener('click', (e) => {
    videoEL.playbackRate = 0.2 + videoEL.playbackRate
    settingSpeedEl.innerHTML = 'Cкорость: ' +
        videoEL.playbackRate.toFixed(2);
})


resetSpeedEl.addEventListener('click', (e) => {
    videoEL.playbackRate = 1;
    settingSpeedEl.innerHTML = 'Увеличить cкорость:';
})



playerEl.addEventListener('mouseover', (e) => {
    controlPanelEl.classList.remove('hidden');
    controlPanelEl.classList.add('show')
    timingBarVideoEl.classList.remove('hidden');
    timingBarVideoEl.classList.add('show');

    // Задержка скрытия панели если курсор без движения находится на видео
    setTimeout(() => {
        if (!controlPanelEl.classList.contains('hidden')) {
            hiddenControlPAnel()
        }
    }, 5000)

})

playerEl.addEventListener('mousemove', () => {
    controlPanelEl.classList.add('show');
    controlPanelEl.classList.remove('hidden');
    timingBarVideoEl.classList.add('show');
    timingBarVideoEl.classList.remove('hidden');


    // Задержка скрытия панели если курсор без движения находится на видео
    if (!controlPanelEl.classList.contains('hidden')) {
        setTimeout(() => {
            hiddenControlPAnel()
        }, 5000)
    }

})

playerEl.addEventListener('mouseout', (e) => {
    hiddenControlPAnel()
})

// Функция прячет controlPanel
function hiddenControlPAnel() {
    controlPanelEl.classList.remove('show');
    controlPanelEl.classList.add('hidden');
    timingBarVideoEl.classList.remove('show');
    timingBarVideoEl.classList.add('hidden');
}