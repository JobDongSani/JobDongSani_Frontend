import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import {imageAdd} from '../../assets'
import challenge from '../../libs/api/challenge';
import donation from '../../libs/api/donation';
import file from '../../libs/api/file';

const CardAdd = () => {
    const navigate = useNavigate()
    const { type, id } = useParams()
    const [fileData, setFileData] = useState<any>();
    const [title, setTitle] = useState('');
    const [ profileUrl, setProfileUrl ] = useState("")
    const [ inputData, setInputData ] = useState({
        title: "",
        content: "",
        contact: "",
        address: "",
        introduce: "",
        startDate: "",
        endDate: ""
    });

    useEffect(() => {
        type === "comment-post" && setTitle("챌린지 결과 작성")
        type === "donation-post" && setTitle("나눔하기 작성")
        type === "challenge-post" && setTitle("챌린지 작성")

    },[])

    const onInputChange = (e: any) => {
        const { value, name} = e.target
        setInputData({
            ...inputData,
            [name]: value
        })
    }

    const onImage = (event: any) => {
        setFileData(event.target.files[0]);
        const imageUrl = URL.createObjectURL(event.target.files[0]);
        setProfileUrl(imageUrl)
    };

    const onInputDate = (e: any) => {
        let { value, name } = e.target
        if(!value) return "";
        value=value.replace(/\s/gi, "");
        try{
            if(value.length === 8) {
                value = value.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
            }
        } catch(e) {
            return value
        }
        setInputData({
            ...inputData,
            [name]: value
        });
        
    }

    const ChallengePost = (imageUrl: string) => {
        challenge.postChallenge(inputData.title, inputData.startDate, inputData.endDate, inputData.content, inputData.introduce, imageUrl)
        .then((res) => {
            navigate('/')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const DoationPost = (imageUrl: string) => {
        donation.postDonation(inputData.title, inputData.content, inputData.contact, inputData.address, imageUrl)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const CommentPost = (imageUrl: string) => {
        challenge.postComment(Number(id), inputData.title, inputData.startDate, inputData.endDate, imageUrl, inputData.content)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const onSendData = () => {
        const formData = new FormData();
        formData.append("file", fileData, fileData.name);
        
        file.postFile(formData)
        .then((res)=>{
            type === 'challenge-post' && ChallengePost(res.data.data.fileUrl)
            type === 'donation-post' && DoationPost(res.data.data.fileUrl)
            type === 'comment-post' && CommentPost(res.data.data.fileUrl)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <>
            <Head>{title}</Head>
            <CardAddWrapper>
                <ContentBox>
                    <BackgroundImageBox>
                        <input type="file"
                            onChange={onImage}
                            id="file"
                            accept="image/*"
                        />
                        <label htmlFor="file">
                        {
                            profileUrl === "" ? <BackgroundImage><img src={imageAdd} alt="프로필" /></BackgroundImage>
                            : <BackgroundImage><img src={profileUrl} alt="프로필이미지"/></BackgroundImage>
                            }
                        </label>
                    </BackgroundImageBox>
                    <InputBox>
                        <CardAddInput name="title" placeholder="제목" onChange={onInputChange} value={inputData.title}/>
                        {
                            type === 'challenge-post' &&
                            <CardAddInput name="introduce"  placeholder="한 줄 소개(최대 25자)" maxLength={30} onChange={onInputChange} value={inputData.introduce}/>
                        }
                        <CardAddInputArea name="content"  placeholder="내용" cols={30} onChange={onInputChange} value={inputData.content}/>
                        {
                            type === 'challenge-post' && (
                                <CardAddInputDate>
                                    <CardAddInput name="startDate"  placeholder="시작일( 21-11-24 )" onChange={onInputDate} value={inputData.startDate}/>
                                    <div> ~ </div>
                                    <CardAddInput name="endDate"  placeholder="마감일( 21-11-26 )" onChange={onInputDate} value={inputData.endDate}/>
                                </CardAddInputDate>
                            )
                        }
                        {
                            type === 'comment-post' && (
                                <CardAddInputDate>
                                    <CardAddInput name="startDate"  placeholder="시작일( 21-11-24 )" onChange={onInputDate} value={inputData.startDate}/>
                                    <CardAddInput name="endDate"  placeholder="마감일( 21-11-26 )" onChange={onInputDate} value={inputData.endDate}/>
                                </CardAddInputDate>
                            )
                        }
                        {
                            type === 'donation-post' && (
                                <>
                                    <CardAddInput name="contact"  placeholder="연락처" onChange={onInputChange} value={inputData.contact}/>
                                    <CardAddInput name="address"  placeholder="주소" onChange={onInputChange} value={inputData.address}/>
                                </>
                            )
                        }
                    </InputBox>
                </ContentBox>
                <div>
                    <Button onClick={onSendData}>생성</Button>
                </div>
            </CardAddWrapper>
        </>
    );
}

export default CardAdd;

const Head = styled.div`
    margin: 0 auto;
    font-size: 24px;
    font-weight: bold;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
`

const CardAddWrapper = styled.div`
    z-index: -1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`

const ContentBox = styled.div`
    width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
`

const BackgroundImageBox = styled.div`
    input{
        display: none;
    }
`
const BackgroundImage = styled.div`
    width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        cursor: pointer;
        width: 400px;
        height: 400px;
    }
`

const CardAddInputDate = styled.div`
    width: 320px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input{
        width: 150px;
        box-sizing: border-box;
        padding: 5px;
        font-size: 16px;
        outline: none;
        border: none;
        border-bottom: 1px solid #7190FF;
        margin-bottom: 35px;
    }
`

const InputBox = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const CardAddInput = styled.input`
    width: 320px;
    box-sizing: border-box;
    padding: 5px;
    font-size: 16px;
    outline: none;
    border: none;
    border-bottom: 1px solid #7190FF;
    margin-bottom: 35px;
`

const CardAddInputArea = styled.textarea`
    width: 320px;
    height: 180px;
    box-sizing: border-box;
    padding: 5px;
    font-size: 16px;
    outline: none;
    border: none;
    border-bottom: 1px solid #7190FF;
    margin-bottom: 35px;
    resize: none;
`

const Button = styled.button`
    width: 150px;
    height: 30px;
    border: none;
    border-radius: 10px;
    color: white;
    margin-top: 20px;
    background-color: #7190FF;
    font-size: 16px;
`