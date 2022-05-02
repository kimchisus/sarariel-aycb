import React from 'react';
import { Container, TextContainer, Logo, MaxWidth, AboutText, HostText, Text } from './styled';

export const About: React.FC = () => {
    return (
        <Container id="about">
            <MaxWidth>
                <TextContainer>
                    <AboutText>About the Host</AboutText>
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
        </Container>
    );  
};