import React from 'react';
import { Container, Header, SubHeader, MaxWidth, PrizesContainer, PrizeContainer, PrizeImageContainer, PrizeImage, PrizeInfo, Name, Game, GamesContainer, PrizeInfoContainer, NameContainer } from './styled';

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
        name: "Plan B Games Prize Package",
        src: '/prizes/planb.png',
        games: [
            'Yak',
            'Goodies Bundle'
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
        name: 'Game Brewer Prize Package',
        src: '/sponsors/gamebrewer.png',
        games: [
            'Fuji Koro'
        ]
    },
    {
        name: 'Kayenta Games Prize Package',
        src: '/sponsors/kayenta.png',
        games: [
            'Obsession Deluxe - Hand Assembled Version with all expansions!'
        ]
    },
    {
        name: 'Chip Theory Games Prize Package',
        src: '/sponsors/chiptheory.png',
        games: [
            'burncycle',
        ]
    },
    {
        name: 'Mindclash Games Prize Package #1',
        src: '/sponsors/mindclash.png',
        games: [
            'Anachrony Essential Edition',
            'Exosuit Miniatures Pack'
        ]
    },
    {
        name: 'Mindclash Games Prize Package #2',
        src: '/sponsors/mindclash.png',
        games: [
            'Cerebria',
            'Forces of Balance expansion'
        ]
    },
    {
        name: 'Brotherwise Games Prize Package #1',
        src: '/sponsors/brotherwise.png',
        games: [
            'Overboss'
        ]
    },
    {
        name: 'Brotherwise Games Prize Package #2',
        src: '/sponsors/brotherwise.png',
        games: [
            'Night of the Ninja'
        ]
    },
    {
        name: 'Pencil First Games Prize Package',
        src: '/sponsors/pencilfirstgames.png',
        games: [
            'Skulk Hollow and Ancient Relics Mini-Expansion', 
            'The Whatnot Cabinet and Fascination Pack Mini-Expansion', 
            'Floriferous and Early Spring Mini-Expansion', 
            "Sunset Over Water and Nature's Muse Mini-Expansion", 
            "Herbaceous: Pocket Edition and Flavor Pack Mini-Expansion"
        ]
    },
    {
        name: 'IV Studio Prize Package #1',
        src: '/sponsors/IVStudio.png',
        games: [
            'Moonrakers Kickstarter Edition'
        ]
    },
    {
        name: 'IV Studio Prize Package #2',
        src: '/sponsors/IVStudio.png',
        games: [
            'Moonrakers Kickstarter Edition',
        ]
    },
    {
        name: 'IV Studio Prize Package #3',
        src: '/sponsors/IVStudio.png',
        games: [
            'Veiled Fate (Plastic Mini Version)'
        ]
    },
    {
        name: 'Pegasus Spiele Prize Package',
        src: '/sponsors/pegasusspiele.png',
        games: [
            'Fire & Stone', 'First Rat', 
            'MicroMacro: Crime City', 
            'Talisman Adventures RPG Core Rulebook'
        ]
    },
    {
        name: 'Motor City Gameworks Prize Package',
        src: '/sponsors/motorcitygameworks.png',
        games: [
            'Motor City Kickstarter Pledge'
        ]
    },
    {
        name: 'Cheap Sheep Games Prizes',
        src: '/sponsors/cheapsheep.png',
        games: [
            '2 separate prizes of Crimopolis Deluxe Edition'
        ]
    },
    {
        name: 'Stonemaier Games Prize Package',
        src: '/sponsors/stonemaier.png',
        games: [
            'Rolling Realms'
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
    }
];

const Prize = ({ src, name, games }: Prize) => {
    return (
        <PrizeContainer>
            <PrizeInfoContainer>
                <PrizeImageContainer>
                    <PrizeImage src={`${process.env.BASE_PATH}/${src}`} />
                </PrizeImageContainer>
            </PrizeInfoContainer>
            <PrizeInfo>
                <Name>{name}</Name>
                <GamesContainer>
                    <Game>{games.map((game, index) => `${index > 0 ? ', ' : ''}${game}`)}</Game>
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