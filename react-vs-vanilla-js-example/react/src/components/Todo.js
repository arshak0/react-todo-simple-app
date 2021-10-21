import { useState, useRef } from 'react';

import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
  const [showModal, setShowModal] = useState();
  let [inputUseState, setInputUseState] = useState();
  let refVar = useRef(0);

  let inputRef = useRef(0);

  const inputPharagraphChange = () => {
    setInputUseState(inputRef.current.value)
  }

  function showModalHandler() {
    setShowModal(true);
    refVar.current++;
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <p className='p2'>{refVar.current}</p>
      <div className='actions'>
        <button className='btn' onClick={showModalHandler}>
          Deletett
        </button>
      </div>
      <input ref={inputRef} onChange={inputPharagraphChange} type="text"/>
      <p className='p2'>{inputUseState}</p>
      {showModal && <Backdrop onClick={closeModalHandler} />}
      {showModal && <Modal stateVar={refVar.current} text='Are you sure?' onClose={closeModalHandler} />}
    </div>
  );
}

export default Todo;
