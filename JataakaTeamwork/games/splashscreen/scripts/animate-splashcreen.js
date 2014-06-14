﻿(function myfunction() {

    var body = $('body');
    var presents = $('#presents');
    var title = presents.next();
    var small = title.next();
    var menuWrapper = $('#menu-wrapper');
    var controlsWrapper = $('#controls-wrapper');
    var menuSound = new Audio('sounds/menu-sound.wav');
    menuSound.loop = true;
    var muteButt;
    var soundOnSrc = 'imgs/soundOn.png';
    var soundOffSrc = 'imgs/soundOff.png';

    // comment this out, uncoment whats below
    //menuWrapper.fadeIn(500);
    //centerMenuWrapper();
    //centerControlsTable();
    //sizeBodyTo100Percent();
    //win.resize(centerControlsTable);
    //win.resize(centerAuthorsTable);

    presents.css('display', 'block').hide();
    title.css('display', 'block').hide();
    small.css('display', 'block').hide();

    presents.fadeIn(4000);
    presents.fadeOut(1500);

    setTimeout(function () {
        title.fadeIn(4000);
    }, 5500);

    setTimeout(function () {
        small.fadeIn(1000);
        var doc = $(document);

        doc.on('click', function () {
            menuSound.play();
            title.attr('src', 'imgs/gos-blk-100-2-fix.png');
            small.fadeOut(1000);

            doc.off('click');
            win.off('resize');

            centerControlsTable();
            centerControlsTable();
            sizeBodyTo100Percent();

            win.resize(centerControlsTable);
            win.resize(centerAuthorsTable);

            title.fadeOut(2000);
            setTimeout(initializeMenu, 1000);
            createMuteButton();
        });
    }, 9500) // 9500

    function initializeMenu() {
        centerMenuWrapper();
        win.resize(centerMenuWrapper);
        menuWrapper.fadeIn(6500);
    }

    function createMuteButton() {
        if (muteButt !== undefined) {
            return;
        }
        muteButt = $('<img id="soundToggle" src="imgs/soundOff.png" />');
        muteButt.on('click', toggleMute);
        controlsWrapper.append(muteButt);
    }

    function toggleMute() {
        menuSound.muted = !menuSound.muted;
        var currSrc = muteButt.attr('src');

        if (currSrc === soundOnSrc) {
            muteButt.attr('src', 'imgs/soundOff.png');
        } else {
            muteButt.attr('src', 'imgs/soundOn.png');
        }
    }
})()