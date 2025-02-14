# Calculatrice Interactive avec Particles.js

Une calculatrice web élégante avec un design moderne et des particules animées en arrière-plan. Le projet combine des fonctionnalités mathématiques basiques avec une interface utilisateur attrayante.

## 🌟 Fonctionnalités

- Opérations mathématiques de base (+, -, *, /)
- Interface sombre moderne
- Particules interactives en arrière-plan
- Animations sur les boutons
- Design responsive
- Effet de flou (backdrop-filter)

## 📋 Prérequis

- Un navigateur web moderne
- Connexion internet (pour charger la bibliothèque Particles.js)

## 🚀 Installation

1. Clonez ou téléchargez ce repository
2. Créez les trois fichiers suivants dans un même dossier :
   - `index.html`
   - `styles.css`
   - `script.js`
3. Copiez le contenu fourni dans chaque fichier correspondant

## 💻 Utilisation

1. Ouvrez le fichier `index.html` dans votre navigateur
2. Utilisez la calculatrice comme une calculatrice standard :
   - Cliquez sur les chiffres pour les saisir
   - Utilisez les opérateurs (+, -, *, /) pour les calculs
   - Appuyez sur = pour obtenir le résultat
   - Utilisez C pour effacer

## 🛠️ Technologies Utilisées

- HTML5
- CSS3
- JavaScript
- [Particles.js](https://vincentgarreau.com/particles.js/) - Pour l'animation des particules

## 🎨 Personnalisation

### Modifier les particules

Dans `script.js`, vous pouvez ajuster les paramètres des particules :
```javascript
particles: {
    number: {
        value: 50, // Nombre de particules
    },
    move: {
        speed: 2, // Vitesse des particules
    }
}
```

### Modifier les couleurs

Dans `styles.css`, vous pouvez personnaliser :
```css
/* Couleur de fond */
body {
    background-color: #0a0a0a;
}

/* Couleur des boutons opérateurs */
.operator-btn {
    background-color: rgba(255, 166, 0, 0.8);
}
```

## 📱 Compatibilité

- Chrome (recommandé)
- Firefox
- Safari
- Edge

## ⚠️ Notes

- L'effet de flou (backdrop-filter) peut ne pas fonctionner sur certains navigateurs plus anciens
- La calculatrice nécessite une connexion internet pour charger Particles.js
- Pour un fonctionnement hors ligne, téléchargez particles.js localement

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à proposer des améliorations ou à signaler des bugs.

## 📜 Licence

Ce projet est sous licence .