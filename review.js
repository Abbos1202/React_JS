// 1 - dars

// ---npx create-react-app
// ---node_modules
// ---package.json => dependencies => scripts => "eslintConfig" => "browserslist"("production"[] va "development"[])
// ---src
// ---public
// ---gitignore
// ---Readme.md
// ---Virtual ReactDOM
// ---ReactDOM.render()
// ---React.StrictMode
// ---jsx
// ---babel
// ---single page application



// npx create-react-app tutorial => bu tutorial nomi bo'lgan React kutubxonasini yaratib beradi va nomini react yoki katta harfda yozib bolmaydi


// node_modules => package.json dagi kutubxonalarni sozlamalari saqlanadi


// package.json => React app ni nastroykalari saqlanadi va buni o'chirib tashlasak proyekt ishlamidi


// dependencies => React app da qanaqa kutubxonalar ishlatilgani haqida umumiy ma'lumot

// scripts => proyekt ni browser da yurgazish uchun command lar to'plami

// "esLintConfig" => syntax uchun

// "browserslist" 
// "production"[] => production haqida umumiy ma'lumot
// "development"[] => browser lar haqida umumiy malumot


// gitignore => Git hub ga papka larni yuklab yuborishni oldini olish => node_modules


// src => bunda asosiy proyekt code lar bo'ladi va birinchi project yurganda index.js ga keladi va unda document.getElementById('root') keladi, bu public ichida index.html da bitta div root id li bor


// public => 


// Readme.md => proyekt haqida umumiy ma'lumot beradi


// Virtual ReactDOM => diffing degan algoritm bor ustma-ust 2 ta browser bor va bir-birini copy sini yasab oladi. Projectga o'zgartirish kiritsak, o'sha o'zgargan joyni o'zini o'zgartiradi va shuning uchun React tez ishlidi


// ReactDOM.render() => bu browser ga chiqarib beradi va ikkita parametr oladi, birinchisi ma'lumot, ikkinchisi manzil


// React.StictMode => React da keyinchalik kutubxonalar ishlatamiz va uni eskirgan, JavaScript ga mos kelmagan ma'lumotlari bo'lishi mumkin
// React da xatoliklarni oldini olish uchun React.StrictMode ishlatilinadi

// jsx => JavaScript XML => JavaScriptda html code ni yoki html ichida JavaScript code ini ishlatishga aytiladi


// babel => React da yozilgan code ni browser o'qiydigan ko'rinishga keltirib beradi


// single page application => React single page application deyilishiga sabab bitta html fayl bor va bitta root id li div bor. React da yozilgan barcha code lar shu root id li div ga kelib tushadi


// npm start => React code ni browser da ochib beradi

// React JS ni serveri => localhost3000 da yuradi

// dir => biz turgan papkadagi fayllarni chiqarib beradi

// cd => papkadagi faylni yozsak o'sha faylni ochib beradi

// code . => VS code da ochib beradi

// pwd => biz turgan papkani ko'rsatib beradi

// Terminal bilan biz turgan papka nomi bir xil bo'lishi kerak


// ========================================
// ========================================


// 2 - dars => 

// ---props 
// ---components
// ---export
// ---import
// ---props children

// Components => 2 turi mavjud
// ---class component
// ---functional componet


// class App extends React.Component{
//   render() {   => Bu ma'lumotlarni browser da ko'rsatib beradi
//     return(
//       <div></div>
//     )
//   }
// }

// export => 2 turi mavjud
// ---export default Student => Bitta faylda faqat bitta default qilsa bo'ladi
// ---export {Department, Student}


// ========================================
// ========================================

// 3 - dars

// ---satate
// ---setState
// ---constructor
// ---super
// ---onClick => button
// ---onChange => select, input checkbox


// state => console da o'zgargan ma'lumotni browserda ko'rsatib beradi

// setState => ma'lumotni re-render qilib beradi va browserda ma'lumot o'zgaradi

// let count = 0; => bunda oddiy javascript action bo'ladi va faqat console da o'zgarishi mumkin

// constructor super => state yaratish uchun kerak bo'ladi


// ========================================
// ========================================

// 4 - dars

// ---function call
// ---multi state change
// ---students list

// function call => 

