var jsonData = "";
function openJsonFile(){
    var file="./Projet.json";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                jsonData = JSON.parse(allText);
                setUp();

            }
        }
    }
    rawFile.send(null);
}
