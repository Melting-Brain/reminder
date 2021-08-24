import { useState } from 'react';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  /* height: 100%;
  width: 100%; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #F0FFFF;
  display: grid; 
  place-items: center;
 // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
`;

export const ModalBtn = styled.button`
  background-color: #fcc203;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: black;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))`
    width: 30%;
    height: 30%;
    border-radius: 10px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    > div.close_btn {
      margin-top: 5%;
      text-align: right;
      padding-right: 15px;
      cursor: pointer;
    }

    > div.desc {
      text-align: center;
      margin-top: 30%;
      color: #1a237e;
    }
`;

const Modal = (openModalHandler, isOpen) => {


  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>
          {isOpen === true ? 'Opened!' : 'Open Modal'}
        </ModalBtn>
        {isOpen === false ? 
          null :
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <div onClick={openModalHandler} className='close-btn'>&times;</div>
            <div className='desc'>Hi Hello?</div>
          </ModalView>
        </ModalBackdrop>
      }
      </ModalContainer>
    </>
  );
};


export default Modal