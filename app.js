//data stored in variable in case we want to reference it later
var resource = 'topSpots.json';
var weird = [2,3,4,5,5];

$( document ).ready(function() {
    //jquery method to grab data from resource
    $.getJSON(resource, function(data){
        //iterate over each data bit, show it on table in index.html
        $.each(data, function(index){
            //super long concatenation- I'd rather build it all in one go than +=. Babel and template strings would make it easier to parse as a reader
            $('#tableBody').append("<tr><td>" + data[index].name +"</td><td>" + data[index].description + "</td><td class='mapLink'><button class='pure-button'><a href='https://www.google.com/maps?q=" + data[index].location + "'>Click to Open in Google Maps</a></button></td></tr>");
        })
    });
});

$('#test').append('<p>'+weird+'</p>')