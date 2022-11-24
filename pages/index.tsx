import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <Main>
        <Head>
          <Title>Hoi, ik ben Lex.</Title>
          <SubTitle>front-end web developer</SubTitle>
        </Head>
        <SideTitle>Lex Tirajoh.</SideTitle>
      </Main>
    </>
  );
}

const Main = styled.main`
  display: grid;
  grid-template-columns: 9fr 1fr;
  width: 100vw;
  height: 100vh;
  /* border: 1px solid red; */
`;
const Head = styled.header`
  grid-column-start: 1 / 2;
  position: relative;
`;
const Title = styled.h1`
  position: absolute;
  top: 0;
  left: 50px;
  font-size: 4rem;
`;
const SubTitle = styled.h2`
  position: absolute;
  top: 60px;
  left: 100px;
  font-size: 3.5rem;
  font-weight: 200;
`;

const SideTitle = styled.div`
  grid-column-start: 3;
  padding: 2rem 0.5rem;
  writing-mode: vertical-rl;
  font-size: 2rem;
  /* border: 1px solid green; */
`;
