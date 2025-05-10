import styled from 'styled-components';
import graduationImage from '../Images/graduation.jpg';

const WelcomePageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${graduationImage});
  background-size: cover;
  background-position: center;
  position: relative; 
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
`;

const PurpleOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  background-color: #5d3ebc;
  color: white;
  width: 35%;
  max-width: 450px;
  padding: 2.5rem 3rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  z-index: 2;

  @media (max-width: 1024px) {
    width: 45%;
    padding: 2rem;
    left: 2%;
  }

  @media (max-width: 768px) {
    width: 60%;
    padding: 2rem;
    left: 2%;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 1.5rem;
    top: 50%;
    left: 5%;
  }
`;

const DiscoverButton = styled.button`
  background-color: #ffffff;
  color: #5d3ebc;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;

`;

const WelcomeSection = ({ headerOffset } : {headerOffset: number | undefined}) => {
  return (
    <WelcomePageWrapper style={{ marginTop: `${headerOffset}` }}>
      <PurpleOverlay>
        <p style={{ fontWeight: 'bold', fontSize: '2.5rem', margin: 0 }}>
          Back to School
        </p>
        <p
          style={{
            fontSize: '1.5rem',
            marginTop: '0.5rem',
            marginBottom: '1.5rem',
            opacity: 0.9,
          }}
        >
          Welcome to all of our students
        </p>
        <DiscoverButton>Discover the School</DiscoverButton>
      </PurpleOverlay>
    </WelcomePageWrapper>
  );
};

export default WelcomeSection;