var html5webPiano = {};
html5webPiano.isMSIE = false;
html5webPiano.START_NOTE_NUMBER = 60;
html5webPiano.END_NOTE_NUMBER = 72;
html5webPiano.OFFSET = [0, 40, 60, 105, 120, 180, 220, 240, 282, 300, 345, 360];
window.onload = function () {
    var i;
    var pianoArea = document.getElementById('pianoArea');
    if (html5webPiano.isMSIE) {
        html5webPiano.sound = html5webPiano.mp3Sound;
    } else {
        html5webPiano.sound = html5webPiano.oggSound;
    }
    if (document.addEventListener) {
        for (i = html5webPiano.START_NOTE_NUMBER; i <= html5webPiano.END_NOTE_NUMBER; i++) {
            setKeyEventListener(i);
        }
    } else if (document.attachEvent) {
        for (i = html5webPiano.START_NOTE_NUMBER; i <= html5webPiano.END_NOTE_NUMBER; i++) {
            setKeyAttachEvent(i);
        }
    }
};

function loadSoundFile(noteNumber, fileType) {
    var soundId = 'sound' + noteNumber;
    if (html5webPiano.sound) {
        html5webPiano.sound[soundId] = new Audio('sound/' + noteNumber + '.' + fileType);
    }
}

function setKeyEventListener(noteNumber) {
    var keyId = 'key' + noteNumber;
    var key = document.getElementById(keyId);
    if (key) {
        key.style.left = getPosition(noteNumber) + 'px';
        key.addEventListener('click', keyClick, false);
    }
}

function setKeyAttachEvent(noteNumber) {
    var keyId = 'key' + noteNumber;
    var key = document.getElementById(keyId);
    if (key) {
        key.style.left = getPosition(noteNumber) + 'px';
        key.attachEvent('onclick', keyClick);
    }
}

function getPosition(noteNumber) {
    var left = 0;
    var offset = (noteNumber % 12);
    var octave = Math.floor((noteNumber - 60) / 12);
    left = html5webPiano.OFFSET[offset];
    left = left + (octave * 420) + 70;
    return left;
}

function keyClick() {
    var that = this;
    var noteNumber = that.id.replace('key', '');
    playSound(noteNumber);
}

function playSound(noteNumber) {
    var soundId = 'sound' + noteNumber;
    var keyId = 'key' + noteNumber;
    var key = document.getElementById(keyId);
    var audio = null;
    if (html5webPiano.sound) {
        if (html5webPiano.sound[soundId]) {
            audio = new Audio(html5webPiano.sound[soundId]);
            audio.play();
        }
    }
    if (key) {
        key.style.backgroundColor = '#9cf';
        setTimeout('setOriginColor(' + noteNumber + ')', 100);
    }
}

function setOriginColor(noteNumber) {
    var keyId = 'key' + noteNumber;
    var key = document.getElementById(keyId);
    var offset = noteNumber % 12;
    if (key) {
        switch (offset) {
            case 0:
            case 2:
            case 4:
            case 5:
            case 7:
            case 9:
            case 11:
                key.style.backgroundColor = '#eee';
                break;
            case 1:
            case 3:
            case 6:
            case 8:
            case 10:
                key.style.backgroundColor = '#666';
                break;
            default:
                break;
        }
    }
}

