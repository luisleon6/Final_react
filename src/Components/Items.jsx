import React, {useEffect} from 'react'
import '../css/Items.css'
import ItemList from './ItemList'
import Navbar from './Navbar'
import { auth } from '../Config/Config'
import { useNavigate } from 'react-router-dom'

const Items = ({user}) => {

  const navigate = useNavigate();

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(!user){
        navigate('/login');
      }
    })
  },[]);


  return (
    <div className='wrapper'>
        <Navbar user={user}/>
        <ItemList />
    </div>
  )
}

export default Items;


