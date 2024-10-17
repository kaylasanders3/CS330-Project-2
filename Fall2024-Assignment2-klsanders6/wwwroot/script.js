function apiSearch() {
    var params = {
        'q': $('#query').val(),
        'count': 50,
        'offset': 0,
        'mkt': 'en-us'
    };


    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        type: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': 'd9f9e2ab2e4e4bf489c83d73c8ce6c8d'
        }
    })
        .done(function (data) {

            var searchResultDiv = document.getElementById('searchResults');
            searchResultDiv.style.visibility = 'visible';
            
            var len = data.webPages.value.length;
            var results = '';
            for (i = 0; i < len; i++) {
                results += `<p><a href="${data.webPages.value[i].url}">${data.webPages.value[i].name}</a>: ${data.webPages.value[i].snippet}</p>`;
            }
            $('#searchResults').html(results);
            $('#searchResults').dialog();
        })
        .fail(function () {
            alert('error');
        });
}

function searchClick() {
    apiSearch()
}

var isFirstImage = true; 
function switchBackground() {
    if(isFirstImage) {
        document.body.style.backgroundImage = "url('bloomsearch.jpg')";
    }
    else {
        document.body.style.backgroundImage = "url('dandelions.jpg')"; 
    }
    isFirstImage = !isFirstImage;
}

function showTime() {
    
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if(hours < 10) {
        hours = "0" + hours;
    }

    var timeString = "Time: " + hours + ":" + minutes;
    var timeDiv = document.getElementById('time');
    timeDiv.style.visibility = 'visible';

    document.getElementById('time').innerHTML = timeString;
}


