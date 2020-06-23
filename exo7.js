/*Question 1*/
var tpe = 13;
var seuil = 100;

function bouillir(){
    if(tpe>seuil) {
        document.write("l'eau bout");
    }
    else{
        document.write("l'eau ne bout pas");
    }
}


function compter100_for(){
    for(var i=1; i<=100; i++){
        console.log(i);
    }
}

//compter100_for();

function compter100_while(){
    var i=1; 
    while(i<=100){
        console.log(i);
        i++;
    }
}
//compter100_while();

/*Question 2*/

function somme(tab){
    var somme=0; 
    for (var i=0; i<tab.length;i++){
        somme+=tab[i];
    }
    return somme;
}

/*var tab1=[2, 3, 5];
somme(tab1); */

/*Question 3*/
function Pair_Impair(){
    for(var i=0; i<=15; i++){
        if(i%2 == 0){
            document.write(i + " est pair" +"<br>");
        }
        else {
            document.write(i + " est impair" +"<br>");
        }
    }
}

/*Question 4*/
var tab_complet = [["David", 80], ["Vinoth", 77], ["Divya", 88], ["Ishitha", 95], ["Thomas", 68]];
/*tab_complet[i][1] permet d'accéder à la note de chaque élève (et donc de calculer la moyenne etc.)*/

var tab_notes=[["F", 60],["D", 70], ["C", 80], ["B", 90], ["A", 100]];
function return_grade(){
    var somme =0; 
    for (var i=0; i<tab_complet.length;i++){
        somme+=tab_complet[i][1];
    }
    var moyenne= somme/tab_complet.length;
    //console.log(moyenne);
    
    var j =0;
    while(moyenne > tab_notes[j][1]){
        j++;
    }
    alert("La note moyenne de la classe est : "+ tab_notes[j][0]);
}


/*Question 5*/
var tab_tirage = new Array();

function Ajouter_Nom(){
    var nom = document.getElementById("nom").value;
    tab_tirage.push(nom);
    console.log(tab_tirage);
}

/* renvoie le nom tiré au sort */
function Tirage_Sort(){
    if(tab_tirage.length > 0){
        var i = Math.floor(Math.random() * tab_tirage.length);
        alert("Le gagnant est : "+tab_tirage[i]);
    }
    else{
        alert("Veuillez ajouter des noms");
    }
}
