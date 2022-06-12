import React from 'react';
import { Winner, WinnerTitle, WinnerContainer, Container, Header, SubHeader, MaxWidth, PrizesContainer, PrizeContainer, PrizeImageContainer, PrizeImage, PrizeInfo, Name, Game, GamesContainer, PrizeInfoContainer } from './styled';

interface Prize {
    name: string;
    alt?: string;
    src: string;
    games: string[];
    winner?: string;
}

const prizes: Prize[] = [
    {
        name: 'Flatout Games Prize Package',
        src: '/prizes/flatout.png',
        alt: 'Flatout Games',
        games: [
            'Calico', 'Cascadia', 'Verdant',
        ],
        winner: 'Ian Torry'
    },
    {
        name: 'Leder Games Prize Package #1',
        src: '/prizes/leder.png',
        alt: 'Leder Games',
        games: [
            'Root', "Expansion of Winner's Choice",
        ],
        winner: 'Daniel Maciel'
    },
    {
        name: 'Leder Games Prize Package #2',
        src: '/prizes/leder.png',
        games: [
            'Oath: Chronicles of Empire & Exile',
        ],
        winner: 'Kevin Sheriff'
    },
    {
        name: 'Leder Games Prize Package #3',
        src: '/prizes/leder.png',
        games: [
            'Fort', 'Cats & Dogs Expansion'
        ],
        winner: 'Heather Goodge'
    },
    {
        name: 'Pandasaurus Games Prize Package',
        src: '/prizes/pandasaurus.png',
        games: [
            'Skater Summer', 'Skull Canyon', 'Sobek: 2 Player',
        ],
        winner: 'Jason Woolley'
    },
    {
        name: "Plan B Games Prize Package",
        src: '/prizes/planb.png',
        games: [
            'Yak',
            'Goodies Bundle'
        ],
        winner: 'Kyla Ulbricht'
    },
    {
        name: 'North Star Games Prize Package',
        src: '/prizes/northstar.png',
        games: [
            'Oceans'
        ],
        winner: 'Stephanie Kohen'
    },
    {
        name: 'Capstone Games Prize Package',
        src: '/prizes/capstone.png',
        games: [
            'Boonlake',
            'Riftforce'
        ],
        winner: 'Gavin Johnson'
    },
    {
        name: 'Game Brewer Prize Package',
        src: '/sponsors/gamebrewer.png',
        games: [
            'Fuji Koro'
        ],
        winner: 'Melenay Dolter'
    },
    {
        name: 'Kayenta Games Prize Package',
        src: '/sponsors/kayenta.png',
        games: [
            'Obsession Deluxe - Hand Assembled Version with all expansions!'
        ],
        winner: 'Crystal Zhao'
    },
    {
        name: 'Chip Theory Games Prize Package',
        src: '/sponsors/chiptheory.png',
        games: [
            'burncycle',
        ],
        winner: 'Brian Vandre'
    },
    {
        name: 'Mindclash Games Prize Package #1',
        src: '/sponsors/mindclash.png',
        games: [
            'Anachrony Essential Edition',
            'Exosuit Miniatures Pack'
        ],
        winner: 'Ben Javate'
    },
    {
        name: 'Mindclash Games Prize Package #2',
        src: '/sponsors/mindclash.png',
        games: [
            'Cerebria',
            'Forces of Balance expansion'
        ],
        winner: 'Christopher Clarkstone'
    },
    {
        name: 'Brotherwise Games Prize Package #1',
        src: '/sponsors/brotherwise.png',
        games: [
            'Overboss'
        ],
        winner: 'Austin G.'
    },
    {
        name: 'Brotherwise Games Prize Package #2',
        src: '/sponsors/brotherwise.png',
        games: [
            'Night of the Ninja'
        ],
        winner: 'Cody Newton'
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
        ],
        winner: 'Troy Seufert'
    },
    {
        name: 'IV Studio Prize Package #1',
        src: '/sponsors/IVStudio.png',
        games: [
            'Moonrakers Kickstarter Edition'
        ],
        winner: 'Josh LeMar'
    },
    {
        name: 'IV Studio Prize Package #2',
        src: '/sponsors/IVStudio.png',
        games: [
            'Moonrakers Kickstarter Edition',
        ],
        winner: 'Iris Behm'
    },
    {
        name: 'IV Studio Prize Package #3',
        src: '/sponsors/IVStudio.png',
        games: [
            'Veiled Fate (Plastic Mini Version)'
        ],
        winner: 'Dwayne Craig'
    },
    {
        name: 'Pegasus Spiele Prize Package',
        src: '/sponsors/pegasusspiele.png',
        games: [
            'Fire & Stone', 'First Rat', 
            'MicroMacro: Crime City', 
            'Talisman Adventures RPG Core Rulebook'
        ],
        winner: 'Matt Fulcher'
    },
    {
        name: 'Motor City Gameworks Prize Package',
        src: '/sponsors/motorcitygameworks.png',
        games: [
            'Motor City Kickstarter Pledge'
        ],
        winner: 'Christopher Helm'
    },
    {
        name: 'Cheap Sheep Games Prizes',
        src: '/sponsors/cheapsheep.png',
        games: [
            '2 separate prizes of Crimopolis Deluxe Edition'
        ],
        winner: 'Richard Diaz & Jonathan Reese'
    },
    {
        name: 'Stonemaier Games Prize Package',
        src: '/sponsors/stonemaier.png',
        games: [
            'Rolling Realms'
        ],
        winner: 'Ted Howell'
    },
    {
        name: 'AEG Prizes',
        src: '/prizes/aeg.png',
        games: [
            '10 Copies of Dog Lover',
        ],
        winner: 'Kevin Velasquez, Tyler Jones, Elizabeth Kauppila, Tyler Hackmann, Nicolas Barrioneuvo, Brian R., Jenny Martin, Justin Woods, Bill Webb, Matthew Walsh'
    },
    {
        name: 'Victory Pints Prize Package',
        src: '/prizes/victorypints.png',
        games: [
            'Radlands (Standard)', 
            'Point Salad', 
            'Bohnanza (25th Anniversary Edition)', 
            'Coloretto, Sushi Go, Wavelength',
        ],
        winner: 'Scott Tibbo'
    },
    {
        name: 'Board Game Bliss Prize Package',
        src: '/prizes/boardgamebliss.png',
        games: [
            'Calico', 
            'Dog Lover',
            'Sobek: 2 Player'
        ],
        winner: 'Mark Spitzig'
    },
    
    {
        name: "Dylann's Choices Prize Package",
        src: '/prizes/dylann.png',
        games: [
            'The Castles of Burgundy (Anniversary Edition)', 
            `Azul: Queen's Garden`, 
            'Witchstone', 
            'Biblios', 
            'AYCB Dice Bag',
        ],
        winner: 'Doug Southwick'
    },
    {
        name: "Carlo's Choices Prize Package",
        src: '/prizes/carlo.png',
        games: [
            'Keyflower', 
            'Res Arcana, Galaxy Trucker', 
            'Battle Line', 
            'High Society', 'AYCB Dice Bag',
        ],
        winner: 'Brandon Cooke'
    },
    {
        name: "Patreon Choice Prize Package",
        src: '/prizes/patreon.png',
        games: [
            'Viticulture: Essential Edition (+ Tuscany Expansion)', 
            'The Quest for El Dorado', 
            'Cascadia', 
            'Land vs Sea', 
            '7 Wonders: Duel', 
            'The Crew: The Quest for Planet Nine',
        ],
        winner: 'Bailey Paisson'
    },
    {
        name: "Mista Rau Gaming Prize Package",
        src: '/sponsors/mistarau.png',
        games: [
            'Gen7: A Crossroads Game', 
            'Top Gun Strategy Game (2020)', 
            "The Goonies: Escape With One-Eyed Willy's Rich Stuff", 
            'Revolution of 1828, Dinosaur Island: Rawr N Write',
        ],
        winner: 'Dylan Amirault'
    },
    {
        name: 'Red Raven Games Prize Package',
        src: '/sponsors/redraven.png',
        games: [
            'Deep Vents', 
            'Roam'
        ],
        winner: 'JJE McManus'
    }
];

const Prize = ({ src, name, games, winner }: Prize) => {
    return (
        <PrizeContainer>
            <PrizeInfoContainer>
                <PrizeImageContainer>
                    <PrizeImage src={`${process.env.BASE_PATH}${src}`} />
                </PrizeImageContainer>
            </PrizeInfoContainer>
            <PrizeInfo>
                <Name>{name}</Name>
                <GamesContainer>
                    <Game>{games.map((game, index) => `${index > 0 ? ', ' : ''}${game}`)}</Game>
                </GamesContainer>
            </PrizeInfo>
            {
                winner && (
                    <WinnerContainer>
                        <WinnerTitle>Winner(s):</WinnerTitle>
                        <Winner>{winner}</Winner>
                    </WinnerContainer>
                )
            }
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