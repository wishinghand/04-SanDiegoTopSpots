var resource = 'topSpots.json';
var output = $('#output');
$.getJSON(resource, function(data){
    $.each(data, function(index){
        $('#tableHead').append("<tr><td>" + data[index].name +"</td><td>" + data[index].description + "</td><td><a href='https://www.google.com/maps?q=" + data[index].location + "'>" + data[index].location + "</a></td></tr>");
    })
});