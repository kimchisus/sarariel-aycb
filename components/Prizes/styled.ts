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

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const PrizeContainer = styled.div`
    margin-top: 20px;
    border: 1px rgba(0,0,0,.2) solid;
    border-radius: 5px;
    margin-right: 20px;
    background: white;
    min-width: 350px;
    width: 350px;

    box-shadow: 0 0 10px 5px rgba(0,0,0,.3);
    margin-bottom: 50px;
    text-align: center;
`;

export const PrizeInfoContainer = styled.div`
    position: relative;
    height: 60px;
    margin-bottom: 35px;
    border-bottom: 1px rgba(0,0,0,.3) solid;
`;

export const PrizeImageContainer = styled.div`
    position: absolute;
    box-shadow: 0 0 5px 1px rgba(0,0,0,.3);
    background: white;
    top: -50px;
    left: 0;
    right: 0;
    margin: auto;

    flex-shrink: 0;
    height: 150px;
    width: 150px;
    overflow: hidden;
    border: 1px rgba(0,0,0,.3) solid;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 10px;
`;

export const PrizeImage = styled.img`
    width: 100%;
    border-radius: 5px;
`;

export const PrizeInfo = styled.div`
    margin-top: 40px;
    padding: 20px;
`;

export const Name = styled.h4`
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 10px;
`;

export const NameContainer = styled.div`
`;

export const GamesContainer = styled.div`
    text-decoration: none;
`;

export const Game = styled.span`
    font-size: 15px;
    padding: 5px 0;
    font-weight: 300;
    color: rgba(0,0,0,.5);
`;