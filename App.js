

    //onKeyPress="if (event.keyCode == 13)


    let display = undefined


    function searchJoke() {

    let maSearch = document.getElementById("search_1").value;
    let method = "GET"
    let url = "https://icanhazdadjoke.com/search" // url pour la recherche


    // construction des paramètres
    let search = maSearch
    search = encodeURIComponent(search)
    let params = "?term=" + search + "&limit=20&page=1"
    let request = url + params

    console.log("vous avez saisi "+maSearch) //affichage du message saisi dans le console

    // exécution de la requête
    httpRequest.open(method, request)
    httpRequest.setRequestHeader('Accept', 'application/json');
    httpRequest.send()


}
    let tableBlague= "";
    let httpRequest = new XMLHttpRequest()
    httpRequest.responseType = "json"
    httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
    let results = httpRequest.response.results // la listes des blagues reçues
    if(results.length > 0){
    tableBlague = `
                     <tr>
                     ${results[0].joke}
                    </tr>
                    `// affichage de la 1ère blague
    console.log(results[0].joke) //affichage de la console
}else{
    //display.innerHTML = " "
    tableBlague =" "
}

} else {
    alert('ERREUR avec la requête.');
}
}
    document.getElementById('joke-05').innerHTML=tableBlague;


}



