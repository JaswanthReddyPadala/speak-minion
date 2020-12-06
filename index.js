var  translateminion = document.querySelector("#translateBtn");
var clearbtn = document.querySelector("#clearBtn");
var minion = document.querySelector(".mini");
var input = document.querySelector("#textInput");
var output = document.querySelector(".output");
var baseUrl = "https://api.funtranslations.com/translate/minion.json?text=";

function completeUrl(text){
    return baseUrl+text;
}

function errorHandle(error){
    minion.style.display = "none";
if (error.code==429){
    alert("You crossed the hourly requests limit, please try after sometime.");
}
else{
    console.log("Server issues: ", error);
    alert("Something went wrong with our server, please try again after some time.")
}
}

translateminion.addEventListener("click", function handleEvent(){
    fetch(completeUrl(input.value))
    .then(res => res.json())
    .then(translatedText => {
        output.textContent = translatedText.contents.translated;
    }).catch(errorHandle);
    
    minion.style.display = "block";
});

clearbtn.addEventListener("click", function handleEvent(){
    output.textContent = "";
    input.value="";
    minion.style.display = "none";

});