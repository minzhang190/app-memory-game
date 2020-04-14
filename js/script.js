var searchParams = new URLSearchParams(location.search);

/************ Start hard coded settings ******************/

// How long a non matching card is displayed once clicked.
var nonMatchingCardTime = searchParams.get('nonMatchingCardTime') || 1000;

// Shuffle card images: How many different images are available to shuffle
// from?
var imagesAvailable = searchParams.get('imagesAvailable') || 15;

/************ End hard coded settings ******************/

var dataDirectory = searchParams.get('data') || 'mmenavas';

var script = document.createElement('script');
script.src = 'data/' + dataDirectory + '/script.js';
document.body.appendChild(script);

var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'data/' + dataDirectory + '/style.css';
document.head.appendChild(link);

window.addEventListener('load', function(e) {
    var grid = searchParams.get('grid') || '5x6';
    handleSettingsSubmission(grid);
});
