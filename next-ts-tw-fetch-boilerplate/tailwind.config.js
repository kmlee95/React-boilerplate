module.exports = {
  //tailwind 를 사용할 경로 작성해주기
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // font 설정(변경예정)
      fontFamily: {
        'ohsquare-air': ['Cafe24 Ohsquare air', 'Arial', 'sans-serif'],
        ohsquare: ['Cafe24 Ohsquare', 'Arial', 'sans-serif'],
        nanumBarunGothic: ['NanumBarunGothic', 'Arial', 'sans-serif'],
      },
    },
  },

  //plugin 등록
  plugins: [],

  //prefix 설정 시 적용
  //prefix: 'tw-',
};
