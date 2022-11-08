import { useEffect, useState } from 'react';
import '../../styles/header/header.css';
import mascot from "../../imgs/mr-milho-header.png"
import { useNavigate } from "react-router-dom";


const img = { "mascot": mascot }

const Header = ({ setIsModalVisible, setIsLoggedIn, isLoggedIn }) => {
    const [page, setPage] = useState('')


    const handleLoginBtn = () => {
        setIsModalVisible(true)
    }
    const handleLoggout = () => {
        setIsLoggedIn(false)
    }
    let navigate = useNavigate()

    const gotoPage = (address) => {
        setPage(address)
        console.log(page)
    }
    useEffect(() => {
        navigate(page)
    }, [page])



    const login = isLoggedIn

    return (
        <header className='Header'>

            <div className='img-container' onClick={() => gotoPage('/')}>
                <img src={img['mascot']} alt="Failed to load img" />
                <span className='text'>
                    Mr.Milho
                </span>
            </div>

            <div className='content-container'>
                <button className='content-btn' onClick={() => gotoPage('/analyzer')} >Analyzer</button>
                <button className='content-btn' onClick={() => gotoPage('/clans')}>Clans</button>
                <button className='content-btn' onClick={() => gotoPage('/quests')}>Quests/Tasks</button>
            </div>

            <div className='login-btn-container'>{
                login == true ?
                    <>

                        <button className='login-btn acc' >Account</button>
                        <button className='login-btn logout' onClick={handleLoggout}>Logout</button>

                    </>
                    :

                    < button className='login-btn' onClick={handleLoginBtn}>Login</button>
            }
            </div>
        </header >
    );
}

export default Header;