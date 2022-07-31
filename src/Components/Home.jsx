import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Config/Config';
import Navbar from './Navbar';
import videoBg from '../images/videoBg.mp4';


const Home = ({user}) => {
    
    const navigate = useNavigate();

    useEffect(()=>{
      auth.onAuthStateChanged(user=>{
        if(!user){
          navigate('/login');
        }
      })
    })

  return (
    <div className='main'>
      <Navbar user={user}/>
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted/>
      <div className='content'>
        <h2>Bienvenido</h2>
        <p>a Luca shoeshop</p>
        <p>El paraiso de los sneakers</p>
      </div>
    </div>
  )
}
export default Home;
