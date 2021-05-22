import styled from 'styled-components';
import config from '../../utils/config';

const Container = styled.div`
  height: 6rem;
  align-content: center;
  align-items: center;
`;

const Footer = () => (
  <Container className="container is-flex">
    <p>Copyright © 2021 {config.siteName}.</p>
  </Container>
);

export default Footer;
