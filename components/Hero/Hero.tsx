import React from 'react';
import {
    Container,
    Header,
    HeaderItems,
    MaxWidthContainer,
    SubHeader,
    ImageContainer,
    HeroImage,
    TotalRaised,
    TotalInfo,
    Info
} from './styled';

export const Hero: React.FC = () => {
    return (
        <Container>
            <MaxWidthContainer>
                <HeaderItems>
                    <Header>AYCB 24-hour Charity Livestream for Mental Health</Header>
                    <SubHeader>
                        THANK YOU to everyone who donated, watched, engaged and participated in this amazing event. We are beyond thankful. We will be collected all the entries and doing draws for prizes in the next few days, there are way more to go through than we anticipated! But we will contact winners directly and post the winners in the Prizes section once the draws are complete!
                    </SubHeader>
                </HeaderItems>
                <ImageContainer>
                    <Info>
                        <TotalInfo>
                            Final Total
                        </TotalInfo>
                        <TotalRaised>
                            $16,891.25
                        </TotalRaised>
                    </Info>
                    {/* <HeroImage src={`${process.env.BASE_PATH}/livestream_logo.png`} /> */}
                    {/* <iframe width="950" height="534" src="https://www.youtube.com/embed/x7SjxVnq3aE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                </ImageContainer>
            </MaxWidthContainer>
        </Container>
    );
};