document.onkeydown = function (e) {
    var pressEvent = e || window.event;
    var keyCode = '';
    if (pressEvent.keyCode) {
        keyCode = pressEvent.keyCode;
    } else if (pressEvent.charCode) {
        keyCode = pressEvent.charCode;
    } else if (pressEvent.which) {
        keyCode = pressEvent.which;
    }
    switch (keyCode) {
        case 65:
        case 97:
        case 81:
        case 113:
        case 90:
        case 122:
            playSound(60);
            break;
        case 87:
        case 119:
            playSound(61);
            break;
        case 83:
        case 115:
        case 88:
        case 120:
            playSound(62);
            break;
        case 69:
        case 101:
            playSound(63);
            break;
        case 67:
        case 99:
        case 68:
        case 100:
            playSound(64);
            break;
        case 70:
        case 102:
        case 82:
        case 114:
        case 86:
        case 118:
            playSound(65);
            break;
        case 84:
        case 116:
            playSound(66);
            break;
        case 66:
        case 98:
        case 71:
        case 103:
            playSound(67);
            break;
        case 89:
        case 121:
            playSound(68);
            break;
        case 72:
        case 104:
        case 78:
        case 110:
            playSound(69);
            break;
        case 85:
        case 117:
            playSound(70);
            break;
        case 77:
        case 109:
        case 74:
        case 106:
            playSound(71);
            break;
        case 75:
        case 107:
        case 73:
        case 105:
        case 44:
        case 188:
            playSound(72);
            break;
        default:
            break;
    }
};
html5webPiano.oggSound = {
    'sound1': 'piano_music/1 (1).wav',
    'sound2': 'piano_music/1 (2).wav',
    'sound3': 'piano_music/1 (3).wav',
    'sound4': 'piano_music/1 (4).wav',
    'sound5': 'piano_music/1 (5).wav',
    'sound6': 'piano_music/1 (6).wav',
    'sound7': 'piano_music/1 (7).wav',
    'sound8': 'piano_music/1 (8).wav',
    'sound9': 'piano_music/1 (9).wav',
    'sound10': 'piano_music/1 (10).wav',
    'sound11': 'piano_music/1 (11).wav',
    'sound12': 'piano_music/1 (12).wav',
    'sound13': 'piano_music/1 (13).wav',
    'sound14': 'piano_music/1 (14).wav',
    'sound15': 'piano_music/1 (15).wav',
    'sound16': 'piano_music/1 (16).wav',
    'sound17': 'piano_music/1 (17).wav',
    'sound18': 'piano_music/1 (18).wav',
    'sound19': 'piano_music/1 (19).wav',
    'sound20': 'piano_music/1 (20).wav',
    'sound21': 'piano_music/1 (21).wav',
    'sound22': 'piano_music/1 (22).wav',
    'sound23': 'piano_music/1 (23).wav',
    'sound24': 'piano_music/1 (24).wav',
    'sound25': 'piano_music/1 (25).wav',
    'sound26': 'piano_music/1 (26).wav',
    'sound27': 'piano_music/1 (27).wav',
    'sound28': 'piano_music/1 (28).wav',
    'sound29': 'piano_music/1 (29).wav',
    'sound30': 'piano_music/1 (30).wav',
    'sound31': 'piano_music/1 (31).wav',
    'sound32': 'piano_music/1 (32).wav',
    'sound33': 'piano_music/1 (33).wav',
    'sound34': 'piano_music/1 (34).wav',
    'sound35': 'piano_music/1 (35).wav',
    'sound36': 'piano_music/1 (36).wav',
    'sound37': 'piano_music/1 (37).wav',
    'sound38': 'piano_music/1 (38).wav',
    'sound39': 'piano_music/1 (39).wav',
    'sound40': 'piano_music/1 (40).wav',
    'sound41': 'piano_music/1 (41).wav',
    'sound42': 'piano_music/1 (42).wav',
    'sound43': 'piano_music/1 (43).wav',
    'sound44': 'piano_music/1 (44).wav',
    'sound45': 'piano_music/1 (45).wav',
    'sound46': 'piano_music/1 (46).wav',
    'sound47': 'piano_music/1 (47).wav',
    'sound48': 'piano_music/1 (48).wav',
    'sound49': 'piano_music/1 (49).wav',
    'sound50': 'piano_music/1 (50).wav',
    'sound51': 'piano_music/1 (51).wav',
    'sound52': 'piano_music/1 (52).wav',
    'sound53': 'piano_music/1 (53).wav',
    'sound54': 'piano_music/1 (54).wav',
    'sound55': 'piano_music/1 (55).wav',
    'sound56': 'piano_music/1 (56).wav',
    'sound57': 'piano_music/1 (57).wav',
    'sound58': 'piano_music/1 (58).wav',
    'sound59': 'piano_music/1 (59).wav',
    'sound60': 'piano_music/1 (60).wav',
    'sound61': 'piano_music/1 (61).wav',
    'sound62': 'piano_music/1 (62).wav',
    'sound63': 'piano_music/1 (63).wav',
    'sound64': 'piano_music/1 (64).wav',
    'sound65': 'piano_music/1 (65).wav',
    'sound66': 'piano_music/1 (66).wav',
    'sound67': 'piano_music/1 (67).wav',
    'sound68': 'piano_music/1 (68).wav',
    'sound69': 'piano_music/1 (69).wav',
    'sound70': 'piano_music/1 (70).wav',
    'sound71': 'piano_music/1 (71).wav',
    'sound72': 'piano_music/1 (72).wav',
    'sound73': 'piano_music/1 (73).wav',
    'sound74': 'piano_music/1 (74).wav',
    'sound75': 'piano_music/1 (75).wav',
    'sound76': 'piano_music/1 (76).wav',
    'sound77': 'piano_music/1 (77).wav',
    'sound78': 'piano_music/1 (78).wav',
    'sound79': 'piano_music/1 (79).wav',
    'sound80': 'piano_music/1 (80).wav',
    'sound81': 'piano_music/1 (81).wav',
    'sound82': 'piano_music/1 (82).wav',
    'sound83': 'piano_music/1 (83).wav',
    'sound84': 'piano_music/1 (84).wav',
    'sound85': 'piano_music/1 (85).wav',
    'sound86': 'piano_music/1 (86).wav',
    'sound87': 'piano_music/1 (87).wav',
    'sound88': 'piano_music/1 (88).wav',
};
html5webPiano.mp3Sound = {
    'sound1': 'piano_music/1 (1).wav',
    'sound2': 'piano_music/1 (2).wav',
    'sound3': 'piano_music/1 (3).wav',
    'sound4': 'piano_music/1 (4).wav',
    'sound5': 'piano_music/1 (5).wav',
    'sound6': 'piano_music/1 (6).wav',
    'sound7': 'piano_music/1 (7).wav',
    'sound8': 'piano_music/1 (8).wav',
    'sound9': 'piano_music/1 (9).wav',
    'sound10': 'piano_music/1 (10).wav',
    'sound11': 'piano_music/1 (11).wav',
    'sound12': 'piano_music/1 (12).wav',
    'sound13': 'piano_music/1 (13).wav',
    'sound14': 'piano_music/1 (14).wav',
    'sound15': 'piano_music/1 (15).wav',
    'sound16': 'piano_music/1 (16).wav',
    'sound17': 'piano_music/1 (17).wav',
    'sound18': 'piano_music/1 (18).wav',
    'sound19': 'piano_music/1 (19).wav',
    'sound20': 'piano_music/1 (20).wav',
    'sound21': 'piano_music/1 (21).wav',
    'sound22': 'piano_music/1 (22).wav',
    'sound23': 'piano_music/1 (23).wav',
    'sound24': 'piano_music/1 (24).wav',
    'sound25': 'piano_music/1 (25).wav',
    'sound26': 'piano_music/1 (26).wav',
    'sound27': 'piano_music/1 (27).wav',
    'sound28': 'piano_music/1 (28).wav',
    'sound29': 'piano_music/1 (29).wav',
    'sound30': 'piano_music/1 (30).wav',
    'sound31': 'piano_music/1 (31).wav',
    'sound32': 'piano_music/1 (32).wav',
    'sound33': 'piano_music/1 (33).wav',
    'sound34': 'piano_music/1 (34).wav',
    'sound35': 'piano_music/1 (35).wav',
    'sound36': 'piano_music/1 (36).wav',
    'sound37': 'piano_music/1 (37).wav',
    'sound38': 'piano_music/1 (38).wav',
    'sound39': 'piano_music/1 (39).wav',
    'sound40': 'piano_music/1 (40).wav',
    'sound41': 'piano_music/1 (41).wav',
    'sound42': 'piano_music/1 (42).wav',
    'sound43': 'piano_music/1 (43).wav',
    'sound44': 'piano_music/1 (44).wav',
    'sound45': 'piano_music/1 (45).wav',
    'sound46': 'piano_music/1 (46).wav',
    'sound47': 'piano_music/1 (47).wav',
    'sound48': 'piano_music/1 (48).wav',
    'sound49': 'piano_music/1 (49).wav',
    'sound50': 'piano_music/1 (50).wav',
    'sound51': 'piano_music/1 (51).wav',
    'sound52': 'piano_music/1 (52).wav',
    'sound53': 'piano_music/1 (53).wav',
    'sound54': 'piano_music/1 (54).wav',
    'sound55': 'piano_music/1 (55).wav',
    'sound56': 'piano_music/1 (56).wav',
    'sound57': 'piano_music/1 (57).wav',
    'sound58': 'piano_music/1 (58).wav',
    'sound59': 'piano_music/1 (59).wav',
    'sound60': 'piano_music/1 (60).wav',
    'sound61': 'piano_music/1 (61).wav',
    'sound62': 'piano_music/1 (62).wav',
    'sound63': 'piano_music/1 (63).wav',
    'sound64': 'piano_music/1 (64).wav',
    'sound65': 'piano_music/1 (65).wav',
    'sound66': 'piano_music/1 (66).wav',
    'sound67': 'piano_music/1 (67).wav',
    'sound68': 'piano_music/1 (68).wav',
    'sound69': 'piano_music/1 (69).wav',
    'sound70': 'piano_music/1 (70).wav',
    'sound71': 'piano_music/1 (71).wav',
    'sound72': 'piano_music/1 (72).wav',
    'sound73': 'piano_music/1 (73).wav',
    'sound74': 'piano_music/1 (74).wav',
    'sound75': 'piano_music/1 (75).wav',
    'sound76': 'piano_music/1 (76).wav',
    'sound77': 'piano_music/1 (77).wav',
    'sound78': 'piano_music/1 (78).wav',
    'sound79': 'piano_music/1 (79).wav',
    'sound80': 'piano_music/1 (80).wav',
    'sound81': 'piano_music/1 (81).wav',
    'sound82': 'piano_music/1 (82).wav',
    'sound83': 'piano_music/1 (83).wav',
    'sound84': 'piano_music/1 (84).wav',
    'sound85': 'piano_music/1 (85).wav',
    'sound86': 'piano_music/1 (86).wav',
    'sound87': 'piano_music/1 (87).wav',
    'sound88': 'piano_music/1 (88).wav',
};
