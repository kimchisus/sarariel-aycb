import styled from 'styled-components';

export const Container = styled.div`
    padding: 50px 0;
    background: ${({ theme }) => theme.primary};
    border-bottom: 10px orange solid;
`;

export const Header = styled.h2`
    color: white;
    font-size: 80px;
`;

export const MaxWidth = styled.div`
    max-width: 1200px;
    margin: auto;
        padding: 30px;

`;

export const SubHeader = styled.h3`
    font-weight: 200;
    color: white;
    font-size: 30px;
`;

export const PrizesContainer = styled.div`
    padding: 50px;
    overflow-x: scroll;

    display: flex;
`;

export const PrizeContainer = styled.div`
    border: 1px rgba(0,0,0,.3) solid;
    border-radius: 5px;
    margin-right: 20px;
    background: white;
    min-width: 350px;

    text-align: center;
    padding: 20px;
`;

export const PrizeImageContainer = styled.div`
    margin: auto;

    height: 300px;
    width: 300px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PrizeImage = styled.img`
    width: 100%;
    border-radius: 5px;
`;

export const PrizeInfo = styled.div`
    margin-top: 15px;
    border-top: 1px rgba(0,0,0,.3) solid;
`;

export const Name = styled.h4`
    font-size: 25px;
    margin-top: 20px;
    min-height: 80px;
    text-transform: uppercase;
`;

export const GamesContainer = styled.div`
    text-align: center;
    text-decoration: none;
`;

export const Game = styled.div`
    font-size: 20px;
    font-weight: 300;
`;