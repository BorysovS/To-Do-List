import styled from 'styled-components';

export const Backdrop = styled.div`
position: fixed;
  z-index: 2000;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
`

export const Modal = styled.div`
position: 'relative';
padding: 16px 24px;
width: 400px;
  height: 400px;
  background: white;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 8px;
  z-index: 2000;
  transition: 0.5s;
`

export const BtnClose = styled.button`
position: absolute;
display: flex;
right: 5px;
top: 5px;
align-items: center;
justify-content: center;
width: 24px;
height: 24px;
padding: 0;
margin: 0;
border: none;
border-radius: 4px;
background-color: transparent;
cursor: pointer;
`

export const Title = styled.h2`
text-align: center;
`

export const Input = styled.input`
width: 300px;
    display: block;
    margin-bottom: 18px;
    padding: 8px 16px;
`

export const TextArea = styled.textarea`
width: 300px;
    display: block;
    padding: 8px 16px;
    height: 150px;
    margin-bottom: 18px;

    resize: none;
`
export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`


// export const Toggle = styled.label`
//   position: relative;
//   display: inline-block;
//   width: 100px;
//   height: 50px;
//   background: #ffffff;
//   border: 1px solid #bbc1e1;
//   border-radius: 30px;
//   cursor: pointer;
  
//   input[type="checkbox"] {
//     display: none;
//   }
  
//   &:after {
//     content: "";
//     position: absolute;
//     top: 1.5px;
//     left: 3px;
//     width: 45px;
//     height: 45px;
//     background-color: blue;
//     border-radius: 50%;
//     transform: translateX(0);
//     transition: transform 0.2s ease;
//   }
  
//   input[type="checkbox"]:checked + &:after {
//     transform: translateX(52px);
//   }
  
//   input[type="checkbox"]:checked + & {
//     background-color: blue;
//   }
// `;


// export const ToggleInput = styled.input`
// &:active {
//     border: 0;
//   height: 0;
//   opacity: 0;
//   outline: none;
//   position: absolute;
//   left: -5000px;
//   width: 0;
// }
// `