import { React, useState } from 'react';
import Login from './login.jsx'
import Register from './register.jsx'
import "../../styles/user-modal/modal.css"


const ModalUserInput = ({ setIsModalVisible, setIsLoggedIn }) => {
    const [modalUser, setModalUser] = useState('login')
    return (
        <div className='user-form-container' >
            {modalUser == 'login' ?
                <Login setModalUser={setModalUser} setIsModalVisible={setIsModalVisible} setIsLoggedIn={setIsLoggedIn} />
                :
                <Register setModalUser={setModalUser} />}
        </div>
    )
}

export default ModalUserInput;