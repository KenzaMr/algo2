 // Déclarer 3 variables avec notre nom, prénom et âge
 // Afficher un console le message "Bonjour, je m'appelle NOM PRENOM et j'ai AGE ans"
 // '', "", ``
 let nom = "Mroudjae"
 let prenom = "Kenza"
 let age = 23

 console.log("Bonjour, je m'appelle " + nom  + " " + prenom + " et j'ai " + age + " ans" )
/*----------------------------Correction 
 Ajouter une autre variable "let message"
 1) let message= "Bonjour je m'appelle" + nom + " " + prenom + "et j'ai " + age + " ans"
console.log(message)
 2) let message= 'Bonjour, je m\'appelle' + nom + " "+ prenom + 'et j\'ai ' + age + 'ans'
 console.log (message)
 3) let message = `Bonjour je m'apelle ${nom}  ${prenom} et j'ai $ {age ans} ans `
 consolo.log (message)
 ----------------------------------------*/
// Ecrire une fonction qui retourne la chaine de caractére hello, world ! et l'afficher en console 
function bonjourmonde() {
    console.log("Hello, Word !")
    return "Hello, Word !"
}
bonjourmonde()
/*----------------------------Correction
function hello(){
    let message = "hello, Word!"
    return message
}
let messages = hello()
console.log(messages)
-----------------------------------------*/

// Ecrire une fonction qui prend 2 nombre en paramétre et qui retourne l'addition de ces 2 nombres
// Appeler la fonction avec les nombres 3456 et 8978789
// Et vous affichez en console le résulat 
function nombre(x , y ){
    let calcul= x + y
    return calcul 
}
let calcul = nombre (3456 , 8978789)
console.log(calcul)
/*-------------------------------Correction 
function add(x,y){
    return x+y
}
let resultat = add(458, 454)
console.log(resultat);
-------------------------------------------*/

//Une boucle qui affiche 5 fois "coucou"

for(let i=0; i<5; i= i+1){
    console.log("Coucou")
}

// Une boucle qui affiche les nombres de 0 à 10

for(let i=0; i<=10; i=i+1){
    console.log(i)
}
// Déclarer un tableau de 6 fruits 

/*let fruits= ["Pomme", "Mangue", "Banane", "Poire", "Grenade", "Pêche"]
console.log(fruits) */

// Aficher le premier et le dernier fruits 

let fruits= ["Pomme", "Mangue", "Banane", "Poire", "Grenade", "Pêche"]
console.log(fruits [0], fruits [5])

// A l'aide d'une boucle, afficher tous les fruits 

for(let i=0; i< fruits.length; i++){
    //console.log(fruits[i])
}

// Nouvelle boucle qui afficher aussi tous les fruits 
// for(let fruit of fruits){
//     console.log(fruit);
// }
    // Vérifier si notre tableau contient la banane 
        //si oui on retourne true sinon recupére  false dans une variable
let isBanane= false 
for(let fruit of fruits){
    if(fruit === "Banane"){
        isBanane = true 
    }
}
console.log(isBanane)

//Formule qui regroupe pleins d'option en 1
let clio = {
    model: "clio 5",
    option: ["siège chauffant", "airbag"],
    description: function (){
        console.log("Je suis une clio 5 et j'ai..");
    }
}
console.log(clio.option[0]);
let audi = {
    model: "audi rs3",
    option: ["siège chauffant", "airbag"],
    description: function (){
        console.log("Je suis une clio 5 et j'ai..");
    }
}
console.log(audi.option[1]);

// Créer un objet sanGoku
// nom: san 
// prenom: goku
// âge: 45
// identify() : Je suis sangoku
// enfant: [gohan, goten]

let sanGoku = {
    nom: "san",
    prenom: "goku",
    age: 45,
    enfant: ["gohan", "goten"],
    identify : function (){
        console.log("Je suis sangoku")
    }
    }
    console.log(sanGoku.enfant[1])