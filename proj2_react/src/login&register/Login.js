import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }
    
    return(
        <>
            {success ? (
                <section>
                    <h1>You are logged In!</h1>
                    <br/>
                    <p>
                        <a href='#'>Go to home</a>
                    </p>
                </section>
            ) : ( 
        <section><br/><br/>
            <p ref={errRef} className={errMsg ? "errmsg" :
            "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>UserName:</label>
                <input 
                        type="text" 
                        id='username' 
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                />
                <label htmlFor='password'>Password:</label>
                <input 
                        type="password" 
                        id='username' 
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                />
                <button>Sign In</button>
            </form>
            <p>
                Need an Account? <br/>
                <span>
                    {/* put router link here */}
                    <a href='#'>Sign Up</a>
                </span>
            </p>
        </section>
            )}
            </>
    )
}

export default Login;