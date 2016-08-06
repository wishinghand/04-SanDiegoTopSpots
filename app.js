var resource = 'topSpots.json';
var output = $('#output');
$.getJSON(resource, function(data){
    $.each(data, function(index){
        $('#tableHead').append("<tr><td>" + data[index].name +"</td><td>" + data[index].description +"</td><td>" + data[index].location +"</td></tr>");
    })
});