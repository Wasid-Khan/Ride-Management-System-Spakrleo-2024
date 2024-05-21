import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import PromoSection from './PromoSection';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const RightSection = styled.div`
  flex: 1;
  background-color: #e53935;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

const LoginPage = () => {
  return (
    <Container>
      <LeftSection>
        <LoginForm />
      </LeftSection>
      <RightSection>
        <PromoSection />
      </RightSection>
    </Container>
  );
};

export default LoginPage;
