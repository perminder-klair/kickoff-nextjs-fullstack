import styled from 'styled-components';

const Container = styled.div`
  height: 6rem;
  align-content: center;
  align-items: center;
`;

const Footer = () => (
  <Container className="container is-flex">
    <p>Copyright © 2020 Kickoff NextJs.</p>
  </Container>
);

export default Footer;
