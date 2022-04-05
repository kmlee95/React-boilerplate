import tw from 'twin.macro';

/** Ohsquare 계열 폰트의 weight는 고정 */
const FontOhsquare = tw`
    font-ohsquare font-bold
`;
const FontOhsquareAir = tw`
    font-ohsquare-air font-light
`;

type FontWeight = 'light' | 'normal' | 'semibold' | 'bold'; // 사용하는 것만 정의
const FontNanumBarunGothic = (weight: FontWeight = 'normal') => {
  switch (weight) {
    case 'light':
      return tw`font-nanumBarunGothic font-light`;
    case 'normal':
      return tw`font-nanumBarunGothic font-normal`;
    case 'semibold':
      return tw`font-nanumBarunGothic font-semibold`;
    case 'bold':
      return tw`font-nanumBarunGothic font-bold`;
  }
};

export { FontOhsquare, FontOhsquareAir, FontNanumBarunGothic };
