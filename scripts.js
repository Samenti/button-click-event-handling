$('#button-1').click(() => {
    console.log("Yeah, you clicked me.");
});

$('#button-2').click(() => {
    $('#button-1').text("Changed button text! Click me!");
});

$('#button-3').click(() => {
    $('button').css('background-color', 'lime');
});