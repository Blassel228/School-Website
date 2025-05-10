import React from 'react';
import styled from 'styled-components';
import image from "../Images/university-of-cambridge-2.svg"

const FooterContainer = styled.footer`
  background-color: #1d1d37; 
  color: white;
  padding: 30px 0;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const LogoText = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const Column = styled.div`
  flex: 1;
  margin-left: 40px;
`;

const Title = styled.h4`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 5px;
  font-size: 14px;
`;

const Copyright = styled.p`
  text-align: center;
  font-size: 12px;
  margin-top: 20px;
  color: #aaa;
`;

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <LogoContainer>
          <LogoImage src={image} alt="Logo" />
          <LogoText>Ridgeview Middle School</LogoText>
        </LogoContainer>

        <Column>
          <Title>QUICK NAVIGATION</Title>
          <LinkList>
            <LinkItem>About</LinkItem>
            <LinkItem>Academics</LinkItem>
            <LinkItem>Students</LinkItem>
            <LinkItem>Parents</LinkItem>
            <LinkItem>News</LinkItem>
          </LinkList>
        </Column>

        <Column>
          <Title>STAY CONNECTED</Title>
          <LinkList>
            <LinkItem>Facebook</LinkItem>
            <LinkItem>Twitter</LinkItem>
            <LinkItem>Instagram</LinkItem>
            <LinkItem>Youtube</LinkItem>
          </LinkList>
        </Column>

        <Column>
          <Title>GET IN TOUCH</Title>
          <p>
            500 Terry Francino Street<br />
            San Francisco, CA 94158<br />
            Tel 123-456-7890<br />
            info@mysite.com
          </p>
        </Column>
      </Container>

      <Copyright>© 2023 by Ridgeview Middle School. Powered and secured by [Your Platform]</Copyright>
    </FooterContainer>
  );
}

export default Footer;