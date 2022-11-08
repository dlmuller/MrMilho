import './App.css';
import React, { useState } from 'react';
import ModalUserInput from './components/userinput/modaluserinput';
import Header from './components/header/header';
import Pages from './components/pages';
import "./styles/user-modal/modal.css"


const WrapperDiv = (props) => {
  return <div className="App">
    {props.children}
  </div>
}
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)



  return (
    <WrapperDiv>
      {isModalVisible ?
        <div className='user-modal-container'
          onClick={(e) => {
            if (e.target.className === 'user-modal-container') {
              setIsModalVisible(false)
            }
          }}
        >
          <ModalUserInput setIsModalVisible={setIsModalVisible} setIsLoggedIn={setIsLoggedIn} />
        </div> : null
      }
      <Header setIsModalVisible={setIsModalVisible} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Pages />
    </WrapperDiv>
  );
}

export default App;
