var  translatepirate = document.querySelector("#translateBtn");
var clearbtn = document.querySelector("#clearBtn");
var pirate = document.querySelector(".pirate");
var input = document.querySelector("#textInput");
var output = document.querySelector(".output");
var baseUrl = "https://api.funtranslations.com/translate/minion.json?text=";

function completeUrl(text){
    return baseUrl+text;
}

function errorHandle(error){
    pirate.style.display = "none";
if (error.code==429){
    alert("You crossed the hourly requests limit, please try after sometime.");
}
else{
    console.log("Server issues: ", error);
    alert("Something went wrong with our server, please try again after some time.")
}
}

translatepirate.addEventListener("click", function handleEvent(){
    fetch(completeUrl(input.value))
    .then(res => res.json())
    .then(translatedText => {
        output.textContent = translatedText.contents.translated;
    }).catch(errorHandle);
    
    pirate.style.display = "block";
});

clearbtn.addEventListener("click", function handleEvent(){
    output.textContent = "";
    input.value="";
    pirate.style.display = "none";

});