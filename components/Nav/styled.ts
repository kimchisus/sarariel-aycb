import { theme } from 'components/theme/theme';
import styled from 'styled-components';

interface WithIsTop {
    isTop: boolean;
}

export const Container = styled.div<WithIsTop>`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    background: ${({ isTop, theme }) => isTop ? 'rgba(1,1,1,0)' : theme.primary };
    transition: all .5s ease;
    border-top: 5px ${({ isTop, theme }) => isTop ? 'rgba(1,1,1,0)' : theme.secondary } solid;
`;

export const LogoContainer = styled.div`
    height: 100%;
`;

export const Logo = styled.img`
    height: 200%;
    position: absolute;
    top: -20%;
    bottom: 0;
`;

export const NavItemsContainer = styled.div<WithIsTop>`
    overflow-x: scroll;
    font-weight: bold;
    text-transform: uppercase;
    color: ${({ isTop, theme }) => isTop ? 'black' : 'white'};

    @media only screen and (max-width: 800px)  {
        padding: 0 20px;
    }
`;

export const NavItemContainer = styled.a`
    text-decoration: none;
    padding: 20px;

    :hover {
        font-weight: 100;
    }

    @media only screen and (max-width: 800px)  {
        display: none;
    }
`;

export const MaxWidthContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

export const Donate = styled.a`
    display: inline-block;
    color: white;
    background: orange;
    border-radius: 3px;
    padding: 10px;
    margin-left: 15px;
`;