// Calculer le prix au poids
// Objectif :
// Tu disposes d'une liste de produits, chacun ayant un prix total et un poids en kilogrammes. Utilise les notions de tableaux, déstructuration, et méthodes de tableaux pour calculer le prix au kilo de chaque produit et ajouter cette information à l'objet produit. Ensuite, affiche la liste des produits avec leurs prix au kilo.

// Instructions :
// Crée un tableau products contenant des objets. Chaque objet représente un produit avec les propriétés name, price (prix total en euros) et weight (poids en kg).
// Utilise la méthode map() pour ajouter une nouvelle propriété pricePerKg à chaque produit. Cette propriété représente le prix par kilo, calculé en divisant le prix par le poids.
// Une fois les prix au kilo calculés, trie la liste des produits par ordre croissant de prix au kilo.
// Affiche la liste des produits avec le nom, le prix total, le poids et le prix au kilo.


const products = [
    { name: 'Riz', price: 15, weight: 5 },
    { name: 'Farine', price: 8, weight: 2 },
    { name: 'Pommes', price: 10, weight: 4 },
    { name: 'Bananes', price: 6, weight: 1.5 }
];
  
// Ajouter le prix par kilo à chaque produit

// Trier les produits par prix au kilo
  
// Afficher les produits avec leur prix par kilo


// Résultat attendu :
// Riz: Prix total = 15 €, Poids = 5 kg, Prix par kilo = 3.00 €/kg
// Farine: Prix total = 8 €, Poids = 2 kg, Prix par kilo = 4.00 €/kg
// Pommes: Prix total = 10 €, Poids = 4 kg, Prix par kilo = 2.50 €/kg
// Bananes: Prix total = 6 €, Poids = 1.5 kg, Prix par kilo = 4.00 €/kg