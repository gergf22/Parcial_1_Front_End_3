import { useState } from "react"
import Card from "./Card"
import FormStyles from "../styles/Form.module.css"

const Form = () => {

    const [estudiante,setEstudiante] = useState(
        {nombre: "",
        apellido:"",
        email:"",
        tecnologia:""}
    )

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const hadleNombreChange = (e) =>{
        setEstudiante ({...estudiante, nombre:e.target.value})
        console.log(estudiante);
 
    }
    const hadleApellidoChange = (e) =>{
        setEstudiante ({...estudiante, apellido:e.target.value})
    }

    const hadleEmailChange = (e) =>{
        setEstudiante ({...estudiante, email:e.target.value})
    }

    const hadleTecnologiaChange = (e) =>{
        setEstudiante ({...estudiante, tecnologia:e.target.value})
    }
    
    const reset = () => {
        setEstudiante(
            {nombre: "",
            apellido:"",
            email:"",
            tecnologia:""}
        )

        setShow(false)
        setError(false)

        
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        const mailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

        if(
            estudiante.nombre.length > 3 &&
            mailRegex.test(estudiante.email) &&
            estudiante.tecnologia.length > 6
        ){
            setShow(true)
        } else {
            setError(true)
        }
        
        
    }


  return (
    <>
        
        <form onSubmit={handleSubmit} className={FormStyles.form}>
            <label>Nombre:</label>
            <input type="text" value={estudiante.nombre} onChange={hadleNombreChange} placeholder="ingresa tu nombre"/>
            <label>Apellido:</label>
            <input type="text"value={estudiante.apellido} onChange={hadleApellidoChange} placeholder="ingresa tu apellido" />
            <label>Email:</label>
            <input type="email" value={estudiante.email} onChange={hadleEmailChange} placeholder="ingresa tu mail" />
            <label>¿Que tecnologias prefieres para el Front?</label>
            <input type="text" value={estudiante.tecnologia} onChange={hadleTecnologiaChange} placeholder="ingresa al menos 3 tecnologias" />
            <button>Enviar</button>
        </form>
        <button onClick={reset}>Reset</button>

        {show? <Card estudiante={estudiante}/>: null }

        {error? <h4 className={FormStyles.error}>Por favor chequea que la información sea correcta.</h4> : null}


    </>
  )
}

export default Form