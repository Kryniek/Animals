app.controller('psySpisCtrl', function($scope){
    
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
    
    function showMainView(){
        $scope.showMainView=true;
        $scope.showSecondView=false;
    };
    
    function showSecondView(){
        $scope.showMainView=false;
        $scope.showSecondView=true;
    };
    
    function getJSONSecondView(){
        var imgCount=0;
        $.getJSON("../../json/pies.json", function(data){
            imgCount=data.dogs[$scope.jsonId].MaxPhotos;
            for(var i=1; i<=imgCount; i++)
                {
                    document.getElementById("firstPath"+i).src = "../../img/animals/dogs/" + data.dogs[$scope.jsonId].ElementId + "/" + i + ".jpg";
                }
            
            document.getElementById("firstRace").textContent = data.dogs[$scope.jsonId].Race;
            
            document.getElementById("firstDescription").textContent = data.dogs[$scope.jsonId].Description;
            
            document.getElementById("firstDescription2").textContent = data.dogs[$scope.jsonId].Description2;
            
            document.getElementById("firstDescription3").textContent = data.dogs[$scope.jsonId].Description3;
        });
    };
    
    document.getElementById("body").addEventListener("load", getValuesJson());
    document.getElementById("body").addEventListener("load", showMainView());
    
    document.getElementById("col0").onclick = function(){
        $scope.jsonId=0;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col1").onclick = function(){
        $scope.jsonId=1;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col2").onclick = function(){
        $scope.jsonId=2;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col3").onclick = function(){
        $scope.jsonId=3;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col4").onclick = function(){
        $scope.jsonId=4;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col5").onclick = function(){
        $scope.jsonId=5;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col6").onclick = function(){
        $scope.jsonId=6;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col7").onclick = function(){
        $scope.jsonId=7;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col8").onclick = function(){
        $scope.jsonId=8;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col9").onclick = function(){
        $scope.jsonId=9;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col10").onclick = function(){
        $scope.jsonId=10;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col11").onclick = function(){
        $scope.jsonId=11;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col12").onclick = function(){
        $scope.jsonId=12;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col13").onclick = function(){
        $scope.jsonId=13;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col14").onclick = function(){
        $scope.jsonId=14;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col15").onclick = function(){
        $scope.jsonId=15;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col16").onclick = function(){
        $scope.jsonId=16;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col17").onclick = function(){
        $scope.jsonId=17;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col18").onclick = function(){
        $scope.jsonId=18;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col19").onclick = function(){
        $scope.jsonId=19;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col20").onclick = function(){
        $scope.jsonId=20;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col21").onclick = function(){
        $scope.jsonId=21;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col22").onclick = function(){
        $scope.jsonId=22;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col23").onclick = function(){
        $scope.jsonId=23;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col24").onclick = function(){
        $scope.jsonId=24;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col25").onclick = function(){
        $scope.jsonId=25;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col26").onclick = function(){
        $scope.jsonId=26;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col27").onclick = function(){
        $scope.jsonId=27;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col28").onclick = function(){
        $scope.jsonId=28;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
    
    document.getElementById("col29").onclick = function(){
        $scope.jsonId=29;
        $scope.showMainView=false;
        $scope.showSecondView=true;
        getJSONSecondView();
    };
});