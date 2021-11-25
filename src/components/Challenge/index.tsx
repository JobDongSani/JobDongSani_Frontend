import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import ChallengeCard from './ChallengeCard';
import challenge from '../../libs/api/challenge';
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router';

const Challenge = () => {
    const navigate = useNavigate()
    const [ challengeData, setChallengeData ] = useState<any[]>([])
    const [ search, setSearch ] = useState('');

    useEffect(()=> {
        challenge.getChallengeList(0)
        .then((res) => {
            console.log(res.data.data.responses)
            setChallengeData(res.data.data.responses)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const onSearch = (e: any) => {
        e.preventDefault()
        challenge.getChallengeSearch(search, 0)
        .then((res) => {
            console.log(res)
            setChallengeData(res.data.data.responses)
        })
        .catch((err) => {
            console.log(err)
        })
    }

  return (
    <>
        <ChallengeWrapper>
            <ChallengeInputBox>
                <ChallengeAdd onClick={()=>navigate('/cardAdd/challenge-post')}>챌린지 생성</ChallengeAdd>
                <ChallengeInput placeholder="검색" onChange={(e: any) => setSearch(e.target.value)}/>
                <ChallengeButton onClick={onSearch}><AiOutlineSearch/></ChallengeButton>
                <select>
                    <option>최신순</option>
                    <option>좋아요순</option>
                </select>
            </ChallengeInputBox>

            <ChallengeList>
            {
                challengeData !== [] &&
                challengeData.map((i: any, index: number)=> {
                    return (
                        <ChallengeCard {...i} key={i.id}/>
                    )
                })
            }
            </ChallengeList>
        </ChallengeWrapper>
    </>
  );
}

export default Challenge;

const ChallengeInputBox = styled.form`
    width: 1300px;
    margin: 30px auto;
    margin-top: 50px;
    display: flex;
    align-items: flex-end;
    justify-content: right;
    @media screen and (max-width: 1600px) { 
        width: 1000px;
    }
`

const ChallengeAdd = styled.div`
    width: 100px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 10px;
    margin-right: 10px;
    cursor: pointer;
`

const ChallengeInput = styled.input`
    width: 200px;
    padding: 5px;
    font-size: 16px;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
`

const ChallengeButton = styled.button`
    background-color: none;
    background: none;
    border: none;
    border-bottom: 1px solid black;
    margin-right: 10px;

    svg{
        width: 30px;
        height: 30px;
    }
`

const ChallengeWrapper = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
`

const ChallengeList = styled.div`
    width: 1300px;
    margin: 0 auto;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(4, 333px);
    @media screen and (max-width: 1600px) { 
        width: 1000px;
        grid-template-columns: repeat(3, 333px);
    }
    @media screen and (max-width: 1340px) { 
        width: 1000px;
        grid-template-columns: repeat(3, 333px);
    }
`