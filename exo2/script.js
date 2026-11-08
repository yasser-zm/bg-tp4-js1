"use strict";

// Fonction 1 : Tableau d'etudiants
//on a utiliser le mot cle let pour declarer la variable etudint a la place de var comme le montre le cour slide52

function f1() {
    let etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
// on a utiliser la boucle forEach d'apres le slide45 pour parcourir chaque element du tableau 
    etudiants.forEach(function(etudiant) {
        console.log(etudiant);
    });
}

// Fonction 2 : Objet etudiant
// a l'interieure de la fonction on a fait la declaration de l'objet comme le montre le cour slide numero 40
//on a utiliser le mot cle let pour declarer la variable etudint a la place de var comme le montre le cour slide52
function f2() {
    let etudiant = {
        nom: "John",
        prenom: "DOE",
        age: 30
    };

    console.log(etudiant);
}

// Fonction 3 : Tableau d'objets etudiants
// Cette fonction cree un tableau d'objets etudiants
// puis affiche le nom, le prenom et l'age de chaque etudiant dans la console.
function f3() {
    let etudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];

    etudiants.forEach(function(etudiant) {
        console.log(etudiant.nom + "-" + etudiant.prenom + "-" + etudiant.age);
    });
} 