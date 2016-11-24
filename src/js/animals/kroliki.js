app.controller('krolikiCtrl', function($scope){
    
    var animalsCount=14;
    
    var randValue1 = Math.floor((Math.random() * animalsCount));
    var randValue2 = Math.floor((Math.random() * animalsCount));
    
    
    function getValuesJson(){
        $.getJSON("../json/krolik.json", function(data){
            document.getElementById("firstPath").src = "../img/animals/bunnys/" + data.bunnys[randValue1].ElementId + ".jpg";
            document.getElementById("secondPath").src = "../img/animals/bunnys/" + data.bunnys[randValue2].ElementId + ".jpg";
            
            document.getElementById("firstRace").textContent = data.bunnys[randValue1].Race;
            document.getElementById("secondRace").textContent = data.bunnys[randValue2].Race;
            
            document.getElementById("firstDescription").textContent = data.bunnys[randValue1].Description;
            document.getElementById("secondDescription").textContent = data.bunnys[randValue2].Description;
        });
    };
    
    function validate(){
        while(randValue1 == randValue2) randValue1 = Math.floor((Math.random() * (animalsCount-1)));
    };
    
    document.getElementById("body").addEventListener("load", validate());
    document.getElementById("body").addEventListener("load", getValuesJson());
});