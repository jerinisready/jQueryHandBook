DOM STRUCTURE
> document - Full Html as a single document. CRUD it
> elements - Any subnode in a document
> style    - Reguarding style to an element/document
> events   - Any actions / triggers related to document.
> attributes    -   Reguarging Get / Set of any attributes of an element


------------------------------------------
# document
// https://www.w3schools.com/jsref/dom_obj_document.asp
document.addEventListener()
document.createAttribute()
document.createElement()
document.createTextNode()



------------------------------------------
# Elements
// https://www.w3schools.com/jsref/dom_obj_all.asp
element.innerHTML = "My Javascript"
element.addEventListener()
element.childNodes
element.click()
element.getElementsByClassName()
element.getElementsByTagName()
element.hasAttribute()
element.innerHTML
element.setAttribute()


------------------------------------------
# Style
// https://www.w3schools.com/jsref/dom_obj_style.asp
object.style.background = ""
document.getElementById("myH1").style.color = "red";

------------------------------------------
# Events in Javascript
// https://www.w3schools.com/jsref/dom_obj_event.asp
var x = document.getElementById("myBtn");
x.addEventListener("click", myFunction);
    onclick | ondblclick | onmouseover | onkeypress
    onerror | onpageshow | onscroll | oninput
    onsubmit | ondragover | oncopy | onpaste | ononline | onoffline ...

  Methods
    preventDefault()
    stopImmediatePropagation()
    stopPropagation()

  Keyboard Special Events
    <body onmousedown="isKeyPressed(event)">
    ctrlKey | altKey | shiftKey | metaKey
    <script>
    function isKeyPressed(event) {
        if (event.ctrlKey) {
            alert("The CTRL key was pressed!");
        } else {
            alert("The CTRL key was NOT pressed!");
        }
    }
    </script>
------------------------------------------

# attributes
// https://www.w3schools.com/jsref/dom_obj_attributes.asp
<button onclick="javascript:void(0);">
var btn = document.getElementsByTagName("BUTTON")[0];
btn.attributes.getNamedItem("onclick").value;
attr.name
attr.value
attr.specified
------------------------------------------



BOM STRUCTURE
window
window.location
window.history
window.screen
window.navigator
