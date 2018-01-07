Jquery Syntax::
    $(selector).action()

  > A $ sign to define/access jQuery
  > A (selector) to "query (or find)" HTML elements
  > A jQuery action() to be performed on the element(s)

  Examples :
        $(document).ready(function(){
            // jQuery methods go here...
        });

        $(function(){
            // jQuery methods go here...
        });

----------------------------------------------------------

MouseEvents 	 KeyboardEvents 	Form Events 	     Document/Window Events
click 	       keypress          submit 	         load
dblclick 	     keydown 	         change 	         resize
mouseenter 	   keyup 	           focus 	           scroll
mouseleave 	                     blur 	           unload
----------------------------------------------------------

Event Listiners
// https://www.w3schools.com/jquery/jquery_ref_events.asp
// https://www.w3schools.com/jquery/jquery_ref_effects.asp

$("p").click(function(){ // action goes here!!});

$("#p1").hover(function(){alert("You entered p1!");},
    function(){ alert("Bye! You now leave p1!");});

$("input").focus(function(){$(this).css("background-color", "#cccccc");});

$("p").dblclick(function(){$(this).hide();});


//  ON() attaches event handlers into it!
$("p").on({
    mouseenter: function(){ $(this).css("background-color", "lightgray");},
    mouseleave: function(){ $(this).css("background-color", "lightblue");},
    click: function(){ $(this).css("background-color", "yellow");}
});
----------------------------------------------------------
Callback functions
$("button").click(function(){
    $("p").hide("slow", function(){
        alert("The paragraph is now hidden");
    });
});
----------------------------------------------------------
GET / SET text(), html(), val()
$("#btn1").click(function(){
    alert("Text: " + $("#test").text());
});
$("#btn2").click(function(){
    alert("HTML: " + $("#test").html());
});
$("#btn1").click(function(){
    alert("Value: " + $("#test").val());
});
$("button").click(function(){
    alert($("#w3s").attr("href"));
});
----------------------------------------------------------
$("#btn1").click(function(){
    $("#test1").text("Hello world!");
});
$("#btn2").click(function(){
    $("#test2").html("<b>Hello world!</b>");
});
$("#btn3").click(function(){
    $("#test3").val("Dolly Duck");
});
----------------------------------------------------------

 $("p").css("propertyname");
 $("p").css("propertyname","value");
 $("p").css({"background-color": "yellow", "font-size": "200%"});


    width()
    height()
    innerWidth()
    innerHeight()
    outerWidth()
    outerHeight()

Traversing Up the DOM Tree
Three useful jQuery methods for traversing up the DOM tree are:
    parent()
    parents()
    parentsUntil()

Traversing Down the DOM Tree
Two useful jQuery methods for traversing down the DOM tree are:
    children()
    find()

    
Traversing Sideways in The DOM Tree
There are many useful jQuery methods for traversing sideways in the DOM tree:
    siblings()
    next()
    nextAll()
    nextUntil()
    prev()
    prevAll()
    prevUntil()
