function getBoxShadowValue(shadows) {
  if (!shadows || !Array.isArray(shadows)) return "none";
  
  let finalString = "";
  shadows.forEach((shadow, index) => {
    if (shadow.active) {
      const horizontal = shadow.inputs[0]?.value || 0;
      const vertical = shadow.inputs[1]?.value || 0;
      const blur = shadow.inputs[2]?.value || 0;
      const spread = shadow.inputs[3]?.value || 0;
      const color = shadow.inputs[4]?.value || "#000000";
      const inset = shadow.inset ? "inset " : "";

      finalString += `${inset}${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`;

      const remainingActiveShadows = shadows.slice(index + 1).some((s) => s.active);
      if (remainingActiveShadows) {
        finalString += ", ";
      }
    }
  });

  return finalString || "none";
};

export default getBoxShadowValue;