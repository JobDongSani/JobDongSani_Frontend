import React, { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import auth from '../../libs/api/auth';

const Login = () => {
  const [ errorMessage, setErrorMessage ] = useState("")
  const [ loginInput, setLoginInput ] = useState({
    id: "",
    password: ""
  })

  const onLoginInput = (e: any) => {
    const { name, value} = e.target;
    setLoginInput({
      ...loginInput,
      [name]: value
    })
  }

  const onLogin = () => {
    if(!loginInput.id || !loginInput.password){
        setErrorMessage("빈칸을 모두 채워주세요")
    } else {
        setErrorMessage("")
    }
    auth.postLogin(loginInput.id, loginInput.password)
    .then((res) => {
      console.log(res.data.data.accessToken)
      localStorage.setItem('access_token', res.data.data.accessToken)
    })
    .catch((err)=> {
      console.log(err)
    })
    setLoginInput({
      id: "",
      password: ""
    })
  }

  return (
    <>
      <LoginWrapper>
        <LoginLeftBox>
            <Title>로그인</Title>
            <LoginInput name="id" onChange={onLoginInput} placeholder="아이디" value={loginInput.id}/>
            <LoginInput name="password" onChange={onLoginInput} placeholder="비밀번호" type="password" value={loginInput.password}/>
            {
                errorMessage !== "" &&
                <ErrorMessage>{errorMessage}</ErrorMessage>
            }
            <LoginButton onClick={onLogin}>로그인</LoginButton>
            <LoginMove>회원이 아니신가요? <Link to="/register">회원가입하기</Link></LoginMove>
        </LoginLeftBox>
      </LoginWrapper>
    </>
  );
}

export default Login;

const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`


const LoginLeftBox = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`

const LoginMove = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #868686;
  a{
      text-decoration: none;
      color: #7190FF;
  }
`

const ErrorMessage = styled.div`
  font-size: 14px;
  position: absolute;
  bottom: 113px;
  color: red;
`

const LoginInput = styled.input`
  width: 320px;
  box-sizing: border-box;
  padding: 5px;
  font-size: 16px;
  outline: none;
  border: none;
  border-bottom: 1px solid #7190FF;
  margin-bottom: 40px;
`

const LoginButton = styled.button`
  width: 320px;
  height: 40px;
  font-size: 16px;
  color: white;
  background-color: #7190FF;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`