app.controller('kotyCtrl', function($scope){
    
    var animalsCount=30;
    
    var randValue1 = Math.floor((Math.random() * animalsCount));
    var randValue2 = Math.floor((Math.random() * animalsCount));
    
    
    function getValuesJson(){
        $.getJSON("../json/kot.json", function(data){
            document.getElementById("firstPath").src = "../img/animals/cats/" + data.cats[randValue1].ElementId + ".jpg";
            document.getElementById("secondPath").src = "../img/animals/cats/" + data.cats[randValue2].ElementId + ".jpg";
            
            document.getElementById("firstRace").textContent = data.cats[randValue1].Race;
            document.getElementById("secondRace").textContent = data.cats[randValue2].Race;
            
            document.getElementById("firstDescription").textContent = data.cats[randValue1].Description;
            document.getElementById("secondDescription").textContent = data.cats[randValue2].Description;
            
            document.getElementById("firstDescription2").textContent = data.cats[randValue1].Description2;
            document.getElementById("secondDescription2").textContent = data.cats[randValue2].Description2;
        });
    };
    
    function validate(){
        while(randValue1 == randValue2) randValue1 = Math.floor((Math.random() * (animalsCount-1)));
    };
    
    document.getElementById("body").addEventListener("load", validate());
    document.getElementById("body").addEventListener("load", getValuesJson());
});