function nbr_le_plus_grand() {
    var nbr1; 
    var nbr2;
    nbr1 = Number(document.getElementById("my_1rst_Input").value);
    nbr2 = Number(document.getElementById("my_2nd_Input").value);

    if (nbr1 > nbr2)
    {
        console.log(nbr1);
    }
    else {
        if (nbr1==nbr2) {
            console.log("les deux nombres sont égaux");
        }
        else {
            console.log(nbr2);
        }
    }
}

function tri(){

    /* Récupérer les nombres à trier*/
    var nbr1; 
    var nbr2;
    var nbr3;
    nbr1 = Number(document.getElementById("my_1rst_Input").value);
    nbr2 = Number(document.getElementById("my_2nd_Input").value);
    nbr3 = Number(document.getElementById("my_3rd_Input").value);
    
    /*
    console.log("nombre 1 : " + nbr1);
    console.log("nombre 2 : " + nbr2);
    console.log("nombre 3 : " + nbr3);
    */

    /* Variables pour tri */
    var x; // nombre le plus grand
    var y; 
    var z; // nombre le plus petit

    if(nbr1>nbr2) {
        if(nbr1>nbr3) {
            x=nbr1;
            if(nbr2>nbr3) {
                y=nbr2;
                z=nbr3;
            }
        }
        else {
            x=nbr3;
            y=nbr1;
            z=nbr2;
        }
    }
    else {
        if(nbr2>nbr3) {
            x=nbr2;
            if(nbr3>nbr1) {
                y=nbr3;
                z=nbr1;
            }
            else {
                y=nbr1;
                z=nbr3;
            }
        }
        else {
            x=nbr3;
            y=nbr2;
            z=nbr1;
        }
    }
    
    alert("nombres triés par ordre croissant: "+ x + ", " + y + ", " + z);

}

function nbr_le_plus_grand_de_5(){
    /* Récupérer les nombres à utiliser*/
    var nbr1 = Number(document.getElementById("my_1rst_Input").value);
    var nbr2 = Number(document.getElementById("my_2nd_Input").value);
    var nbr3 = Number(document.getElementById("my_3rd_Input").value);
    var nbr4 = Number(document.getElementById("my_4rth_Input").value);
    var nbr5 = Number(document.getElementById("my_5th_Input").value);

    var x; // la plus grande

    // initialisation
    x=nbr1; 
    if(x<nbr2 || x<nbr3 || x<nbr4 || x<nbr5) {
        // nbr1 n'est pas le plus grand
        x=nbr2;
    }
    else {
        //end : nbr1 est le plus grand
    }

    if(x<nbr3 || x<nbr4 || x<nbr5) {
        // nbr2 n'est pas le plus grand
        x=nbr3;
    }
    else{
        //end : nbr2 est le plus grand
    }

    if(x<nbr4 || x<nbr5) {
        // nbr3 n'est pas le plus grand
        x=nbr4;
    }
    else{
        //end : nbr3 est le plus grand
    }

    if(x<nbr5) {
        // nbr4 n'est pas le plus grand
        x=nbr5;
    }
    else{
        //end : nbr4 est le plus grand
    }

    alert("Le nombre le plus grand est: "+ x);
}