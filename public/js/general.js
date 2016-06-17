var xmlhttp = new XMLHttpRequest();
var url = "/data/nav.json";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        NavigationModule.init(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();


var NavigationModule = (function () {

  var createNav = function (arr) {
    var itemsArray = "";
    for (i = 0; i < arr.items.length; i++) { 
    itemsArray += "<li><a href='" + arr.items[i].url + "'>" + arr.items[i].label +"</a></li>";
    };
    var navContent = document.getElementById("topNav");
    navContent = navContent.getElementsByTagName("ul")[0];
    navContent.innerHTML = itemsArray;
  };

  var init = function (arr) {
  	createNav(arr);
  };
  
  return {
    init: init
  };

})();
