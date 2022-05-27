import styled from 'styled-components';

export const Container = styled.div`
    background: ${({theme}) => theme.primary};
    padding: 30px;

    @media only screen and (max-width: 800px)  {
        overflow-x: scroll;
        min-width: 500px;
    }
`;


export const MaxWidth = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 30px;
`;

export const Header = styled.h2`
    color: white;
    font-size: 80px;
`;

export const SubHeader = styled.h3`
    font-weight: 200;
    color: white;
    font-size: 30px;
`;

export const TimelineContainer = styled.div`
    color: white;
    max-height: 500px;
    overflow-y: scroll;
    border: 5px orange solid;
    border-radius: 5px;
    padding: 30px;
    text-align: center;
    width: 80%;
    margin: auto;
    margin-top: 50px;

    min-width: 300px;

    @media only screen and (max-width: 800px)  {
        width: 100%;
    }
`;

export const Card = styled.div`
    height: 100%;
    width: 100%;
    border: 1px red solid;
    min-height: 150px;
`;