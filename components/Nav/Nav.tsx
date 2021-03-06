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
        title: 'Schedule',
        to: '#schedule',
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
                    {/* <Donate href="http://weblink.donorperfect.com/AllYouCanBoard" target="_blank">Donate (NA)</Donate>
                    <Donate href="https://www.paypal.com/donate/?hosted_button_id=H7KZ3399DLW3L" target="_blank">Donate (INTL)</Donate> */}
                </NavItemsContainer>
            </MaxWidthContainer>
        </Container>
    );
};