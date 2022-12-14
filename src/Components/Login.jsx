import React, {useState} from 'react'
import { auth } from '../Config/Config'
import { Link,useNavigate } from 'react-router-dom'

const Login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setEmail('');
            setPassword('');
            setError('');
            navigate('/');
        }).catch(err => setError(err.message));
    }

    return (
        <div className='container'>
            <br />
            <h2>Acceder</h2>
            <br />
            <form autoComplete="off" className='form-group' onSubmit={login}>
                <label htmlFor="email">Email</label>
                <input type="email" className='form-control' required
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" className='form-control' required
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                <br />
                <button type="submit" className='btn btn-success btn-md mybtn'>Acceder</button>
            </form>
            {error && <span className='error-msg'>{error}</span>}
            <br/>
            <span>Aun no tienes cuenta? Registrate
                <Link to="/signup"> Aqui</Link>
            </span>
        </div>
    )
}

export default Login
