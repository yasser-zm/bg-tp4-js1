"use strict";
 

// Un produit c'est un objet avec 3 propriétés : nom, prix et quantite (slide 40)
// const car on ne change pas la variable après (slide 52)
const monProduit = { nom: "Clavier", prix: 3500, quantite: 10 };
 
// On accède aux propriétés avec le point (slide 40)
// Valeur du stock = prix * quantité, le * est la multiplication (slide 42)
const valeurStockProduit = monProduit.prix * monProduit.quantite;
 
// console.log avec plusieurs valeurs séparées par des virgules (affichage multiple, slide 38)
console.log("Valeur du stock de", monProduit.nom, ":", valeurStockProduit, "DA");
 






// Le catalogue c'est un tableau d'objets (slide 41), un objet par produit (slide 40)

const catalogue = [
    { nom: "Clavier", prix: 3500, quantite: 10 },
    { nom: "Souris", prix: 1500, quantite: 25 },
    { nom: "Écran", prix: 28000, quantite: 4 },
    { nom: "Casque", prix: 6000, quantite: 8 },
    { nom: "Webcam", prix: 4500, quantite: 6 }
];
 
// Prix moyen = somme des prix / nombre de produits
// reduce fait la somme, acc c'est l'accumulateur qui démarre à 0 (slide 39)
// (acc, p) => ... c'est une fonction fléchée (slide 47)
// catalogue.length donne le nombre de produits (slide 45) et / c'est la division (slide 42)
const prixMoyen = catalogue.reduce((acc, p) => acc + p.prix, 0) / catalogue.length;
console.log("Prix moyen du catalogue :", prixMoyen, "DA");
 

// le > est un opérateur de comparaison (slide 42)
const produitsChers = catalogue.filter(p => p.prix > prixMoyen);
 
// forEach pour afficher les produits gardés un par un (slide 45)
console.log("Produits dont le prix dépasse le prix moyen :");
produitsChers.forEach(p => console.log(p.nom, ":", p.prix, "DA"));
 








// Nombre total d'articles = somme de toutes les quantités, avec reduce (slide 39)
const totalArticles = catalogue.reduce((acc, p) => acc + p.quantite, 0);
 
// Valeur globale du stock = somme de (prix * quantité) de chaque produit, avec reduce (slide 39)
const valeurGlobale = catalogue.reduce((acc, p) => acc + p.prix * p.quantite, 0);
 
console.log("Nombre total d'articles :", totalArticles);
console.log("Valeur globale du stock :", valeurGlobale, "DA");
 






// Fonction avec un paramètre et un return (slide 46)
// Elle calcule la valeur du stock du produit qu'on lui donne
function valeurStock(produit) {
    return produit.prix * produit.quantite;
}
 
//  on accède au tableau avec l'indice (slide 39)
console.log("Stock du Clavier :", valeurStock(catalogue[0]), "DA");
console.log("Stock de l'Écran :", valeurStock(catalogue[2]), "DA");
 
// Test sur tous les produits du catalogue avec forEach (slide 45)
catalogue.forEach(p => console.log("Stock de", p.nom, ":", valeurStock(p), "DA"));
 






// Fonction qui reçoit une liste et un callback, c'est à dire une fonction passée en paramètre (slide 48)
// Elle applique ce callback à chaque produit de la liste
function appliquerTraitement(liste, callback) {
  // boucle for..of pour parcourir la liste (slide 45)
    for (const produit of liste) {
    // on appelle le callback avec le produit courant (slide 48)
   callback(produit);
    }
}
// Traitement 1 : afficher les noms (le callback est une fonction fléchée, slides 47 et 48)
appliquerTraitement(catalogue, p => console.log("Nom :", p.nom));
 
// Traitement 2 : afficher les prix
appliquerTraitement(catalogue, p => console.log("Prix :", p.prix, "DA"));
 