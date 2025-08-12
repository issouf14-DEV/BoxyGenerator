# Boxy generator

Une application **React + Redux Toolkit** permettant de personnaliser en temps réel les propriétés visuelles d’un élément HTML (taille, couleur, bordures, ombres portées).  
Le but, est de fournir une interface intuitive avec **sliders**, **color pickers** et **panneaux dynamiques** pour créer rapidement des designs personnalisés.


---


## 🚀 Fonctionnalités

- 📏 **Contrôles dynamiques** : ajustez largeur, hauteur, border radius, etc.
- 🎨 **Choix de couleurs** via un color picker intégré.
- 🌫 **Gestion d’ombres multiples** avec réglages précis :
  - Offset horizontal & vertical
  - Rayon de flou
  - Rayon de diffusion (spread)
  - Couleur
  - Mode `inset` ou non
- 🔄 **Mise à jour en temps réel** grâce à Redux Toolkit.
- 📦 **Composants réutilisables** (`BoxRange`, `BoxColorPicker`, etc.).
- 🎯 **Interface responsive** grâce à Tailwind CSS.

---

## 🛠 Stack technique

- **React** (hooks)
- **Redux Toolkit** pour la gestion d’état
- **Tailwind CSS** pour le style
- **Vite** pour le bundling et le serveur de développement
- **NanoID** pour générer des identifiants uniques

---

## 📂 Structure du projet
src/
├── assets/ # Images, icônes (chevron, etc.)
├── features/ # Slices Redux (boxProperties, shadow, etc.)
│ ├── boxProperties.js
│ └── shadow.js
├── Layout/ # Composants de layout (ShadowList, Shadow, etc.)
├── Components/
│ ├── BoxRange/ # Slider et input numérique synchronisés
│ ├── BoxColorPicker/ # Sélecteur de couleur
│ └── ...
├── App.jsx # Composant racine
├── main.jsx # Point d’entrée React
└── store.js # Configuration Redux
