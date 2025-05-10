import { forwardRef, useEffect } from 'react';
import styled from 'styled-components';
import Column from './Column';
import Row from './Row';
import image from '../Images/university-of-cambridge-2.svg';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  border-bottom: 1px solid #eee;
  z-index: 1000;
`;

const LoginButton = styled.button`
  background: none;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 4px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const Icon = styled.div`
  font-size: 1.3rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  color: #555;
  transition: color 0.2s;

  &:hover {
    color: #0077ff;
  }
`;

const CenterSection = styled(Row)`
  align-items: center;
  gap: 1rem;
  font-weight: bold;
  color: black;
`;

const Logo = styled.img`
  height: 40px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const LeftSection = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 1rem;
  width: 200px;
  outline: none;

  &::placeholder {
    color: #aaa;
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  pointer-events: none;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  color: #888;
  font-size: 1.2rem;
`;

interface HeaderProps {
  setHeaderHeight: (height: number | undefined) => void;
}

const Header = forwardRef<HTMLDivElement, HeaderProps>(({ setHeaderHeight }, ref) => {
  useEffect(() => {
    if (ref && typeof ref !== 'function' && ref.current) {
      const height = ref.current?.offsetHeight;
      setHeaderHeight(height);
    }

    const handleResize = () => {
      if (ref && typeof ref !== 'function' && ref.current) {
        setHeaderHeight(ref.current?.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [ref]);

  return (
    <HeaderContainer ref={ref}>
      <LeftSection>
        <SearchIcon>
          <FiSearch />
        </SearchIcon>
        <SearchInput type="text" placeholder="Search..." />
      </LeftSection>

      <CenterSection>
        <Logo src={image} alt="Emblem" />
        <Column>
          <div style={{ fontSize: '1.1rem' }}>Ridgeview</div>
          <div style={{ fontSize: '0.6rem', color: 'gray' }}>Middle School</div>
        </Column>
      </CenterSection>

      <RightSection>
        <LoginButton>Log in</LoginButton>
        <SocialIcons>
          <Icon as="a" href="#" aria-label="Facebook">
            <FaFacebook />
          </Icon>
          <Icon as="a" href="#" aria-label="Twitter">
            <FaTwitter />
          </Icon>
          <Icon as="a" href="#" aria-label="Instagram">
            <FaInstagram />
          </Icon>
        </SocialIcons>
      </RightSection>
    </HeaderContainer>
  );
});

export default Header;