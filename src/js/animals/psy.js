app.controller('psyCtrl', function($scope){
    
    var animalsCount=30;
    
    var randValue1 = Math.floor((Math.random() * animalsCount));
    var randValue2 = Math.floor((Math.random() * animalsCount));
    
    
    function getValuesJson(){
        $.getJSON("../json/pies.json", function(data){
            document.getElementById("firstPath").src = "../img/animals/dogs/" + data.dogs[randValue1].ElementId + ".jpg";
            document.getElementById("secondPath").src = "../img/animals/dogs/" + data.dogs[randValue2].ElementId + ".jpg";
            
            document.getElementById("firstRace").textContent = data.dogs[randValue1].Race;
            document.getElementById("secondRace").textContent = data.dogs[randValue2].Race;
            
            document.getElementById("firstDescription").textContent = data.dogs[randValue1].Description;
            document.getElementById("secondDescription").textContent = data.dogs[randValue2].Description;
            
            document.getElementById("firstDescription2").textContent = data.dogs[randValue1].Description2;
            document.getElementById("secondDescription2").textContent = data.dogs[randValue2].Description2;
            
            document.getElementById("firstDescription3").textContent = data.dogs[randValue1].Description3;
            document.getElementById("secondDescription3").textContent = data.dogs[randValue2].Description3;
        });
    };
    
    function validate(){
        while(randValue1 == randValue2) randValue1 = Math.floor((Math.random() * (animalsCount-1)));
    };
    
    document.getElementById("body").addEventListener("load", validate());
    document.getElementById("body").addEventListener("load", getValuesJson());
});