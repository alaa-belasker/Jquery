

//$(document).ready(function () {
 //   $("#but").click(function () {
   //     console.log("Hello World!");
   // });
//});


$(function () {
    $("#but", "body").click(function () {
        console.log("Hello World!");
    });
});

/*$(function () {
    $("#but", "body").click(function () {
        //$("#container").text("<p>Hello</p>");
      // $("#container").html("<p>Hello</p>");
      $("div#container").prepend("<h1>hello</h1>");
      $("div#container").append("<h1>bye</h1>");
    });
});

/*$(function () {
    $("#but", "body").click(function () {
        $("div p:nth-child(1)").prepend("<p>test</p>")
    });
});*/

// Utilisation de la méthode .attr qui permet de récupérer la valeur 
// de l'attribut passé en paramètre
//Affiche "blue"
$(function () {
   
        console.log($("p").attr("class"));

        
   
});

// Utilisation de la méthode .attr
// et de .each()
 //qui permet de récupérer toutes les  valeurs 
// de l'attribut passé en paramètre
//Affiche toutes les classes de p
$(function () {
    $("p").each(function (){
        console.log($(this).attr("class"));
    });
        
   
});

// Utilisation de la méthode .length qui permet 
//de déterminer le nombre   
// d'element sélectionnées' passé en paramètre
//Affiche 3
$(function () {
   
    console.log($("p").length);  

});

// Utilisation de la méthode .eq(i) qui permet 
//de choisir   
// l'element ayant l'indice passé en paramétre
// Affiche "blue"
$(function () {
   
   // console.log($("p").eq(0));  
   console.log($("p:eq(0)")); 

});

// Opérations
// p:lt(i) : parag < indice i
// p:gt(i) : parag > indice i
// p:even : parag d'indice pair et p:odd : parag
// d'indice impair
// p:first : premier parag et p:last : dernier parag
// input:text : on récupére les inputs de type text


// Utilisation de la méthode remoAttr(nomAttribut)
// Supprimant l'attribut passé en paramètre, ici "class"
// puis, de la méthode .attr(nomAttribut, nouvelle valeur)
// qui va permettre de modifier la valeur de l'attribut 
// passé en paramètre
$(function () {
   
  //$("p").eq(0).removeAttr("class");
  //$("p").eq(0).attr("class", "red");

  $("p").even().removeClass("blue").addClass("red");
 
 });


 // utilisation de la méthode val() qui nous permet 
 // de récupérer la valeur de l'attribut value 
 $(function () {
   
    $("#but", "body").click(function () {
   console.log($("#nom").val());
   });
  

 });
  // utilisation de la méthode val(nouvelleValuer) qui nous permet 
 // de remplacer la valeur de l'attribut value passée
 // en paramètre

 $(function () {
   
    $("#but", "body").click(function () {
   console.log($("#nom").val("Jhon wick"));
   });
  

 });

 // Utilisation de la méthode .css(nomPropriété)
 // qui nous permet de récupérer la valeur 
 // de la propriété CSS passée en paramètre

 $(function () {
   
   console.log($("p").eq(0).css("color"));
   });

    // Utilisation de la méthode .css(nomPropriété, nouvelleValeur)
 // qui nous permet de modifier la valeur 
 // de la propriété CSS passée en paramètre

 $(function () {
   
    console.log($("p").eq(0).css("color","green"));
    $("p").eq(0).css({"color":"green", "background-color" : "red"});
    });

    // Méthodes .xClass()
    // .addClass () : Ajoute une classe
    // .removeClass () : supprime une classe
    // .hasClass() : Teste l'existence d'une classe
    // .toggleClass() : retire ou ajoute une classe

   // En utilisant les methodes xClass, ecrire un code jQuery qui permet de
//permuter les couleurs des paragraphes suivants : (rouge -> bleu), (bleu ->
//vert) et (vert -> rouge).

$(function () {
   
    console.log($("#red").removeClass("red").addClass("blue"));
   
   console.log($("#blue").removeClass("blue").addClass("green"));
   
   console.log($("#green").removeClass("green").addClass("red"));
   
    
    });

    $(function () {
        $("#red").each(function () {
            $(this).removeClass("red").addClass("blue");
        });
    });
    $(function () {
        $("#blue").each(function () {
            $(this).removeClass("blue").addClass("green");
        });
    });
    $(function () {
        $("#green").each(function () {
            $(this).removeClass("green").addClass("red");
        });
    });

// utilisation de la méthode wrap(baliseHtml)
// nous permettant d'entourer les elements selectionnées
// ici les balises p par les balises passées en paramètres
// ici <div> <p>Bonjour</p> <p> Bobsoir </p> </div
    $(document).ready(function() {
        $("button").click(function () {
            $("p").wrapAll("<div></div>")
        })
    })