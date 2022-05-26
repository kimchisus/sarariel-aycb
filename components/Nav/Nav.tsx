import React, { useMemo } from 'react';
import { useTheme } from 'styled-components';
import { Container, Logo, NavItemsContainer, NavItemContainer, MaxWidthContainer, LogoContainer, Donate } from './styled';
import { useOnScroll } from './useOnScroll';

interface Item {
    to: string; // where to go
    title: string; // what to display
}

const items: Item[] = [
    {
        title: 'Home',
        to: '#',
    },
    {
        title: 'About',
        to: '#about',
    },
    {
        title: 'Sponsors',
        to: '#sponsors',
    },
   {
       title: 'Prizes',
       to: '#prizes',
   }
];

const NavItems = () => {
    const renderedItems = useMemo(() => items.map(({ title, to }) => (
        <NavItemContainer href={to} key={`${title}-${to}`}>
            { title }
        </NavItemContainer>
    )), []);

    return (
        <React.Fragment>
            { renderedItems }
        </React.Fragment>
    );
};

export const Nav: React.FC = () => {
    const theme = useTheme();
    const position = useOnScroll();
    // const isTop = useMemo(() => position === 0, [position]);
    const isTop = false; 

    return (
        <Container isTop={isTop}>
            <MaxWidthContainer>
                <LogoContainer>
                    <Logo src={`${process.env.BASE_PATH}/logo.png`} />
                </LogoContainer>
                <NavItemsContainer isTop={isTop}>
                    <NavItems />
                    <Donate href="donate.allyoucanboard.com" target="_blank">Donate</Donate>
                </NavItemsContainer>
            </MaxWidthContainer>
        </Container>
    );
};