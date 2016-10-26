//deklaracja kontrolera
//app.controller('psyCtrl', function($scope){
    
    var randValue1 = Math.floor((Math.random() * 5));
    var randValue2 = Math.floor((Math.random() * 5));
    
    
    function getValuesJson(){
        $.getJSON("../json/pies.json?callback=?", function(data){
            data.dogs[0].Likes = 50;
            document.getElementById("firstPath").src = "../img/animals/dogs/" + data.dogs[randValue1].ElementId + ".jpg";
            document.getElementById("secondPath").src = "../img/animals/dogs/" + data.dogs[randValue2].ElementId + ".jpg";
            document.getElementById("firstRace").textContent = data.dogs[randValue1].Race;
            document.getElementById("secondRace").textContent = data.dogs[randValue2].Race;
            document.getElementById("firstDescription").textContent = data.dogs[randValue1].Description;
            document.getElementById("secondDescription").textContent = data.dogs[randValue2].Description;
        });
    };
    
    function validate(){
        while(randValue1 == randValue2) randValue1 = Math.floor((Math.random() * 4));
    };
    
    function setValuesJSON(){
        /*$.getJSON("/src/json/pies.json", function(data){
            console.log(data);
        });*/
    };
    
    document.getElementById("body").addEventListener("load", validate());
    document.getElementById("body").addEventListener("load", getValuesJson());
    document.getElementById("firstImg").addEventListener("click", setValuesJSON());
//});