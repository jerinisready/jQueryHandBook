Selecters
$("tagName")    -     Select All element With tagName
$("#id")        -     Select Element With ID
$(".className") -     Select All Elements With className
$("*") 	        -     Selects all elements
$(this)         -     Selects the current HTML element
$("p.intro")         -     Selects all <p> elements with class="intro"
$("p:first") 	         -     Selects the first <p> element
$("ul li:first") 	         -     Selects the first <li> element of the first <ul>
$("ul li:first-child") 	         -     Selects the first <li> element of every <ul>
$("[href]") 	         -     Selects all elements with an href attribute
$("a[target='_blank']") 	         -     Selects all <a> elements with a target attribute value equal to "_blank"
$("a[target!='_blank']") 	         -     Selects all <a> elements with a target attribute value not equal to "_blank"
$(":button") 	         -     Selects all <button> elements and <input> elements of type="button"
$("tr:even") 	         -     Selects all even <tr> elements
$("tr:odd") 	         -     Selects all odd <tr> elements
=========================
// https://www.w3schools.com/jquery/trysel.asp
$("h1")
$("h1, p")        ---   All h1 and all p elements
$(".intro, #Lastname")
$("p:first")
$("p:last")
$("tr:even")
$("tr:odd")
$("div > p")      ---   All direct p inside div
$("div p")        ---   All p inside div
$("ul + p")       ---   p after ul tag
$("ul ~ table")   ---   table siblings of ul (only tables after atleast one ul tag)
$("ul li:eq(0)")  ---   ui > li[0]
$("ul li:gt(0)")  ---   ui > li[1:]
$("ul li:lt(2)")  ---   ui > li[:2]
$(":header")      ---   h1-h6 tagged elements
$(":header:not(h1)")
$("div:has(p)")
$(":empty")
$(":parent")
$("p:hidden")
$("table:visible")
$("[id]")
$("[id=my-Address]")
$("p[id!=my-Address]")
$(":input")
$(":text")
$(":password")
$(":enabled")
$(":disabled")
$(":selected")
$(":checked")
