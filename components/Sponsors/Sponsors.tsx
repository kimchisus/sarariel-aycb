import React, { memo } from 'react';
import { Container, List, SponsorContainer, SponsorImage } from './styled';

interface Sponsor {
    src: string; // The source for the image to be rendered.
    alt?: string; // Alt text

}

const sponsors = [
    {
        src: '/sponsors/aeg.png',
        alt: 'aeg'
    },
    {
        src: '/sponsors/flatout.png',
        alt: 'flatout games'
    },
    {
        src: '/sponsors/northstar.png',
        alt: 'northstar games',
    },
    {
        src: '/sponsors/pandasaurus.png',
        alt: 'pandasaurus games',
    },
    {
        src: '/sponsors/victorypints.png',
        alt: 'victory pints',
    },
    {
        src: '/sponsors/capstone.png',
        alt: 'Capstone Games',
    },
    {
        src: '/sponsors/leder.png',
        alt: 'leder games'
    },
    {
        src: '/sponsors/tripwire.png',
        alt: 'trip wire',
    },
    {
        src: '/sponsors/planb.png',
        alt: 'plan b'
    }
    
];

const SponsorItem = memo(({ src, alt }: Sponsor) => (
    <SponsorContainer>
        <SponsorImage src={`${process.env.BASE_PATH}/${src}`} alt={alt} />
    </SponsorContainer>
));

SponsorItem.displayName = 'SponsorItem';

const ListItems = memo(() => {
    return (
        <React.Fragment>
            {sponsors.map((sponsor: Sponsor) => <SponsorItem key={sponsor.src} {...sponsor} />) }
        </React.Fragment>
    )
});

ListItems.displayName = 'ListItems';

export const Sponsors: React.FC = () => {
    return (
        <Container id="sponsors">
            <h2>SPONSORS</h2>
            <List>
                <ListItems />
            </List>
        </Container>
    );
};