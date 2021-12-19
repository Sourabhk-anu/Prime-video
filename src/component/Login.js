import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Login = ({setUser}) => {

    const[email, setEmail]= useState('');
    const[password, setPassword]= useState('');
    const[error, setError]= useState(null);

    const history = useHistory('');

    const signIn = (props) => {
        if(email===''||password===''){
            setError(<b>First fill up all the details</b>)
        }
        else {
            setError(null);
            setUser(true);
            history.push('/dashboard');
        }
    }

    const signup = (props) => {
        setError(null);
        history.push('/signup');
    }

    return (
        <div className="login">
            <header className="header">
                <img src="https://i.pinimg.com/originals/06/d2/ca/06d2ca20cd0419a57f0d8f6789369cc1.jpg" alt='primevideo'/>
            </header>
            <div>
                <section>
                    <form className="form">
                        <h1>Sign-In</h1>
                        <label for='email'>Email</label>
                        <br/>
                        <input id='email' type='email' name='email' placeholder='Enter email' value={email} onChange={e => setEmail(e.target.value)}/>
                        <br/>
                        <label for='passwors'>Password</label>
                        <br/>
                        <input id='password' type='password' name='password' placeholder='Enter password' value={password} onChange={e => setPassword(e.target.value)}/>
                        <br/>
                        {error && <p className='error'>{error}</p>}
                        <input className='button' type='button' value='Sign-In' onClick={signIn}/>
                        <p className="condition">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                        <h3><ins>New to Amazon?</ins></h3>
                        <input type='button' value='Create your Amazon account' onClick={signup}/>
                        
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Login
