var yourAudio = document.getElementById('yourAudio'),
control = document.getElementById('audioControl');

let audioControl =() => {

    // Update the Button
    var play = ctrl.innerHTML === 'Play';
    ctrl.innerHTML = play ? 'Pause Music' : 'Play Music';

    // Update the Audio
    var method = play ? 'play' : 'pause';
    yourAudio[method]();

    // Prevent Default Action
    return false;
};

control.addEventListener('click', audioControl)