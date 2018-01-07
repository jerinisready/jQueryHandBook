JS can 2 two things,
        1) CRUD anything in HTML DOM
        2) Communicate with External World!
------------------------------------------

Functions
  function name(parameter1, parameter2, parameter3, ...) { code to be executed  }
  name(parameter1, parameter2, parameter3, ...);
  sum =   function (x,y) {
              return x+y;
          };

------------------------------------------
Variables Datatypes Objects and  typeof
  var x;      |
  Number()    |   456 , 46864, 4.025, 0.0000056
  String()    |   "Text"  ,  'String'
  null        |   NaN
  undefined   |
  function    |   function f(a,b) {return a+b;}
  Array()     |   [
              |    0,
              |    "hello",
              |    false,
              |    (1>0),
              |    [y, x],
              |    {'key1':'value', 'key2': 'value2'},
              |    function(x){return x*x;}
              |  ]
  Object()    |   {
              |    'key1':'value',
              |    'key2': 55,
              |    'isthere': true,
              |    'marks':[],
              |    'fun': function(x){return x*x;}
              |  }
  Boolean()   |   true , false
------------------------------------------
  Objects
  var x = {
    'firstName'   : 	'John',
    'lastName'    : 	'Doe',
    'age'         : 	50,
    'eyeColor'    : 	'blue',
    'fullName'    : 	function() {return this.firstName + " " + this.lastName;}
  }

  // called by :::
  //  x.lastName
  //  x['eyeColor']
  // Accessing Objects : x.fullName()

------------------------------------------
Global and Local Variables
var x = 10
function(y){
  var z = 20;
  return x * y + z;
}
// using z will through error here

------------------------------------------
Conditions  and Switches
    if(hour < 12){
      alert('Good Morning');
    } elseif( hour < 18){
      alert('Good Evening');
    } else{
      alert('Good Night');
    }

  var ch = 25
  switch(ch) {
      case "hello":
          console.log("Adress Selected");
          break;
      case 25:
          console.log("Phone Number Selected");
          break;
      default:
        console.log("Enter Valid input");
  }
------------------------------------------

Loops
4 types of Loops
    1)  for(initialiation; condition; updation){ Loop }
    2)  for (item in items) { Loop }
    3)  while(condition) { Loop }
    4)  do { Loop } while(condition);

------------------------------------------
String and String Handling Functions
// https://www.w3schools.com/jsref/jsref_obj_string.asp
charAt() | concat() | endsWith() | includes() | indexOf() | match() | replace()
search() | split() | slice() |  toUpperCase() | trim()  ...

String Style Modification Functions
anchor()  |  bold() | fontsize() | italics() | small() | sub() ...

------------------------------------------
Number and Number Handling Functions
Constants :: NaN | MAX_VALUE | MIN_VALUE | POSITIVE_INFINITY | NEGATIVE_INFINITY
isFinite() | isInteger() | isNaN() | toFixed(x) | toString() |  valueOf() ...

Array Handling Functions
concat() | every() | find() | forEach() | isArray() | join() | map() ...
// https://www.w3schools.com/jsref/jsref_obj_array.asp

------------------------------------------
Tokens
    break
    continue
    debugger
    do ... while
    for
    function
    if ... else
    return
    switch ... cases
    try ... catch
    var
------------------------------------------
