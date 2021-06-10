function settings(){
    console.log("l'engrenage a été clickéd");
    /*window.open("about:preferences#home");*/
}

function search(){
    let urlbase ="https://www.google.com/search?client=firefox-b-d&q=";
    var search = document.getElementById("newtab-search-text").value;
    var url = urlbase+search;

    window.open(url, "_self");
}

function search_key(event){
    if (event.keyCode === 13){
        search();
    }
}
