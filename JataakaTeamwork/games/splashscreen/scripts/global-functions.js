var win = $(window);
var controlsTable = $('table');
var authorsTable = $('div#authors-wrapper');

function centerControlsTable() {
    var winWidth = win.width();
    var winHeight = win.height();
    var tableTop = (winHeight - parseFloat(controlsTable.height())) / 2;
    var tableLeft = (winWidth - parseFloat(controlsTable.outerWidth())) / 2;
    controlsTable.css({
        top: tableTop - 100,
        left: tableLeft
    });
}

function centerAuthorsTable() {
    var winWidth = win.width();
    var winHeight = win.height();
    var tableTop = (winHeight - parseFloat(authorsTable.height())) / 2;
    var tableLeft = (winWidth - parseFloat(authorsTable.outerWidth())) / 2;
    authorsTable.css({
        top: tableTop,
        left: tableLeft
    });
}