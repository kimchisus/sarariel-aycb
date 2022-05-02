import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 100px;

    @media only screen and (max-width: 800px)  {
        margin-bottom: 50px;
    }
`;

export const MaxWidth = styled.div`
    margin: auto;
    max-width: 1200px;
    display: flex;
    align-items: center;
`;

export const AboutText = styled.h3`
    font-weight: 200;
    font-size: 30px;

    @media only screen and (max-width: 800px)  {
        font-size: 20px;
    }
`;

export const HostText = styled.h2`
    font-size: 80px;

    @media only screen and (max-width: 800px)  {
        font-size: 50px;
    }
`;

export const Text = styled.p`
    font-weight: 100;
    line-height: 38px;
`;

export const TextContainer = styled.div`
    padding: 0 30px;
    font-size: 25px;
    min-width: 500px;

    @media only screen and (max-width: 800px)  {
        font-size: 20px;
        min-width: initial;
    }
`;

export const Logo = styled.img`
    height: 150px;

    @media only screen and (max-width: 1000px)  {
        display: none;
    }
`;