
// gets time for the header, above scheduler
var currentDay= moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDay);
var eventDetails;


// global variable definitions
var hourBlock = $(".hour-block");
var saveBtn = $("#saveBtn");
var textArea1 = $("#textArea1");
var scheduleInfo = $("#container");

//FUNCTIONS ARE BELOW
// retrieve info from time-block input
scheduleInfo.on("click", ".saveBtn", function() {
    var hour= $(this).data("hour");
    var text= $("#" + hour).val();
    
     localStorage.setItem(hour, text);
});
function colorCode(){
    console.log("colorCode");
    var timeNow = moment().hour;
    hourBlock.each(function(el, i){
        var selectedTime = parseInt($(this).attr("id").split());
        console.log(selectedTime);

        if (selectedTime > timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");

         } else if (currHour === timeNow){
            $(this).removeClass("future");
            $(this).addClass("present");
            $(this).removeClass("past");

         } else {
             $(this).addClass("future");
             $(this).removeClass("present");
             $(this).removeClass("past");
         }
        })
    };
    

function init(){
    for(i=9; i<=17; i++){
        var text= localStorage.getItem(i);
        if (text){
            $("#" + i).val(text);
        } 
    }
    colorCode();
}

// past present future
$().ready(init)




