moment().format('MMMM Dao YYYY, h:mm:ss ');
moment().subtract(10, 'days').calendar();


$("button").on('click', function(event){
    event.preventDefault();
    console.log(this);
    var parent = $(this).parent();
    var id = parent.attr('id');
    var value = parent.find("textarea").val()
    console.log({id, value})

    localStorage.setItem(id, value);

    //display has to run to load saved values
});

// display function definition
function display(){
    console.log("display");
    $("textarea").each(function(){
        console.log(this);
        var parent = $(this).parent();
        var id = parent.attr('id');
        console.log(id);
        var value = localStorage.getItem(id)
        console.log(value)
        if(value === null){
            console.log("no value yet");
        }
        else{
            $(this).val(value)
        }
    });
}
    
// display has to run on page load
display();

// $(this).parent().get(0)
// <div class=​"row" id=​"time-9">​…​</div>​
// $(this).parent().find('textarea').get(0)
// <textarea class=​"col-md-10 textarea">​lunch at 2​</textarea>​
// $(this).parent().find('textarea').val()
// "lunch at 2"
// $(this).parent().attr('id');
// "time-9"

//localStorage.setItem("time-9", "lunch at 2")