import React from 'react';
import { Container, Header, MaxWidth, TimelineContainer, Card, SubHeader } from './styled';
import { Chrono, TimelineItem } from "react-chrono";
import { theme as aycbTheme } from 'components/theme/theme';

interface Item {
    time: string;
    game: string;
    description?: string;
}

const satItems: Item[] = [
    { 
        
        time: '12:00pm', 
        game: "Intro",
        description: "A short introduction to the event, Sara Riel, and AYCB.",
    },
    { 
        time: '12:20pm', 
        game: "Radlands",
        description: "As voted by our Patrons!",
    },
    { 
        time: '1:30pm', 
        game: "Blue Lagoon" 
    },
    { 
        time: '3:00pm', 
        game: "Modern Art" 
    },
    { 
        time: '5:00pm', 
        game: "Monsdrawsity" 
    },
    {
        time: '5:45pm', 
        game: "Anomia" 
    },
    { 
        time: '6:30pm', 
        game: "Just One" 
    },
    { 
        time: '7:30pm', 
        game: "One Night Ultimate Werewolf" 
    },
    { 
        time: '8:30pm', 
        game: "Dune: Imperium" 
    },
    { 
        time: '11:00pm', 
        game: "Marvel Champions" 
    },
];

const sunItems: Item[] = [
    { time: '12:30am', game: "The Quest for El Dorado" },
    { time: '1:45am', game: "Biblios" },
    { time: '2:45am', game: "Renature" },
    { time: '4:15am', game: "The Mind" },
    { time: '5:00am', game: "Santorini", description: "Best of 3!" },
    { time: '6:00am', game: "Cascadia" },
    { time: '7:15am', game: "Coloretto" },
    { time: '8:00am', game: "Kingdom Builder" },
    { time: '9:30am', game: "Azul: Queen's Garden" },
    { time: '11:00am', game: "Lost Cities and/or Battle Line", description: "If we have time we'll play both." },
];

const convertItems = (items: Item[]) => items.map(({
    time,
    game,
    description,
}) => ({
    title: time,
    cardTitle: game,
    cardDetailedText: description
}));

const convertedSatItems = convertItems(satItems);
const convertedSunItems = convertItems(sunItems);

// const RenderedItem = ({
//     item
// }: { item: TimelineItem }) => {
//     return (
//         <Card>

//         </Card>
//     )
// };

// const renderedItems = convertedItems.map((item, index) => (
//     <RenderedItem key={index} item={item} />
// ));

const theme = {
    primary: 'orange',
    secondary: 'white',
    titleColor: aycbTheme.primary,
};

const fontSizes = {
    cardTitle: '25px',
    cardText: "50px",
    cardSubtitle: "50px"
};

const defaultChronoProps = {
    activeItemIndex: -1,
    scrollable: false,
    fontSizes: fontSizes,
    cardHeight: 100,
    cardWidth: 500,
    theme: theme,
    hideControls: true,
    disableAutoScrollOnClick: true,
    disableClickOnCircle: true,
    useReadMore: false,
};

export const Schedule = () => {
    return (
        <Container>
            <MaxWidth>
                <Header id="schedule">Schedule</Header>
                <SubHeader>The event will start on Saturday, May 28th at 12pm/noon CST and end on Sunday, May 29th at 12pm/noon CST.</SubHeader>
                <TimelineContainer>
                    <SubHeader>Saturday</SubHeader>
                    <Chrono 
                        {...defaultChronoProps}
                        mode={"VERTICAL"}
                        items={convertedSatItems} 
                    >
                    </Chrono>
                    <SubHeader>Sunday</SubHeader>
                    <Chrono 
                        {...defaultChronoProps}
                        mode={"VERTICAL"}
                        items={convertedSunItems} 
                    >
                    </Chrono>
                </TimelineContainer>
            </MaxWidth>
        </Container>
    );
};