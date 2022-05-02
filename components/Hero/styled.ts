import styled from 'styled-components';

export const Container = styled.div`
    height: 800px;
    width: 100%;
    background: ${({theme}) => theme.primary};
    margin-bottom: 200px;

    @media only screen and (max-width: 800px)  {
        height: initial;
        margin-bottom: 30px;
    }
`;

export const MaxWidthContainer = styled.div`
    height: 100%;
    width: 100%;
    margin: auto;
    max-width: 1200px;
`;

export const HeaderItems = styled.div`
    flex: 1;
    padding: 30px;
    text-align: center;
    color: white;
`;

export const Header = styled.h1`
    font-size: 5em;
    line-height: 100%;
    max-width: 700px;
    margin: auto;

    @media only screen and (max-width: 800px)  {
        font-size: 50px;
    }
`;

export const SubHeader = styled.h2`
    font-size: 20px;
    font-weight: 300;
    max-width: 800px;
    margin: auto;
    margin-top: 30px;
`;

export const ImageContainer = styled.div`
    position: relative;
    height: 600px;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 800px)  {
        display: none;
    }
`;

export const HeroImage = styled.img`
    left: 0;
    right: 0;
    height: 100%;
    margin: auto;
`;