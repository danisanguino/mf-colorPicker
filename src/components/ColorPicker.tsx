import React from 'react'


interface ColorPickerProps {
  color: string; // El color seleccionado
  handleChangeColor: (event: React.ChangeEvent<HTMLInputElement>) => void; // Función para cambiar el color
  handleSubmitSaveColor: (event: React.FormEvent<HTMLFormElement>) => void; // Función para guardar el color
}

export const ColorPicker: React.FC<ColorPickerProps>= ({
  color,
  handleChangeColor,
  handleSubmitSaveColor
}) => {
  
  return (
  
   <form onSubmit={handleSubmitSaveColor}>
    <input
      type='color'
      className='form-control'
      style={{width: "100%", height: "300px"}}
      title="selecciona un color"
      value={color}
      onChange={handleChangeColor}

    />

    <div className='text-center'>
      <h2 className='mt-3 fw-bolder'>
        <div style={{width:"20px", height:"20px", background: color, display: "inline-block", margin: "0 1rem"}}></div>
        {color}
      </h2>
      <button type="submit" className='btn btn-success'>Guardar Color</button>
    </div>
   </form>

  )
}
