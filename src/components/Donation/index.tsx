import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import DonationCard from './DonationCard';
import donation from '../../libs/api/donation';
import { useNavigate } from 'react-router';
import { AiOutlineSearch } from 'react-icons/ai';

const Donation = () => {
    const [ donationData, setDonationData ] = useState<any[]>([])
    const [ search, setSearch ] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        donation.getDonationList()
        .then((res) => {
            setDonationData(res.data.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const onSearch = (e: any) => {
        e.preventDefault()
        // Donation.getDonationSearch(search, 0)
        // .then((res) => {
        //     console.log(res)
        //     setDonationData(res.data.data.responses)
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
    }

  return (
    <>
        <DonationWrapper>
            <DonationInputBox>
                <DonationAdd onClick={()=>navigate('/cardAdd/donation-post')}>나눔하기</DonationAdd>
                <DonationInput placeholder="검색" onChange={(e: any) => setSearch(e.target.value)}/>
                <DonationButton onClick={onSearch}><AiOutlineSearch/></DonationButton>
                <select>
                    <option>최신순</option>
                </select>
            </DonationInputBox>
            <DonationList>
            {
                donationData.map((i: any, index: number)=> {
                    return (
                        <DonationCard {...i} key={i.id}/>
                    )
                })
            }
            </DonationList>
        </DonationWrapper>
    </>
  );
}

export default Donation;


const DonationInputBox = styled.form`
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

const DonationAdd = styled.div`
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

const DonationInput = styled.input`
    width: 200px;
    padding: 5px;
    font-size: 16px;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
`

const DonationButton = styled.button`
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

const DonationWrapper = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
`

const DonationList = styled.div`
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