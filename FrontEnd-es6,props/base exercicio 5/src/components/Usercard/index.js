import Cookie from '../../assets/cookie.svg'
import Alerta from '../../assets/alert.svg'
import './style.css'


 function UserCardCookie({mensagem}){
    return(
      <div className="SpamCard">
      <img src={Cookie} alt="cookie! :)"/>
      <p><b>{mensagem}</b>.</p>
      <button className="btn btn-vermelho">Entendi</button>
      </div>
    )
  }

   function UserCardAlerta({mensagem}){
    return(
      <div className="SpamCard">
      <img src={Alerta} alt="!"/>
      <p><b>{mensagem}</b>.</p>
      <button className="btn btn-azul">Extender LogIn</button>
      </div>
    )
  }
  export{
      UserCardAlerta,
      UserCardCookie
  }