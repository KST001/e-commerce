import styled from "styled-components";
import HeroSection from "./components/HeroSection";
const Home = () => {
  return (
    <>
      <Wrapper className="test">
        <HeroSection />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.bg};
  height: 100vh;
`;

export default Home;
