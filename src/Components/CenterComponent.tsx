import styled from 'styled-components';
import image4 from '../Images/graduation4.jpg';
import image5 from '../Images/graduation3.jpg';
import Column from './Column.tsx';

const HeaderText = styled.p`
  color: #4e4fa0;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SideText = styled.p`
  color: #706e86;
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 0;
  padding: 0 2rem;
  margin-bottom: 1.5rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 0 0.5rem;
  }
`;

const Button = styled.button`
  background-color: #5959d6;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  width: fit-content;
  height: 2.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 auto;
  margin-bottom: 1.5rem;

  &:hover {
    background-color: #4e4fa0;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    width: 80%;
    max-width: 300px;
    padding: 0.6rem 1rem;
    font-size: 0.95rem;
  }
`;

const CenterComponentWrapper = styled.div`
  text-align: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

const ComponentsElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: transparent;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 2rem;
    border-radius: 0;
  }
`;

const FlexImageWrapper = styled.div`
  width: 50%;
  height: 400px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: 220px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }
`;

const FlexImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const FlexTextSection = styled(Column)`
  background-color: #1d1d37;
  width: 50%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  color: white;

  @media (max-width: 768px) {
    width: 100%;
    min-height: auto;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const CenterComponent = () => {
  return (
    <CenterComponentWrapper>
      <ComponentsElementWrapper>
        <FlexImageWrapper>
          <FlexImage src={image4} alt="Student Life" />
        </FlexImageWrapper>
        <FlexTextSection>
          <HeaderText>Student Life</HeaderText>
          <SideText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut aliquet magna purus eu nibh.
          </SideText>
          <Button>Apply for studying</Button>
        </FlexTextSection>
      </ComponentsElementWrapper>

      <ComponentsElementWrapper>
        <FlexTextSection>
          <HeaderText>Open Enrollment</HeaderText>
          <SideText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut aliquet magna purus eu nibh.
          </SideText>
          <Button>Learn More</Button>
        </FlexTextSection>
        <FlexImageWrapper>
          <FlexImage src={image5} alt="Enrollment" />
        </FlexImageWrapper>
      </ComponentsElementWrapper>
    </CenterComponentWrapper>
  );
};

export default CenterComponent;