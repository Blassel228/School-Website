import styled from 'styled-components';

const SeparatorWrapper = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const SeparatorTitle = styled.h2`
  font-size: 2.5rem;
  margin: 0;
  font-weight: bold;
  color: #5d3ebc;
`;

const SeparatorDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin: 0.5rem 0 1.5rem;
`;

const SeparatorButton = styled.button`
  background-color: #5d3ebc;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4a2f92;
    transform: scale(1.05);
  }
`;

const Separator = () => {
  return (
    <SeparatorWrapper>
      <SeparatorTitle>Our Programs</SeparatorTitle>
      <SeparatorDescription>
        Discover the opportunities available to our students.
      </SeparatorDescription>
      <br />
      <SeparatorButton>Explore Programs</SeparatorButton>
    </SeparatorWrapper>
  );
};

export default Separator;