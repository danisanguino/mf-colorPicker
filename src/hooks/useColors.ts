import { useEffect, useState } from "react";
import { getColorList, getLastColor } from "../helpers/getColor";

export const useColors = () => {

const [color, setColor] = useState<string>(getLastColor());
const [colorsList, setColorsList] = useState<string[]>(getColorList())

const handleChangeColor = (e: any)=> {
  setColor(e.target.value);
}

const handleSubmitSaveColor = (e: any)=> {
  e.preventDefault();
  setColorsList([color, ...colorsList]);
  alert(color);
}

useEffect(() => {
  //aqui el guardar en el localstorage
  localStorage.setItem("colors", JSON.stringify(colorsList) );
  
}, [colorsList])


return { color, colorsList, handleChangeColor, handleSubmitSaveColor}
}