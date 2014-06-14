(function () {
    var pauseScreen = $('#pause-screen');
    var psContent = pauseScreen.find('#content');
    var btnWrapper = psContent.find('.button-wrapper');
    var exitGameButt = $('#exit-game-butt');
    var resumeGameButt = $('#resume-game-butt');
    document.addEventListener('keydown', togglePause);
    $(window).on('resize', centerPauseScreenButtons);
    var gameIsPaused = false;

    exitGameButt.on('click', exitGame);
    resumeGameButt.on('click', resumeGame);

    function togglePause(e) {
        if (e.keyCode != 27) {
            return;
        }

        pauseScreen.fadeToggle(200);
        centerPauseScreenButtons();

        if (gameIsPaused) {
            resumeGame();
        } else {
            pauseGame();
        }
    }

    function pauseGame() {
        gameIsPaused = true;
    }

    function resumeGame() {
        pauseScreen.fadeOut(200);
        gameIsPaused = false;
    }

    function exitGame() {
        // maybe messages and stuff here?
        window.close();
    }

    function centerPauseScreenButtons() {
        var cntWidth = psContent.outerWidth();
        var cntHeight = psContent.outerHeight();
        var wrpHeight = btnWrapper.outerHeight();
        var wrpWidth = btnWrapper.outerWidth();

        btnWrapper.css({
            left: (cntWidth - wrpWidth) / 2,
            top: (cntHeight - wrpHeight) / 2 - 25,
        });
    }
})()