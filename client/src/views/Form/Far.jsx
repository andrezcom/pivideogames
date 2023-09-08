import React, { useState } from 'react'

const Form = () => {

  const [state, setState] = useState({
    nombre:"",
    poder_de_fuerza:0,
    imagen_url:""
  })

  const [error, setError] = useState({
    nombre:"El nombre es requerido.",
    poder_de_fuerza:"",
    imagen_url:""
  })

  const validate = (stateAux, name)=>{
    if(name==="nombre"){
      if(stateAux.nombre==="") setError({...error, nombre:"El nombre es requerido."})
      else setError({...error, nombre:""})
    }
    if(name==="poder_de_fuerza"){
      if(isNaN(parseInt(stateAux.poder_de_fuerza))){ // "85"=> 85 // "lucas" => NaN
        setError({...error, poder_de_fuerza:"El valor ingresado NO es un numero."})
      } else setError({...error, poder_de_fuerza:""})
    }
    if(name==="imagen_url"){
      const regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
      if(regex.test(stateAux.imagen_url)){
        setError({...error, imagen_url:""})
      }else{
        setError({...error, imagen_url:"La imagen debe ser una URL."})
      }
    }
  }

  const disableFunction = ()=>{
    let disabledAux = true;
    for(let err in error){
      if(error[err]==="") disabledAux = false;
      else{
        disabledAux = true;
        break;
      }
    }
    return disabledAux;
  }
 
  const handleChange = (event) =>{
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
    validate({
      ...state,
      [event.target.name]: event.target.value
    }, event.target.name)
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    
  }


  return (
    <div className='form-cont'>
      {console.log(error)}
      <form onSubmit={handleSubmit} className='form-cont-form'>
        <label>Nombre: </label>
        <input name='nombre' onChange={handleChange} type="text" />
        <label className='form-error'>{error.nombre}</label>
        <label>Poder de Fuerza: </label>
        <input name='poder_de_fuerza' onChange={handleChange} type="text" />
        <label className='form-error'>{error.poder_de_fuerza}</label>
        <label>Imagen: </label>
        <input name='imagen_url' onChange={handleChange} type="text" />
        <label className='form-error'>{error.imagen_url}</label>
        <input disabled={disableFunction()} type="submit" />
      </form>
    </div>
  )
}

export default Form