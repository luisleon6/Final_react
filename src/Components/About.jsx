import React, {useEffect} from 'react'
import Navbar from './Navbar';
import { auth } from '../Config/Config';
import { useNavigate } from 'react-router-dom';

const about = ({user}) => {

    const navigate = useNavigate();

    useEffect(()=>{
      auth.onAuthStateChanged(user=>{
        if(!user){
          navigate('/login');
        }
      })
    },[]);

  return (
    <div>
    <Navbar user={user}/>
    <h2 className='title_about'>Acerca de <b>Luca Shoeshop</b></h2>
    <br/>
    <br/>
        <div className='about'>
            <p >Bienvenido a Luca Shoeshop, tu proveedor numero uno de Sneakers. Estamos dedicados a darte lo mejor en sneakers,enfocados en la rapidez, calidad, satisfaccion.Fundados en 2022 por Jose. Cuando empezamos este sueño lo hicimos pensando en ofrecer un producto competente, a tiempo y real lo que nos llevo a comenzar esta nueva aventura, perseguir el sueño y animarnos a hacer algo distinto y que destaque en el mercado, despues de buscar de manera exhaustiva proveedores oficiales logramos armar el mejor equipo para competir en la industria y poder posicionarnos como los mejores y mas rapidos en el mercado. Ahora contamos con clientes de todo el continente y estamos ansiosos de poder brindarte nuestro servicio a ti para que de igual manera compares y juzgues por ti mismo de lo que hablamos. Esperamos contar con tu visita pronto y disfrutes de ser parte de esta experiencia tanto como nosotros. Si tienes cualquier duda o comentario porfavor contactanos.
            Sinceramente, <b>Jose</b></p>

        </div>
    </div>
  )
}

export default about;
