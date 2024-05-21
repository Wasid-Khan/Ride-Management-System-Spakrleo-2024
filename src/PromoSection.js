import React from 'react';
import styled from 'styled-components';

const PromoContainer = styled.div`
  text-align: center;
`;

const Logo = styled.div`
  margin-bottom: 20px;
  font-size: 24px;
`;

const CallToAction = styled.div`
  font-size: 18px;
  margin-top: 20px;
`;

const PromoSection = () => {
  return (
    <PromoContainer>
      <Logo>🚐 Spark</Logo>
      <CallToAction>Learn more about Air Drive on <a href="https://spark.pl" style={{color: '#ffffff'}}>Spark.pl</a></CallToAction>
    </PromoContainer>
  );
};

export default PromoSection;
