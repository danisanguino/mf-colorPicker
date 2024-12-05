export const getColorList = (): string [] => {
  return JSON.parse(localStorage.getItem("colors") as string) || [];
};

export const getLastColor = (): string => {
  const listColor = getColorList();
  return listColor[0] || "#000000";
};

