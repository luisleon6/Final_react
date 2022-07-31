import React, {useState, useEffect, useContext} from 'react'
import { auth, db } from '../Config/Config'
import { CartContext } from '../Global/CartContext'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Checkout = (props) => {

    const navigate = useNavigate();

    const {totalPrice, totalQty, dispatch} = useContext(CartContext);

    //definir estados
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cell, setCell] = useState('');
    const [address, setAddress] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [error, setError] = useState('');

    useEffect(()=>{
        auth.onAuthStateChanged(user =>{
            if(user){
                db.collection('SignedUpUserData').doc(user.uid).onSnapshot(snapshot=>{
                    setName(snapshot.data().Name);
                    setEmail(snapshot.data().Email);                    
                })
            }
            else{
                navigate('/login');
            }
        })
    })

    const checkoutSubmit = (e)=>{
        e.preventDefault();
        //console.log(name, email, cell, address, totalQty, totalPrice);
        auth.onAuthStateChanged(user=>{
            if(user){
                const date = new Date();
                const time = date.getTime();
                db.collection('Informacion del Comprador' + user.id).doc('_' + time).set({
                    BuyerName: name,
                    BuyerEmail: email,
                    BuyerCell: cell,
                    BuyerAddress: address,
                    BuyerPayment: totalPrice,
                    BuyerQuantity: totalQty
                }).then(()=>{
                    setCell('');
                    setAddress('');
                    dispatch({type: 'EMPTY'});
                    setSuccessMsg("Su orden se ha generado de manera exitosa. Gracias por visitarnos. Sera redirigido a la pagina de inicio despues de 5 segundos");
                    setTimeout(()=>{
                        navigate('/')
                    }, 5000)
                }).catch(err => setError(err.message))
            }
        })
    }
    

  return (
    <>
            <Navbar user={props.user} />
            <div className='container'>
                <br />
                <h2>Detalles de Compra</h2>
                <br />
                {successMsg && <div className='success-msg'>{successMsg}</div>}
                <form autoComplete="off" className='form-group' onSubmit={checkoutSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" className='form-control' required
                        value={name} disabled />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input type="email" className='form-control' required
                        value={email} disabled />
                    <br />
                    <label htmlFor="Cell No">Cell No</label>
                    <input type="number" className='form-control' required
                        onChange={(e) => setCell(e.target.value)} value={cell} placeholder='ej. 03123456789' />
                    <br />
                    <label htmlFor="Delivery Address">Delivery Address</label>
                    <input type="text" className='form-control' required
                        onChange={(e) => setAddress(e.target.value)} value={address} />
                    <br />
                    <label htmlFor="Price To Pay">Price To Pay</label>
                    <input type="number" className='form-control' required
                        value={totalPrice} disabled />
                    <br />
                    <label htmlFor="Total No of Products">Total No of Products</label>
                    <input type="number" className='form-control' required
                        value={totalQty} disabled />
                    <br />
                    <button type="submit" className='btn btn-success btn-md mybtn'>SUBMIT</button>
                </form>
                {error && <span className='error-msg'>{error}</span>}
            </div>
        </>
  )
}

export default Checkout
