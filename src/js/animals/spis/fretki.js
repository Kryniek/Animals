app.controller('fretkiSpisCtrl', function($scope){
    
    var animalsCount=8;
    var randValue = Math.floor((Math.random() * 6));
    var counter=0;
    
    function getValuesJson(){
        $.getJSON("../../json/fretka.json", function(data){
            for(var i=0; i<animalsCount; i++){
                if((randValue==0)&&(counter>3)){
                    setCol12(i);
                    counter=0;
                }
                else if((randValue==1)&&(counter>1)){
                    setCol6(i);
                    counter=0;
                }
                document.getElementById("path"+i).src = "../../img/animals/ferret/" + data.ferret[i].ElementId + ".jpg";
                document.getElementById("race"+i).textContent = data.ferret[i].Race;
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
        $.getJSON("../../json/fretka.json", function(data){
            imgCount=data.ferret[$scope.jsonId].MaxPhotos;
            if(imgCount>40) imgCount=40;
            for(var i=1; i<=imgCount; i++)
                {
                    document.getElementById("firstPath"+i).src = "../../img/animals/ferret/" + data.ferret[$scope.jsonId].ElementId + "/" + i + ".jpg";
                }
            
            document.getElementById("firstRace").textContent = data.ferret[$scope.jsonId].Race;
            
            document.getElementById("firstDescription").textContent = data.ferret[$scope.jsonId].Description;
            
            document.getElementById("firstDescription2").textContent = data.ferret[$scope.jsonId].Description2;
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
});