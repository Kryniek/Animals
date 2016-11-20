app.controller('psySpisCtrl', function($rootScope){
    
    var animalsCount=30;
    var randValue = Math.floor((Math.random() * 6));
    var counter=0;
    
    function getValuesJson(){
        $.getJSON("../../json/pies.json", function(data){
            for(var i=0; i<animalsCount; i++){
                if((randValue==0)&&(counter>3)){
                    setCol12(i);
                    counter=0;
                }
                else if((randValue==1)&&(counter>1)){
                    setCol6(i);
                    counter=0;
                }
                document.getElementById("path"+i).src = "../../img/animals/dogs/" + data.dogs[i].ElementId + ".jpg";
                document.getElementById("race"+i).textContent = data.dogs[i].Race;
                randValue = Math.floor((Math.random() * 6));
                counter++;
            }
        });
    };
    
    function setCol12(i){
        document.getElementById("col"+i).className="col-sm-12 col-md-12";
    };
    
    function setCol6(i){
        document.getElementById("col"+i).className="col-sm-6 col-md-6";
    };
    
    document.getElementById("body").addEventListener("load", getValuesJson());
    
    document.getElementById("col0").onclick = function(){
        $rootScope.jsonId=0;
        alert($rootScope.jsonId);
        alert(someShit);
    };
    
    document.getElementById("col1").onclick = function(){
        $rootScope.jsonId=1;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col2").onclick = function(){
        $rootScope.jsonId=2;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col3").onclick = function(){
        $rootScope.jsonId=3;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col4").onclick = function(){
        $rootScope.jsonId=4;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col5").onclick = function(){
        $rootScope.jsonId=5;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col6").onclick = function(){
        $rootScope.jsonId=6;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col7").onclick = function(){
        $rootScope.jsonId=7;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col8").onclick = function(){
        $rootScope.jsonId=8;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col9").onclick = function(){
        $rootScope.jsonId=9;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col10").onclick = function(){
        $rootScope.jsonId=10;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col11").onclick = function(){
        $rootScope.jsonId=11;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col12").onclick = function(){
        $rootScope.jsonId=12;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col13").onclick = function(){
        $rootScope.jsonId=13;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col14").onclick = function(){
        $rootScope.jsonId=14;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col15").onclick = function(){
        $rootScope.jsonId=15;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col16").onclick = function(){
        $rootScope.jsonId=16;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col17").onclick = function(){
        $rootScope.jsonId=17;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col18").onclick = function(){
        $rootScope.jsonId=18;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col19").onclick = function(){
        $rootScope.jsonId=19;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col20").onclick = function(){
        $rootScope.jsonId=20;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col21").onclick = function(){
        $rootScope.jsonId=21;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col22").onclick = function(){
        $rootScope.jsonId=22;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col23").onclick = function(){
        $rootScope.jsonId=23;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col24").onclick = function(){
        $rootScope.jsonId=24;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col25").onclick = function(){
        $rootScope.jsonId=25;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col26").onclick = function(){
        $rootScope.jsonId=26;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col27").onclick = function(){
        $rootScope.jsonId=27;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col28").onclick = function(){
        $rootScope.jsonId=28;
        alert($rootScope.jsonId);
    };
    
    document.getElementById("col29").onclick = function(){
        $rootScope.jsonId=29;
        alert($rootScope.jsonId);
    };
});