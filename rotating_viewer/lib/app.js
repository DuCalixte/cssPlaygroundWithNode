$(function() {
    $('#fader img:not(:first)').hide();
    $('#fader img').css('position', 'absolute');
    $('#fader img').css('top', '0px');
    $('#fader img').css('left', '50%');
    $('#fader img').each(function() {
        var img = $(this);
        $('<img>').attr('src', $(this).attr('src')).load(function() {
            img.css('margin-left', -this.width / 2 + 'px');
        });
    });

    function fadeNext() {
        $('#fader img').first().fadeOut().appendTo($('#fader'));
        $('#fader img').first().fadeIn();
    }
    var rotate = setInterval(fadeNext, 3000);
});
