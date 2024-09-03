$(document).keypress(function(event){
    $("h1").text(event.key);
});

$("button".attr).click(function(){
    $("h1").css("color", "purple");
});