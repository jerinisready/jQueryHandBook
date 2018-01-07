
$(selector).load(URL,data,callback);

// $.get(URL,callback);
$.get("demo_test.asp", function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
});

$.post("demo_test_post.asp", { name: "Donald Duck", city: "Duckburg"},
      function(data, status){ alert("Data: " + data + "\nStatus: " + status);});
