import React from 'react';
import { Container, Container2, TextContainer, Logo, MaxWidth, AboutText, HostText, Text, AYCBLogo, EventText } from './styled';

export const About: React.FC = () => {
    return (
        <React.Fragment>
            <Container id="about">
                <MaxWidth>
                    <TextContainer>
                        <AboutText>About</AboutText>
                        <HostText>Sara Riel</HostText>
                        <Text>
                            {`Sara Riel's mission is to provide those individuals with mental health and substance use/addiction challenges a safe, inclusive and engaging environment where self-determined needs are valued, and all are assisted on their path to reaching their goals.`}
                        </Text>
                        <Text>
                            {`Our services include: Mental Health Counselling/Case Management, Community Mentorship, Peer Support Services, Peer Respite, Employment Services and Supportive Housing.`}
                        </Text>
                    </TextContainer>
                    <Logo src={`${process.env.BASE_PATH}/sara-riel-logo.jpg`} />
                </MaxWidth>
                <MaxWidth>
                    <AYCBLogo src={`${process.env.BASE_PATH}/logo.png`} />
                    <TextContainer>
                        <HostText>All You Can Board</HostText>
                        <Text>
                            Carlo and Dylann launched All You Can Board in January 2020. Together, they create videos about board games for their YouTube channel, including reviews, how-to-play videos, and much more. You can reach them by email at allyoucanboard@gmail.com, or you can check their website for how to join their free Discord server or reach them on social media.
                        </Text>
                    </TextContainer>
                </MaxWidth>
            </Container>
            <Container2>
                <MaxWidth>
                    <TextContainer>
                        <EventText>Event</EventText>
                        <Text>
                            The AYCB 24-hour Charity Livestream for Mental Health will be a special event broadcast on our YouTube board game channel to raise awareness for mental health and to raise funds for Sara Riel, a local mental health organization. The event will start on Saturday, May 28th at 12pm/noon CST and end on Sunday, May 29th at 12pm/noon CST. 
                        </Text>
                        <Text>
                        The livestream can be found on the All You Can Board YouTube channel on the day of the event, <b><a href="https://www.youtube.com/AllYouCanBoard">here</a></b>. It will also be embedded on this page!

    Viewers can tune in at any time to watch Carlo, Dylann and their friends play board games and/or to make a donation. 100% of all donations will go directly to Sara Riel. The more money folks donate, the more entries they will receive into random draws for various board game-related prize packs, many of which have been sponsored by board game publishers. Every 5 dollars that you choose to donate will earn you one entry into every prize package, so you’ll have plenty of chances to win one of these great prizes! (Limit of one prize package per person)
                        </Text>
                        <Text>
                        As part of their 12 months of giving, Carlo and Dylann are also fortunate to have the event sponsored by local production company Tripwire Media Group, who will be providing all the gear and production equipment to make the event possible.
                        </Text>
                    </TextContainer>
                </MaxWidth>
            </Container2>
        </React.Fragment>
    );  
};