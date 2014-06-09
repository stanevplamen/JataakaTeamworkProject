(function myfunction() {

    var presents = $('#presents');
    var title = presents.next();

    presents.css('display', 'block').hide();
    title.css('display', 'block').hide();

    presents.fadeIn(4000);
    presents.fadeOut(1500);

    setTimeout(function () {
        title.fadeIn(4000);
    }, 5500);

    setTimeout(function () {
        var doc = $(document);
        doc.on('click', function () {
            title.fadeOut(2000);
            doc.off('click');
        });
    }, 9500)
})()