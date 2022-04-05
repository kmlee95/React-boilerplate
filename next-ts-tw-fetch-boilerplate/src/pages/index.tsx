import type { NextPage } from 'next';
import tw from 'twin.macro';
import styled from '@emotion/styled';

import { FontNanumBarunGothic, FontOhsquareAir } from '@/styles/utils/font';

const TitleSection = styled.div`
  ${FontNanumBarunGothic('bold')}
  ${tw`text-3xl text-center text-purple-500`}
`;

const Home: NextPage = () => {
  return (
    <>
      <div className="font-ohsquare-air text-3xl text-center text-blue-500">Cafe24 Ohsquare air</div>
      <TitleSection>NanumBarunGothic</TitleSection>
    </>
  );
};

export default Home;
