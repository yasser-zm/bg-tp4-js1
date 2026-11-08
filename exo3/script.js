"use strict";
// Fonction B : verifier si l'etudiant est admis ou non admis(ajourne)
function B(note) {
    // Retourner true si la note est superieure ou egale a 10
    return note >= 10;
}

// Fonction A : parcourir les etudiants et afficher les resultats
function A() {

    // Declaration du tableau Student
    let Students = [
        [1000, "JOHN", "DOE", 14, 5],
        [2000, "BOB", "CARLTON", 7, 1],
        [3000, "RAYANE", "SMITH", 13, 3]
    ];

    // Parcourir le tableau avec la boucle for d'apres le slide 45 sur les boucles
    for (let i = 0; i < Students.length; i++) {

        // Recuperer le matricule et la note
        let matricule = Students[i][0];
        let note = Students[i][3];

        // Appeler B pour verifier la note et pouvoir determiner la situation de l'etudiant admis ou ajourne
        if (B(note)) {
            console.log(matricule + ": ADMIS");
        } else {
            console.log(matricule + ": AJOURNE");
        }
    }}