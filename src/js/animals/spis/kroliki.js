app.controller('krolikiSpisCtrl', function($scope){
    
    var animalsCount=14;
    var randValue = Math.floor((Math.random() * 6));
    var counter=0;
    
    function getValuesJson(){
        $.getJSON("../../json/krolik.json", function(data){
            for(var i=0; i<animalsCount; i++){
                if((randValue==0)&&(counter>3)){
                    setCol12(i);
                    counter=0;
                }
                else if((randValue==1)&&(counter>1)){
                    setCol6(i);
                    counter=0;
                }
                document.getElementById("path"+i).src = "../../img/animals/bunnys/" + data.bunnys[i].ElementId + ".jpg";
                document.getElementById("race"+i).textContent = data.bunnys[i].Race;
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
        $.getJSON("../../json/krolik.json", function(data){
            imgCount=data.bunnys[$scope.jsonId].MaxPhotos;
            if(imgCount>40) imgCount=40;
            for(var i=1; i<=imgCount; i++)
                {
                    document.getElementById("firstPath"+i).src = "../../img/animals/bunnys/" + data.bunnys[$scope.jsonId].ElementId + "/" + i + ".jpg";
                }
            
            document.getElementById("firstRace").textContent = data.bunnys[$scope.jsonId].Race;
            
            document.getElementById("firstDescription").textContent = data.bunnys[$scope.jsonId].Description;
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
});