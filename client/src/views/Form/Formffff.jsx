import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPowers, postHero } from '../../Redux/Actions/Index'

const Form = () => {

  const allPowers = useSelector(state => state.allPowers)

  const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(getPowers())
      },[])
      /*nombre,
    alianzas,
    villano_enfrentado,
    imagen_url,
    poderes,
    aliados,
    identidad_secreta,
    poder_de_fuerza*/

  const [state, setState] = useState({
    nombre:"",
    poder_de_fuerza:0,
    imagen_url:"",
    poderes:[],
    identidad_secreta:"hacer algo",
    alianzas:["algo", "otroalgo", "ultimoAlgo"],
    aliados:["aliado1", "aliado2"]
  })

  const [error, setError] = useState({
    nombre:"El nombre es requerido.",
    poder_de_fuerza:"",
    imagen_url:"",
    poderes:"",
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

  const handleDelete = (event) => {
    setState({
      ...state,
      [event.target.name]: [...state[event.target.name].filter(p=> p!==event.target.id)]
    })
  }
 
  const handleChange = (event) =>{

    if(event.target.name==="poderes"){
      if(state.poderes.includes(event.target.value)) return
      setState({
        ...state,
        [event.target.name]: [...state[event.target.name], event.target.value]
      })
    }else{
      setState({
        ...state,
        [event.target.name]: event.target.value
      })
    }

    
    validate({
      ...state,
      [event.target.name]: event.target.value
    }, event.target.name)
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    dispatch(postHero(state))
  }


  return (
    <div className='form-cont'>
      {console.log(state)}
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
        <label>Poderes: </label>
        <select onChange={handleChange} name='poderes'>
          {allPowers?.map((p)=> <option value={p} key={p}>{p}</option>)}
        </select>
        <label className='form-error'>{error.poder_de_fuerza}</label>
        <div>
          {
            state.poderes.map((p)=> <div className='algo'>
              <label>{p}</label> <button name='poderes' id={p} onClick={handleDelete}>X</button>
              </div>)
          }
        </div>
        <input disabled={disableFunction()} type="submit" />
      </form>
    </div>
  )
}

export default Form