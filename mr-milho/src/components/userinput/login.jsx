import { useRef, useState, useEffect, useContext } from 'react';
import "../../styles/user-modal/modal.css"
import { Link } from "react-router-dom";
import fetchUrl from '../../functions/fetchUrl';





const Login = ({ setModalUser, setIsModalVisible, setIsLoggedIn }) => {

    const userRef = useRef();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [success, setSuccess] = useState(false)
    const [errMsg, setErrMsg] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchUrl('/auth', 'POST', JSON.stringify({ username: user, password: pwd }), { setSuccess, setErrMsg })
    }
    useEffect(() => {
        if (success == true) {
            setIsLoggedIn(true)
            setIsModalVisible(false)
            alert('success')
        }
    }, [success])



    return (
        <section onClick={e => e.stopPropagation()}>

            <div className='user-form-title'>
                <h1 >Sign In</h1>
            </div>
            <form onSubmit={handleSubmit} >
                <div className='user-form-content'>
                    <div className='inputBox'>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            className='input' />
                        <label htmlFor="username">
                            Username
                        </label>
                        <div className='inputBox' style={{ 'marginTop': '4vh' }}>
                            <input
                                className='input'
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required />
                            <label htmlFor="password">
                                Password
                            </label>
                        </div>
                    </div>
                </div>
                <div className='user-form-actions'>
                    <button className='btn'>Sign In</button>
                    <p className='redirect'>
                        Need an account? <br />
                        <span onClick={() => setModalUser('register')} style={{ color: '#2098D1', cursor: 'pointer' }}>
                            Sign Up
                        </span>
                    </p>
                </div>
            </form>
        </section>

    );
}

export default Login;