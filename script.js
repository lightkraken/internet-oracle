// get random image url from giphy
// set it as src on image element
fetch('//api.giphy.com/v1/gifs/random?api_key=XwvbKQocv3dWq9FfL3cP4fKbw0gVzo81')
    .then(response => response.json())
    .then(gif => {
        $('#fortune-gif').attr('src', gif.data.image_url)
    })

// get random fortune from JSON file
// set fortune text on element
let fortuneText;
fetch('fortunes.json')
    .then(response => response.json())
    .then(fortunes => {
        const shuffled = _.shuffle(fortunes);
        const fortune = shuffled.pop();
        fortuneText = fortune.text;
    })

// get random music file
// set it as src on source element 
$('#audio').attr('src', 'music/' + _.random(1,76) + '.mp3')

$('#submit-button').click(() => {
    $('#audio')[0].play();
    $('#console').remove();
    $('#pythia').remove();
    $('#fortune-text').show();
    new Typed('#fortune-text', {
        strings: [fortuneText],
        typeSpeed: 40
    });
});