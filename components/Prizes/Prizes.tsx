import React from 'react';
import { Container, Header, SubHeader, MaxWidth, PrizesContainer, PrizeContainer, PrizeImageContainer, PrizeImage, PrizeInfo, Name, Game, GamesContainer } from './styled';

interface Prize {
    name: string;
    alt?: string;
    src: string;
    games: string[];
}

const prizes: Prize[] = [
    {
        name: 'Flatout Games Prize Package',
        src: '/prizes/flatout.png',
        alt: 'Flatout Games',
        games: [
            'Calico', 'Cascadia', 'Verdant',
        ]
    },
    {
        name: 'Leder Games Prize Package #1',
        src: '/prizes/leder.png',
        alt: 'Leder Games',
        games: [
            'Root', "Expansion of Winner's Choice",
        ]
    },
    {
        name: 'Leder Games Prize Package #2',
        src: '/prizes/leder.png',
        games: [
            'Oath: Chronicles of Empire & Exile',
        ]
    },
    {
        name: 'Leder Games Prize Package #3',
        src: '/prizes/leder.png',
        games: [
            'Fort', 'Cats & Dogs Expansion'
        ]
    },
    {
        name: 'Pandasaurus Games Prize Package',
        src: '/prizes/pandasaurus.png',
        games: [
            'Skater Summer', 'Skull Canyon', 'Sobek: 2 Player',
        ]
    },
    {
        name: 'Victory Pints Prize Package',
        src: '/prizes/victorypints.png',
        games: [
            'TBD',
        ]
    },
    {
        name: 'Board Game Bliss Prize Package',
        src: '/prizes/boardgamebliss.png',
        games: [
            'TBD',
        ]
    },
    {
        name: 'AEG Prizes',
        src: '/prizes/aeg.png',
        games: [
            '10 Copies of Dog Lover',
        ]
    },
    {
        name: 'North Star Games Prize Package',
        src: '/prizes/northstar.png',
        games: [
            'Oceans', 'Evolution Climate',
        ]
    },
    {
        name: 'Capstone Games Prize Package',
        src: '/prizes/capstone.png',
        games: [
            'Boonlake',
            'Riftforce'
        ]
    },
    {
        name: "Dylann's Choices Prize Package",
        src: '/prizes/dylann.png',
        games: [
            'TBD',
        ]
    },
    {
        name: "Carlo's Choices Prize Package",
        src: '/prizes/carlo.png',
        games: [
            'TBD',
        ]
    },
    {
        name: "Patreon Choice Prize Package",
        src: '/prizes/patreon.png',
        games: [
            'TBD',
        ]
    },
    {
        name: "Plan B Games Prize Package",
        src: '/prizes/planb.png',
        games: [
            'Yak',
            'Goodies Bundle'
        ]
    }
];

const Prize = ({ src, name, games }: Prize) => {
    return (
        <PrizeContainer>
            <PrizeImageContainer>
                <PrizeImage src={`${process.env.BASE_PATH}/${src}`} />
            </PrizeImageContainer>
            
            <PrizeInfo>
                <Name>{name}</Name>
                <GamesContainer>
                    {games.map((game) => <Game key={game}>{game}</Game>)}
                </GamesContainer>
            </PrizeInfo>
        </PrizeContainer>
    );
};

export const Prizes: React.FC = () => {
    return (
        <Container id="prizes">
            <MaxWidth>
                <Header>Prizes</Header>
                <SubHeader>Watch the stream and donate to enter in a chance to win prizes!</SubHeader>
            </MaxWidth>
            <PrizesContainer>
                {prizes.map((prize) => <Prize key={prize.name} {...prize} />) }
            </PrizesContainer>
        </Container>
    );
};