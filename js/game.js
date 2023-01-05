var audio = document.getElementById('audio'),
control = document.getElementById('audioControl');

let audioControl =() => {

    // Update the Button
    var play = ctrl.innerHTML === 'Play';
    ctrl.innerHTML = play ? 'Pause Music' : 'Play Music';

    // Update the Audio
    var method = play ? 'play' : 'pause';
    audio[method]();

    // Prevent Default Action
    return false;
};

control.addEventListener('click', audioControl)