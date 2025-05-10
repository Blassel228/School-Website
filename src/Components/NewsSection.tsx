import React from 'react';
import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';
import image1 from '../Images/graduation1.jpg';
import image2 from '../Images/graduation2.jpg';
import image3 from '../Images/graduation3.jpg';

const Container = styled.section`
  width: 100%;
  background: linear-gradient(to bottom, white 50%, #5959d6 50%);
  padding-bottom: 4rem;

  @media (max-width: 768px) {
    padding-bottom: 2rem;
  }
`;

const SectionHeader = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 1rem;

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 4rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const ReadMoreButton = styled.button`
  background-color: #5d3ebc;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #4a2f92;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 90%;
    max-width: 300px;
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
  }
`;

interface CardProps {
  image: string;
}

const CardContainer = styled.div<CardProps>`
  width: 400px;
  height: 300px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
  transition: 0.5s ease;
  border-radius: 12px;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 90%;
    max-width: 400px;
  }

  @media (max-width: 480px) {
    height: 220px;
  }
`;

const DateText = styled.p`
  color: white;
  font-size: 1rem;
  margin-left: 1rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const CardText = styled.p`
  position: absolute;
  bottom: 2rem;
  color: white;
  font-size: 2.5rem;
  border-bottom: 2px solid white;
  margin-left: 1rem;
  margin-right: 1rem;
  padding-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
    bottom: 1rem;
  }
`;

const NewsSection = () => {
  return (
    <Container>
      <SectionHeader>Latest News</SectionHeader>

      <CardsWrapper>
        <CardContainer image={image1}>
          <DateText>22 March | 2 min</DateText>
          <CardText>Learning at Home Effectively</CardText>
        </CardContainer>

        <CardContainer image={image2}>
          <DateText>22 March | 1 min</DateText>
          <CardText>Get To Know Your Teachers</CardText>
        </CardContainer>

        <CardContainer image={image3}>
          <DateText>22 March | 2 min</DateText>
          <CardText>The New Safety Regulation</CardText>
        </CardContainer>
      </CardsWrapper>

      <Footer>
        <ReadMoreButton>
          Read All News{' '}
          <FiArrowRight size={18} style={{ marginLeft: '0.5rem', verticalAlign: 'middle' }} />
        </ReadMoreButton>
      </Footer>
    </Container>
  );
};

export default NewsSection;