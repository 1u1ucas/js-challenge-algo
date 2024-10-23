// Mise à jour des Prix des Produits

// Objectif :
// Certains produits bénéficient d'une réduction de 20 %. Utilise la déstructuration et le spread operator pour mettre à jour les prix des produits en appliquant la réduction à certains d'entre eux sans modifier la liste originale.

// Instructions :
// Crée un tableau products qui contient des objets représentant chaque produit, avec les propriétés name et price.
// Utilise le spread operator pour copier chaque produit et appliquer une réduction de 20 % sur certains produits (ceux dont le nom contient le mot "Promo").
// Affiche la liste originale et la liste mise à jour.


const products = [
    { name: 'Produit A', price: 100 },
    { name: 'Produit Promo B', price: 150 },
    { name: 'Produit C', price: 200 },
    { name: 'Produit Promo D', price: 250 }
  ];
  
// Appliquer une réduction de 20 % sur les produits en promotion

  
console.log('Produits originaux :', products); // Liste originale
console.log('Produits mis à jour :', updatedProducts); // Liste avec réduction
  

// Résultat attendu :
// Produits originaux : [
//     { name: 'Produit A', price: 100 }, 
//     { name: 'Produit Promo B', price: 150 },
//     { name: 'Produit C', price: 200 },
//     { name: 'Produit Promo D', price: 250 }
//   ]
  
//   Produits mis à jour : [
//     { name: 'Produit A', price: 100 },
//     { name: 'Produit Promo B', price: 120 },
//     { name: 'Produit C', price: 200 },
//     { name: 'Produit Promo D', price: 200 }
//   ]