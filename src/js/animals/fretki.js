app.controller('fretkiCtrl', function($scope){
    
    var animalsCount=8;
    
    var randValue1 = Math.floor((Math.random() * animalsCount));
    var randValue2 = Math.floor((Math.random() * animalsCount));
    
    
    function getValuesJson(){
        $.getJSON("../json/fretka.json", function(data){
            document.getElementById("firstPath").src = "../img/animals/ferret/" + data.ferret[randValue1].ElementId + ".jpg";
            document.getElementById("secondPath").src = "../img/animals/ferret/" + data.ferret[randValue2].ElementId + ".jpg";
            
            document.getElementById("firstRace").textContent = data.ferret[randValue1].Race;
            document.getElementById("secondRace").textContent = data.ferret[randValue2].Race;
            
            document.getElementById("firstDescription").textContent = data.ferret[randValue1].Description;
            document.getElementById("secondDescription").textContent = data.ferret[randValue2].Description;
        });
    };
    
    function validate(){
        while(randValue1 == randValue2) randValue1 = Math.floor((Math.random() * (animalsCount-1)));
    };
    
    document.getElementById("body").addEventListener("load", validate());
    document.getElementById("body").addEventListener("load", getValuesJson());
});