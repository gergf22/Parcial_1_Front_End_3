import Cardstyles from "../styles/Card.module.css"
const Card = ({ estudiante }) => {
  return (
    <div className={Cardstyles.card}>
      
      <h2>Muchas gracias por contestar {estudiante.nombre} {estudiante.apellido}! </h2>
      <h3>Te enviaremos toda la información sobre {estudiante.tecnologia}</h3>
      <h3>Por favor revisa en la casilla del correo: {estudiante.email} </h3>
    </div>
  )
}

export default Card