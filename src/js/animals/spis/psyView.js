app.controller('psySpisViewCtrl', function($rootScope){
    
    var myChoose=$rootScope.jsonId;
    
    
    function getValuesJson(){
        $.getJSON("../../json/pies.json", function(data){
            document.getElementById("firstPath").src = "../../img/animals/dogs/" + data.dogs[myChoose].ElementId + ".jpg";
            
            document.getElementById("firstRace").textContent = data.dogs[myChoose].Race;
            
            document.getElementById("firstDescription").textContent = data.dogs[myChoose].Description;
            
            document.getElementById("firstDescription2").textContent = data.dogs[myChoose].Description2;
            
            document.getElementById("firstDescription3").textContent = data.dogs[myChoose].Description3;
        });
    };
    
    document.getElementById("body").addEventListener("load", getValuesJson());
});