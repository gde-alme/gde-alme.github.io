$(document).ready(function () {
    $('nav a').click(function (e) {
        e.preventDefault();
        var page = $(this).data('page');
        $('#content').load(page);
    });

    $('#content').load('pages/home.html');
});
