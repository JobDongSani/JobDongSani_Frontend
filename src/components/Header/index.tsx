import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router';

const Header = () => {
    const navigate = useNavigate();

  return (
    <>
        <HeaderWrapper>
            <HeaderContent>
                <LogoBox>
                    <div>fhrh</div>
                    <Title>잡동사니</Title>
                </LogoBox>
                
                <ListBox>
                    <List onClick={() => navigate('/donation')}>정크기부</List>
                    <List onClick={() => navigate('/challenge')}>챌린지</List>
                    <List onClick={() => navigate('/login')}>로그인</List>
                </ListBox>
            </HeaderContent>
        </HeaderWrapper>
    </>
  );
}

export default Header;

const HeaderWrapper = styled.div`
    width: 100%;
    height: 45px;
    position: sticky;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
`

const HeaderContent = styled.div`
    width: calc(100% - 300px);
    height: 100%;
    display: flex;
    justify-content: space-between;
`

const LogoBox = styled.div`
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #7190FF;
`

const ListBox = styled.ul`
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
`

const List = styled.li`
    width: 100px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    cursor: pointer;
    z-index: 99;
    position: relative;
    ::before, ::after{
        content: '';
        border-bottom: solid 2px #7190FF;
        position: absolute;
        bottom: 0;
        width: 0;
        -webkit-transition: all 0.2s ease;
            transition: all 0.22s ease;
    }
    ::before {
        left: 50px;
    }
    ::after{
        right: 50px;
    }
    &:hover::before, &:hover::after{
        width: 50px;
    }
`