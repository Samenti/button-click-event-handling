$('#button-1').click(() => {
    console.log("Yeah, you clicked me.");
});

$('#button-2').click(() => {
    $('#button-1').text("Changed button text! Click me!");
});

let isClicked = false

$('#button-3').click(() => {
    if (!isClicked) {
        $('button').css('background-color', $('#input-1').val());
        isClicked = true
    }
});