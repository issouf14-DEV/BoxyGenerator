export default function getBoxShadowValue(shadows) {
  // Vérifier que shadows existe et est un tableau
  if (!shadows || !Array.isArray(shadows)) {
    return "none";
  }

  let finalString = "";

  shadows.forEach((shadow, index) => {
    if (shadow.active) {
      // Vérifier que inputs existe
      if (!shadow.inputs || !Array.isArray(shadow.inputs)) {
        return;
      }

      // Extraire les valeurs depuis les inputs
      const horizontal = shadow.inputs[0]?.value || 0; // Décalage horizontal
      const vertical = shadow.inputs[1]?.value || 0; // Décalage vertical
      const blur = shadow.inputs[2]?.value || 0; // Rayon de flou
      const spread = shadow.inputs[3]?.value || 0; // Rayon d'expansion
      const color = shadow.inputs[4]?.value || "#000000"; // Couleur
      const inset = shadow.inset ? "inset " : "";

      // Construire la string CSS
      finalString += `${inset}${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`;

      // Ajouter une virgule si ce n'est pas le dernier élément actif
      const remainingActiveShadows = shadows
        .slice(index + 1)
        .some((s) => s.active);
      if (remainingActiveShadows) {
        finalString += ", ";
      }
    }
  });

  // Retourner 'none' si aucune ombre active
  return finalString || "none";
}