{/* <input onChange={onSurnameChange} type="text" placeholder="surname" /> */ }
{/* <input onChange={(e) => onSurnameChange(e,'hey')} type="text" placeholder="surname" /> */ }
{/* <input onChange={(e) => onSurnameChange(e)} type="text" placeholder="surname" /> */ }


// multi state change  =>

// const onChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

{/* <input onChange={onChange} name="name" type="text" placeholder="name" />
<input onChange={onChange} name="surname" type="text" placeholder="surname" /> */}


// 5 - dars

// ---CRUD => CREATE READ UPDATE DELETE
// ---Advanced


// 6 - dars

// ---styled-components
// ---{css}
// ---props
// ---function call

// npm install styled-components@latest => eng oxirgi versiyadagi styled componentni o'rnatib beradi
// styled-components => css o'rnida ishlatiladi va qilishimiz bo'lgan ishlarni osonashtiradi, js faylda css codeni yozish uchun ishlatiladi

// styled componentni 2 xil yozishimiz mumkin => 
// 1 - export const Container = styled('div')``
// 2 - export const Container = styled.div``

// export qilishni ham 2 xil usuli bor =>
// 1 - export const Container = styled('div')``
// 2 - const Container = styled('div')``
// export {Container}

// props => 3 xil turi mavjud
// 1 - type="large" or type="medium" or type="small" buni funksiya orqali qiymatlarini olib styled componentda ishlatish mumkin

// function call => 
// const getSize = (props) => {
//     switch (props.type) {
//         case 'large':
//             return '200px';
//         case 'medium':
//             return '150px';
//         case 'small':
//             return '100px';
//         default:
//             return '150px';
//     }
// }
// export const Box = styled.div`
//     width: ${getSize};
//     height: ${getSize};
// `

// 2 - bg="black" or bg="red" or bg="yellow" => bunda birinchi box ga black ikkinchisiga red uchinchisiga yellow ta'sir qiladi

// 3 - left => oddiy ko'rinishda 


// common css => bir xil bo'lgan css code lar jamlanmasi 

// import styled, { css } from 'styled-components';
// const common = css`
// color: blue;
// font-family: bold;
// font-weight: 400px;
// padding: 10px;
// border: 2px solid black;
// height: fit-content;
// font-size: 20px;
// `
// export const Title = styled.h1`
//    ${common}
//    margin: 10px;
// `


// 7 - dars

// ---inheritance
// ---keyframes --> animation
// ---prototypes
// ---project
// ---theme

// inheritance => styled components dan meros qilib olish
// keyframes => styled component da animation qilish uchun
// theme => styled componentda ThemeProvider, createGlobalStyle bo'lishi kerak
// import { ThemeProvider, createGlobalStyle } from "styled-components";

// const GlobalStyle = createGlobalStyle`
//    body{
//     background: ${(props) => props.theme.bg};
//     color: ${(props) => props.theme.cl};
//    }
// `

// export default class State extends Component {
//   state={
//     light: false,
//   }
//   render() {
  
//     const theme = {
//       bg: this.state.light? "white" : "black",
//       cl: this.state.light? "black" : "white",
//     }
//     return (
//       <ThemeProvider theme={theme}>
//         <GlobalStyle />
//         <h1>Theme Provider</h1>
//          <Button>Click me</Button>
//          <ActiveButton>Active</ActiveButton>
//          <Rotate>Rotate</Rotate>
//          <Theme onClick={()=> this.setState({light: !this.state.light})} >Change theme</Theme>
//       </ThemeProvider>
//     );
//   }
// }

// ===========================================
// ===========================================
// 8 - dars

// if()
// ternary operator (?)
// navbar, attr, container, Components

// 9 - 10 - dars

// YouTube Clone
// Lifting state up
// Search movies
// delete moveies

// =======================
// =======================
// 11 - dars

// key={value.id} => Agar ma'lumotlarni map qilsak key beramiz va asosan value.id beriladi
// key={value.id} => Agar map qilinganda key berilmasa malumotlarni to'liq chizadi va optimization ga ta'sir qiladi ya'ni proyektni sekinlashtiradi
// key={index} => Agar key ga index berilsa bunda ma'lumotni id si yo'q bo'lsa beriladi va console dagi error ni yo'q qila oladi holos, bunda ma'lumotlarni to'liq chizadi
// key=>{index} => ma'lumotni map qilinganda re-create qilib beradi va proyectda index berish tavsiya qilinmaydi