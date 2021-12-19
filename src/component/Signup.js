import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Signup = ({setUser}) => {

    const[username, setUsername]= useState('');
    const[email, setEmail]= useState('');
    const[password, setPassword]= useState('');
    const[confirmPassword, setConfirmPassword]= useState('');
    const[error, setError]= useState(null);

    const history = useHistory('');

    const signUp = (props) => {
        if(username===''||email===''||password===''){
            setError(<b>First fill up all the details</b>)
        }
        else if(password!==confirmPassword){
            setError(<b>Password doesn't match</b>);
        }
        else {
            setError(null);
            setUser(false);
            history.push('/login');
        }
    }

    const signIn = (props) => {
        setError(null);
        history.push('/login');
    }

    return (
        <div className="signup">
            <header className="header">
                <img src="https://i.pinimg.com/originals/06/d2/ca/06d2ca20cd0419a57f0d8f6789369cc1.jpg" alt='primevideo'/>
            </header>
            <div>
                <section>
                    <form className="form">
                        <h1>Sign-Up</h1>
                        <label for='userName'>Username</label>
                        <br/>
                        <input id='userName' type='text' name='username' placeholder='Enter Usename' value={username} onChange={e => setUsername(e.target.value)}/>
                        <br/>
                        <label for='email'>Email</label>
                        <br/>
                        <input id='email' type='email' name='email' placeholder='Enter email' value={email} onChange={e => setEmail(e.target.value)}/>
                        <br/>
                        <label for='passwors'>Password</label>
                        <br/>
                        <input id='password' type='password' name='password' placeholder='Enter password' value={password} onChange={e => setPassword(e.target.value)}/>
                        <br/>
                        <label for='confirmPassword'>Confirm Password</label>
                        <br/>
                        <input id='confirmPassword' type='password' name='password' placeholder='Enter password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                        <br/>
                        {error && <p className='error'>{error}</p>}
                        <input className='button' type='button' value='Sign-Up' onClick={signUp}/>
                        <p className="condition">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                        <h3><ins>Already Signup?</ins></h3>
                        <input type='button' value='GoTo Sign In' onClick={signIn}/>
                        
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Signup
