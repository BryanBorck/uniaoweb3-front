import React from 'react';
import styled from 'styled-components';
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import SocialFollow from "./SocialFollow"
import bkg from '../images/layer_v1.png';
import blk from '../images/photo_cover.png';

export default function Home() {

    const history = useNavigate();

    return (
        <HomeStyle>
            <Header/>
            <TopHomeStyle>
                <TopLStyle>
                    <SiteTitleStyle>Buy, trade and hold cBios</SiteTitleStyle>
                    <SiteSubTitleStyle>Discover more and help the brazilian ecosystem</SiteSubTitleStyle>
                    <ConnectStyle onClick={() => history("/connect")}>Conecte sua carteira</ConnectStyle>
                    <SocialFollow />
                </TopLStyle>
                <TopRStyle>
                    <ImgRStyle></ImgRStyle>
                    <PhotoStyle src={blk} alt="" />
                </TopRStyle>
            </TopHomeStyle>
            <NumHomeStyle>
                <NumDataStyle>
                    <NumBoxStyle>10k+</NumBoxStyle>
                    <TextBoxStyle>transações realizadas</TextBoxStyle>
                </NumDataStyle>
                <NumDataStyle>
                    <NumBoxStyle>20M+</NumBoxStyle>
                    <TextBoxStyle>de reais movimentados</TextBoxStyle>
                </NumDataStyle>
                <NumDataStyle>
                    <NumBoxStyle>100+</NumBoxStyle>
                    <TextBoxStyle>Stakeholders no app</TextBoxStyle>
                </NumDataStyle>
            </NumHomeStyle>
            <MiddleHomeStyle></MiddleHomeStyle>
            <BottomHomeStyle></BottomHomeStyle>
        </HomeStyle>
    );
};

const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url(${bkg});
    height: 1550px;
    background-size: 1600px;
    align-items: center;
    width: 100%;
`;

const TopHomeStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    height: 360px;
    margin-top: 100px;
`;

const TopLStyle = styled.div`
    width: 60%;
`;

const SiteTitleStyle = styled.div`
    font-size: 36pt;
    letter-spacing: 1pt;
    color: #FFFFFF;
    font-weight: 700;
    vertical-align: middle;
    line-height: 100px; 
`;

const SiteSubTitleStyle = styled.div`
    margin-top: 10px;
    font-size: 24pt;
    letter-spacing: 4pt;
    width: 60%;
    color: #FFFFFF;
    font-weight: 300;
    vertical-align: middle;
`;

const ConnectStyle = styled.button`
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    height: 50px;
    width: 70%;
    background-image: linear-gradient(60deg, #41FFB1, #3FBBFE);
    border-radius: 30px;
    border: 0px solid #2F2F2F;
    font-size: 16pt;
    font-weight: 600;
    letter-spacing: 2pt;
    color: #212121;
    :hover {
        color: #FFFFFF;
        background: linear-gradient(#2F2F2F, #2F2F2F) padding-box,
                    linear-gradient(60deg, #41FFB1, #3FBBFE) border-box;
        border-radius: 30px;
        border: 2px solid transparent;
        transition: 0.3s;
        cursor: pointer;
    } 
    :focus {
        border: 2px solid #FFFFFF;
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;

const SocialMediaStyle = styled.div`
    margin-top: 30px;
    margin-left: 10px;
    width: 20%;
    height: 40px;
    border-radius: 10px;
    background-color: #FFFFFF;
`;

const TopRStyle = styled.div`
    width: 40%;
`;

const ImgRStyle = styled.div`
    margin-left: 20%;
    width: 80%;
    height: 30%;
    border-radius: 40px;
`;

const PhotoStyle = styled.img`
    width: 100%;
`;

const NumHomeStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 75%;
    height: 200px;
    border-radius: 40px;
    margin-bottom: 20px;
    margin-top: 20px;
`;

const NumDataStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    height: 100%;
    background-color: rgb(47, 47, 47, 0.3);
    border-radius: 40px;
    border: 4px solid #212121;
    :hover {
        transform: translateY(-10px);
        transition: transform 600ms;
    }
`;

const NumBoxStyle = styled.div`
    width: 60%;
    height: 50%;
    font-size: 36pt;
    font-weight: 700;
    letter-spacing: 5pt;
    text-align: center;
    vertical-align: middle;
    line-height: 100px; 
    color: #FFFFFF;
`;

const TextBoxStyle = styled.div`
    width: 60%;
    height: 50%;
    font-size: 20pt;
    font-weight: 400;
    letter-spacing: 1pt;
    text-align: center;
    vertical-align: middle;
    line-height: 40px; 
    color: #FFFFFF;
`;

const MiddleHomeStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-image: linear-gradient(60deg, #41FFB1, #3FBBFE);
    width: 100%;
    height: 440px;
`;

const BottomHomeStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #212121;
    width: 100%;
    height: 320px;
`;