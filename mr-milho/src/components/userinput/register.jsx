import React, { useRef, useState, useEffect } from 'react'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../styles/user-modal/modal.css"
import { Link } from "react-router-dom";
import fetchUrl from '../../functions/fetchUrl';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*]).{8,25}$/


const Register = ({ setModalUser, submit }) => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);




    //body: JSON.stringify({ username: user, password: pwd, access: 1 })

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        setValidName(result);
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd, matchPwd])


    const handleSubmit = (e) => {
        e.preventDefault();
        fetchUrl('/register', 'POST', JSON.stringify({ username: user, password: pwd, access: 3 }), { setSuccess, setErrMsg })
    }


    return (
        <>{success ?
            <section onClick={e => e.stopPropagation()}>
                <div className='user-form-title'>
                    <p> Success, you may now sign in!</p>
                </div>
                <button className='btn' style={{ width: '100%' }} onClick={() => setModalUser('login')}>Sign In</button>
            </section> :
            <section onClick={e => e.stopPropagation()}>

                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} >
                    {errMsg}
                </p>
                <div className='user-form-title'>
                    <h1 > Register</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='user-form-content'>

                        <div className='inputBox'>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                                className='input' />
                            <label>
                                Username
                                <span className={validName ? "valid" : 'hide'}>
                                    : <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={validName || !user ? 'hide' : "invalid"}>
                                    : <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>
                        </div>
                        <p id="uidnote" className={user && !validName ? "instructions" : 'offscreen'}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, number, underscores, hyphens allowed.
                        </p>

                        <div className='inputBox'>


                            <input
                                className='input'
                                type="password"
                                id="password"
                                data-testid="password"
                                name="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required />
                            <label htmlFor="password">
                                Password
                                <span className={validPwd ? "valid" : 'hide'}>
                                    :  <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={validPwd || !pwd ? 'hide' : "invalid"}>
                                    : <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>
                        </div>

                        <p id="pwdnote" className={!validPwd && pwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: ! @ # $ % *
                        </p>


                        <div className='inputBox'>
                            <input
                                className='input'
                                type="password"
                                id="confirm-pwd"
                                name="confirm-pwd"
                                data-testid="confirm-pwd"
                                onChange={(e) => setMatchPwd(e.target.value)}
                                value={matchPwd}
                                required />
                            <label htmlFor="confirm-pwd">
                                Confirm Password
                                <span className={validMatch && matchPwd ? "valid" : 'hide'}>
                                    : <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={validMatch || !matchPwd ? 'hide' : "invalid"}>
                                    :  <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>
                        </div>

                        <p id="confirmnote" className={!validPwd && matchPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>
                    </div>

                    <div className='user-form-actions'>
                        <button className='btn' disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
                        <p className='redirect'>
                            Already registered?<br />
                            <span onClick={() => setModalUser('login')} style={{ color: '#2098D1', cursor: 'pointer' }}>
                                Sign In
                            </span>
                        </p>
                    </div>
                </form>
            </section>}
        </>

    );
}

export default Register;