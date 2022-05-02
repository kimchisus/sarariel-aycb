import React from 'react';
import {
    Container,
    Header,
    HeaderItems,
    MaxWidthContainer,
    SubHeader,
    ImageContainer,
    HeroImage,
} from './styled';

export const Hero: React.FC = () => {
    return (
        <Container>
            <MaxWidthContainer>
                <HeaderItems>
                    <Header>All You Can Board and Sara Riel Charity Event</Header>
                    <SubHeader>
                        Come watch our charity stream for Mental Health Month and donate to get a chance to win prizes!
                    </SubHeader>
                </HeaderItems>
                <ImageContainer>
                    <HeroImage src={`${process.env.BASE_PATH}/heroimage.png`} />
                </ImageContainer>
            </MaxWidthContainer>
        </Container>
    );
};