import React, { useRef } from "react";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

const Elements = () => {
  const loginRef = useRef()
  const pwRef = useRef()
  const navigate = useNavigate()
  const onSave = () => {
    console.log(loginRef.current.value, pwRef.current.value);
    if(loginRef.current.value === 'webbrain', pwRef.current.value === '1234') {
      localStorage.setItem('token', true)
      navigate('/pages')
    }else {
      localStorage.setItem('token', false)
      alert('login yoki pw xato')
    }
  }
  return (
    <Container>
      <h1>Elements</h1>
      <input ref={loginRef} type="text" />
      <input ref={pwRef} type="text" />
      <button onClick={onSave}>Submit</button>
    </Container>
  );
};

export default Elements;
