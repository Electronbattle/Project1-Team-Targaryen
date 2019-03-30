// pixabay - image source example code 
var API_KEY = '12044266-b36e8c39536f87a671582df76';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('beaches');
$.getJSON(URL, function(data){
if (parseInt(data.totalHits) > 0)
    $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
else
    console.log('No hits');
});