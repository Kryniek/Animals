//deklaracja kontrolera
app.controller('appCtrl', function($scope){
    
    var animalTypeCount = 4;
    var randAnimalCount = 0;
    
    var animalsCount = 0;
    var rand = 0;
    
    var imgName = "";
    var jsonName = "";

    function animalsTypeCheckMaxCount(){
        
        randAnimalCount = Math.floor((Math.random() * animalTypeCount)+1);
        
        if(randAnimalCount == 1){
            animalsCount = 40;
            imgName="dogs";
            jsonName="pies.json";
        }
        else if(randAnimalCount == 2){
            animalsCount = 30;
            imgName="cats";
            jsonName="kot.json";
        }
        else if(randAnimalCount == 3){
            animalsCount = 8;
            imgName="ferret";
            jsonName="fretka.json";
        }
        else if(randAnimalCount == 4){
            animalsCount = 14;
            imgName="bunnys";
            jsonName="krolik.json";
        }
        
        rand = Math.floor((Math.random() * animalsCount)+1);
        getIMGs();
    };
    
    function getIMGs(){
        $.getJSON("src/json/"+jsonName, function(data){
            var randMaxCount=0;
            var content;
            if(jsonName=="pies.json"){
                randMaxCount = Math.floor((Math.random() * data.dogs[rand-1].MaxPhotos)+1);
                content=data.dogs[rand-1].Race;
                document.getElementById("randomLabel").textContent=content;
            } else if(jsonName=="kot.json"){
                randMaxCount = Math.floor((Math.random() * data.cats[rand-1].MaxPhotos)+1);
                content=data.cats[rand-1].Race;
                document.getElementById("randomLabel").textContent=content;
            } else if(jsonName=="fretka.json"){
                randMaxCount = Math.floor((Math.random() * data.ferret[rand-1].MaxPhotos)+1);
                content=data.ferret[rand-1].Race;
                document.getElementById("randomLabel").textContent=content;
            } else if(jsonName=="krolik.json"){
                randMaxCount = Math.floor((Math.random() * data.bunnys[rand-1].MaxPhotos)+1);
                content=data.bunnys[rand-1].Race;
                document.getElementById("randomLabel").textContent=content;
            }
            document.getElementById("randomImg").src = "src/img/animals/" + imgName  + "/" + rand +"/" + randMaxCount + ".jpg";
        });
    };
    
    document.getElementById("randImg").addEventListener("click", animalsTypeCheckMaxCount);
    
});