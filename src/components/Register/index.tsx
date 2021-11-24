import React, { useState } from 'react';
import styled from '@emotion/styled';
import { AiOutlinePlus } from 'react-icons/ai'
import file from '../../libs/api/file';
import auth from '../../libs/api/auth';
import imageCompression from 'browser-image-compression';
import { Link } from 'react-router-dom';

interface IRegister {
    name: string,
    id: string,
    password: string,
    passwordCheck: string,
    cellphone: number | string
}

const Register = () => {let img = new FormData();
    const [ registerInput, setRegisterInput ] = useState<IRegister>({
        name: "",
        id: "",
        password: "",
        passwordCheck: "",
        cellphone: ""
    });
    const [ errorMessage, setErrorMessage] = useState("");
    const [ profileUrl, setProfileUrl ] = useState("")
    const [ imageUrl, setImageUrl ] = useState("");
    const [fileData, setFileData] = useState<any>();
    const defaultImage = 'https://s3-projecflow-1.s3.amazonaws.com/images/60faa710-c21b-424b-a663-0407f905d413img.jpeg'

    const onImage = (event: any) => {
        setFileData(event.target.files[0]);
        const imageUrl = URL.createObjectURL(event.target.files[0]);
        setProfileUrl(imageUrl)
    };

    const onRegisterInput = (e: any) => {
        const { value, name } = e.target;
        const regex = /^[0-9\b -]{0,13}$/;
        if (name==="cellphone") {
            if(regex.test(value)){
                setRegisterInput({
                    ...registerInput,
                    [name]: value
                });
            }
        }else{
            setRegisterInput({
                ...registerInput,
                [name]: value
            });
            if(name === "passwordCheck"){
                registerInput.password !== value ? setErrorMessage("비밀번호를 확인해주세요") : setErrorMessage("")
            }
            if(name === "password"){
                registerInput.passwordCheck !== value ? setErrorMessage("비밀번호를 확인해주세요") : setErrorMessage("")
            }
        }
    }

    const onRegister = () => {
        if(!registerInput.id || !registerInput.name || !registerInput.password || !registerInput.passwordCheck || !registerInput.cellphone){
            setErrorMessage("빈칸을 모두 채워주세요")
        } else {
            setErrorMessage("")
        } 
        if(!fileData){
            auth.postRegister(registerInput.id, registerInput.name, registerInput.password, registerInput.cellphone, defaultImage)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        } else{
            const formData = new FormData();
            formData.append("file", fileData, fileData.name);
            
            file.postFile(formData)
            .then((res)=>{
                console.log(res)
                auth.postRegister(registerInput.id, registerInput.name, registerInput.password, registerInput.cellphone, res.data.data.fileUrl)
                .then((res) => {
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }



    return (
        <>
            <RegisterWrapper>
                <RegisterLeftBox encType="multipart/form-data">
                    <RegisterTitle>
                        <span>잡동사니</span>에 오신<br/>여러분을 환영합니다!
                    </RegisterTitle>
                    <input type="file"
                        onChange={onImage}
                        id="file"
                        accept="image/*"
                    />
                    <label htmlFor="file">
                    {
                        profileUrl === "" ?
                            <RegisterProfile>
                                <AiOutlinePlus/>
                            </RegisterProfile>
                        : <RegisterProfile><img src={profileUrl} alt="프로필이미지"/></RegisterProfile>
                        }
                    </label>
                </RegisterLeftBox>
                <RegisterRightBox>
                    <Title>회원 가입</Title>
                    <RegisterInput name="name" onChange={onRegisterInput} placeholder="이름" value={registerInput.name}/>
                    <RegisterInput name="id" onChange={onRegisterInput} placeholder="아이디" value={registerInput.id}/>
                    <RegisterInput name="password" onChange={onRegisterInput} placeholder="비밀번호" type="password" value={registerInput.password}/>
                    <RegisterInput name="passwordCheck" onChange={onRegisterInput} placeholder="비밀번호 확인" type="password" value={registerInput.passwordCheck}/>
                    <RegisterInput name="cellphone" onChange={onRegisterInput} placeholder="전화번호( '-' 제외 )" maxLength={11} value={registerInput.cellphone}/>
                    {
                        errorMessage !== "" &&
                        <ErrorMessage>{errorMessage}</ErrorMessage>
                    }
                    <RegisterButton onClick={onRegister}>회원가입</RegisterButton>
                    <LoginMove>이미 계정이 있으신가요? <Link to="/login">로그인하기</Link></LoginMove>
                </RegisterRightBox>
            </RegisterWrapper>
        </>
    );
}

export default Register;

const RegisterWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`

const RegisterLeftBox = styled.form`
    width: 450px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    input{
        display: none;
    }
`

const RegisterTitle = styled.div`
    font-size: 20px;
    span{
        font-size: 30px;
        color: #7190FF;
        font-weight: bold;
    }
`

const RegisterProfile = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: gray;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg{
        width: 50px;
        height: 50px;
        color: white
    }
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`

const RegisterRightBox = styled.div`
    width: 400px;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.div`
    font-size: 20px;
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
    bottom: 93px;
    color: red;
`

const RegisterInput = styled.input`
    width: 320px;
    box-sizing: border-box;
    padding: 5px;
    font-size: 16px;
    outline: none;
    border: none;
    border-bottom: 1px solid #7190FF;
    margin-bottom: 35px;
`

const RegisterButton = styled.button`
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