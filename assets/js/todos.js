//Check off specific Todos by clicking
$("ul").on("click", "li", function(){
    //Toggle the "completed" class from the CSS file
    $(this).toggleClass("completed");
});

//Click on X to delete Todos
$("ul").on("click", "span", function(evt){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    //Stop code going up in hierarchy
    evt.stopPropagation();
});

$("input[type='text']").keypress(function(kp){
    if(kp.which === 13) {
        //Grabbing new Todo from input
        var todoText = $(this).val();
        //Clear the input box of any value
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i> </span>" + todoText + "</li>")
    }
});

$(".fa-plus-square").click(function(){
    $("input[type='text']").fadeToggle();
});