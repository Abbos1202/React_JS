// lesson 1

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


// ============================================================
// ============================================================

// lesson 2

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


// ============================================================
// ============================================================

// lesson 3

// ---satate
// ---setState
// ---constructor
// ---super
// ---onClick => button
// ---onChange => select, input checkbox


// satate => console da o'zgargan ma'lumotni browserda ko'rsatib beradi

// setState => ma'lumotni re-render qilib beradi va browserda ma'lumot o'zgaradi

// let count = 0; => bunda oddiy javascript action bo'ladi va faqat console da o'zgarishi mumkin

// constructor super => state yaratish uchun kerak bo'ladi


// ============================================================
// ============================================================

// lesson 4

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


// ============================================================
// ============================================================

// lesson 5

// ---CRUD => CREATE READ UPDATE DELETE
// ---Advanced


// ============================================================
// ============================================================

// lesson 6

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
// 2 - export const Container = styled('div')``
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



// ============================================================
// ============================================================

// lesson 7

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


// =====================================================
// =====================================================

// lesson 8

// if()
// ternary operator (?)
// navbar, attr, container, Components


// =======================================================
// =======================================================

// lesson 9

// YouTube Clone
// Lifting state up
// Search movies
// delete moveies


// =========================================================
// =========================================================

// lesson 10

// key={value.id} => Agar ma'lumotlarni map qilsak key beramiz va asosan value.id beriladi
// key={value.id} => Agar map qilinganda key berilmasa malumotlarni to'liq chizadi va optimization ga ta'sir qiladi ya'ni proyektni sekinlashtiradi
// key={index} => Agar key ga index berilsa bunda ma'lumotni id si yo'q bo'lsa beriladi va console dagi error ni yo'q qila oladi holos, bunda ma'lumotlarni to'liq chizadi
// key=>{index} => ma'lumotni map qilinganda re-create qilib beradi va proyectda index berish tavsiya qilinmaydi

// lesson 11

// Form


// ==========================================================
// ==========================================================

// lesson 12


// LifeCycle methods

// constructor(){} => eng birinchi yuradi
// componentWillMount(){} => birinchi render dan oldin yuradi
// render(){} => constructordan keyin yuradi
// componentDidMount(){} => birinchi render dan keyin yuradi
// componentWillReceiveProps(){} => parentdan child ga prop kelgan vaqtda
// shouldComponentUpdate(){} => componentni update qilish yoki qilmaslik tru false return qiladi
// componentWillUpdate(){} => renderdan oldin va prop kelishidan keyin
// componentDidUpdate(){} => DOM created
// componentWillUnmount(){} => after DOM element removed


// bind => ES 6 chiqmasidan oldin functiondagi error ni yo'q qilish uchun ishlatilingan
// bind(this) => oddiy funksiyani ishlatish uchun this berishimiz kerak

// bind => 3 xil usuli bor =>

// import React, { Component } from "react";

// export default class Binding extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     // this.plus = this.plus.bind(this)
//   }
//   plus() {
//     this.setState({ count: this.state.count + 1 });
//     console.log(this);
//   }

//   render() {
//     // const plus = () => {
//     //   this.setState({count: this.state.count + 1})
//     // }
//     return (
//       <div>
//         <h1>ReactJs Binding</h1>
//         <h1>{this.state.count}</h1>
//         {/* <button onClick={this.plus.bind(this)}>Click me</button> */}
//         {/* <button onClick={this.plus}>Click me</button> */}
//         <button onClick={() => this.plus()}>Click me</button>
//       </div>
//     );
//   }
// }

// ==========================================================
// ==========================================================


// lesson 13

// React hooks => 2019 yil fevral oyida chiqqan react frameworkini yangi versiyasi

// Class vs Hooks component
// return vs without return hooks components

// this in class and hooks

// this => class component da bor, hooks componentda yo'q

// useState=> birinchi elementi value, ikkinchisi function

// primitive vs non primitive


// ======================================================================
// ======================================================================

// lesson 14

// useEffect() => beckend dan malumot olib kelganda ishlaydi va react lifecycle larni o'rnini bosadi

// useEffect(() => {}) => bitta parametr olishi, bu parametr object va bu har bitta o'zgarishlarni ko'rsatib boradi
// useEffect(() => {}, []) => asosan beckenddan ma'lumot olib kelganda ishlatamiz ikkita parametr olishi va birinchi parametr object, ikkinchisi array, agar bo'sh array berilsa shu componentga kirgada bir marotaba yuradi, uni ichida qanday o'zgarish bo'lishidan qatiy nazar bir arotaba yuradi
// useEffect(() => {}, [name]) => faqat name o'zgarsa yuradi
// useEffect(() => {}, [name, count]) => name ham count ham o'zgarsa yuradi

// =======================================================================
// =======================================================================

// lesson 15

// useReducer => redux dan keyin chiqqan va redux ni qaysidir ma'noda o'rnini bosish uchun chiqqan 

// =======================================================================
// =======================================================================

// lesson 16 


// prop drilling => context api prop dirilling ni oldini olib beradi va prop drilling proyektini sekinlashtiradi

// state management => Context API yoki redux hisoblanadi

// lifting state up => state ni yuqoriga ko'tarish manosida keldi


// Contex API (useContext)

// Context API => state management hisoblanadi va xohlagan child da ishlatishimiz mumkin
// createContext
// put to the store
// useContext

// =======================================================================
// =======================================================================

// lesson 17

// useContext advanced
// useContext => alohida export qilib qo'ysa bo'ladi

// export const Student = () => useContext(StudentContext)
// va componentda tutib olish 
// const [students, setStudent]  = Student()
// file management
// General context => context folder da index.jsx fayl yaratib o'sha context folderdagi context fayllarni import qilib olish va faqat bitta osha index.jsx fayldagi Context index.js da tutib olish


// ==================================================
// ==================================================

// lesson 18

// localStorage

// localStorage => client browserida ma'lumotlarni saqlash
// localStorage.setItem(name, value) => browser xotirasiga set qiladi
// localStorage.getItem(name) => browserga get qilib beradi
// localStorage.removeItem(name) => aynan qaysi malumotni localStorage xotirasidan delete qilish
// localStorage.clear() => localStorage xotirasida qancha ma'lumot bo'lsa hammasini o'chiradi

// array object

// localStorage.setItem('count', JSON.stringify({data: count - 1}))
// JSON.parse(localStorage.getItem('count'))


// ==================================================
// ==================================================

// lesson 19 

// optimization

// memo => faqat child component , trigger re-render yani re-render bo'lishiga omil bo'lishi kerak

// useMemo => faqat parent componentda ishlaydi va value ga return qiladi
// useCallBack => bu ham parent componentda ishlaydi va funksiyaga return qiladi va parametr berishimiz mumkin


// ===================================================
// ===================================================


// lesson 20

// useRef => misol uchun bitta buttonga alert qiymat berib qachon alert qilsa ma'lumotni re-render qilib beradi

// import React, { useRef } from "react";

// const Uncontrolled = () => {
//   const title = useRef("");
//   return (
//     <div>
//       <h1>Uncontrolled</h1>
//       <input ref={title} type="text" />
//       <button
//         onClick={() => {
//           console.log("Uncontrolled", title);
//           alert(title.current.value);
//         }}
//       >
//         click
//       </button>
//     </div>
//   );
// };

// export default Uncontrolled;


// controlled vs uncontrolled


// ===================================================
// ===================================================

// lesson 21

// restful API
// fetch => beckenddan ma'lumot olib kelish uchun vosita sifatida ishlatilinadi va bu javascript funksiyasi
// endpoint url, API link
// CRUD
// GET => beckenddan get qilib olish uchun ishlatilinadi
// POST => Create qilish uchun ishlatilinadi bunda update qilsa ham bo'ladi
// PUT => update qilish uchun ishlatilinadi
// DELETE => delete qilih uchun
// swagger => beckendda test qilish uchun juda foydali platforma
// token
// auth => authorization

// HTTP status kodlari

// Har bir HTTP opertsiyada server operatsiyani qanday bajarganini aniqlash uchun server tomonidan yuborilgan status kodi mavjud. HTTP status kodlari muayyan HTTP so'rovi muvaffaqiyatli bajarilgan yoki bajarilmaganligini ko'rsatadi 

// Barcha http status codelar beshta toifaga bo'linadi
// Informational responses => 100-199
// Successful responses => 200-299
// Redirects => 300-399
// Client errors => 400-499
// Server errors => 500-599

// ------------------------------------->

// 2XX - Success

// HTTP holat kodlari so'rov qabul qilinganligini, tushunilganini, bajarilganini va uzatish rejalashtirilganidek amalga oshirilganligini ko'rsatadi

// 200 => OK so'rov bajarildi
// 201 => Created, so'rov bajarildi va natijada yangi resurs yaratildi. Bu odatda POST so'rovlari yoki ba'zi PUT so'rovlaridan keyin yuboriladigan javobdir
// 202 => Accepted. Mijoz serverdan biror narsa yaratishni so'radi. So'rov qayta ishlash uchun qabul qilindi va lekin ishlov berish tugallanmagan
// 203 => Non-Authentication Information. Holat kodi so'rov muvaffaqiyatli bo'lganligini, lekin biriktirilgan yuk o'zgartirilganligini ko'rsatadi


// ------------------------------------->

// 3XX - Redirection

// Ushbu turdagi holat kodlari so'rovni bajarish uchun qo'shimcha harakatlar qilish kerakligini ko'rsatatdi

// 300 => Multi choice. So'rovda bir nechta javob bo'lishi mumkin
// 301 => Moved permanantly. So'ralgan manbaning URL manzili butunlay o'zgartirildi. Yangi URL javobda berilgan
// 302 => Found. So'ralgan manbaning URL manzili vaqtincha o'zgartirildi
// 303 => See other. So'rovga javobni GET usuli yordamida boshqa URL ostida topish mumkin
// 304 => Not modified. Bu keshlash uchun ishlatiladi. Bu mijozga javob ozgartirilmaganligini aytadi, shuning uchun mijoz javobning bir xil keshla gan versiyasidan foydalanishni davom etishi mumkin
// 307 => Temporary redirect. Server ushbu javobni mijozga so'ralgan manbani boshqa URL da oldingi so'rovda qo'llanilgan usul bilan olishga yonaltirish uchun yuboradi. Bu FOUND 302 HTTP jaob kodi bilan bir xil semantikaga ega, bundan mustasno, foydalanuvchi agenti ishlatiladigan HTTP usulini o'zgartirmasligi kerak. Agar birinchi so'rovda POST ishlatilingan bo'lsa, ikkinchi so'rovda POST ishlatilishi kerak


// ------------------------------------->

// 4XX - Client error

// Ushbu turdagi status kodlar so'rovda noto'g'ri sintaksis mavjud ekanligini yoki bajarilmasligini anglatadi

// 400 => Bad request. Koddagi noto'g'ri sintaksis tufayli server so'rovni tushuna olmadi
// 401 => Unauthorized. Mijoz serverdan so'ralgan javobni olish uchun o'zini autentifikatsiya qilish kerak, aks holda bu ruxsatsiz so'rov sifatida ko'rib chiqiladi
// 402 => Payment required. Bu kod kelajakda foydalanish uchun saqlagan. Ushbu kodni yaratilishning dastlabki maqsadi uni raqamli to'lov tizimlari uchun ishlatish edi, ammo bu holat kodi juda kam ishlatiladi va standart konventsiya mavjud emas
// 403 => Forbidden. Mijoz kontentga kirish huquqiga ega emas, yani unga ruxsat yo'q, shuning uchun server so'ralgan manbani bajarishdan bosh tortmoqda. 401 Unauthorized dan farqli o'laroq, mijozning identifikatori serverga ma'lum
// 404 => Not Found. Server so'ralgan manbani topa olmadi. Brauzerda bu URL tan olinmaganligini anglatadi. API da bu so'nggi nuqta haqiqiy ekanligini lekin resursning o'zi mavjud emasligini anglatishi ham mumkin, Serverlar ruxsatsiz mijozdan resurs mavjudligini yashirish uchun 403 taqiqlangan o'rniga ushbu javobni yuborishi mumkin. Ushbu javob kodi, ehtimol, internetda tez-tez uchraydiganligi sabali eng mashxurdir
// 405 => Method Not Allowed. So'rov usuli server tomonidan ma'lum, ammo maqsadli manba tomonidan qo'llab-quvvatlanmaydi.Masalan, API manbani o'chirish uchun DELETE ga qo'ng'iroq qilishga ruxsat bermasligi mumkin
// 415 => Unsupported media type. Media type berilmaganligidan kelib chiqadi

// ------------------------------------->

// 5XX - Server Error

// Ushbu turdagi holat kodlari server yaroqli so'rovni bajara olmaganligini anglatadi

// 500 => Internal Server Error. Server kodda muammo topadi va uni qanday hal qilishni bilmaydi
// 501 => Not Implemented. Server so'rov usulini tanimaydi yoki so'rovni bajarish qobiliyatiga ega emas
// 502 => Bad Gateway. Server so'rovni ko'rib chiqish uchun zarur bo'lgan javobni olish uchun kirish yo'li sifatida ishlayotganda, yaroqsiz javob oldi
// 503 => Service Unavailable. Server so'rovni bajarishga tayyor emas. Umumiy sabablar - xizmat ko'rsatish uchun ishlamay qolgan yoki ortiqcha yuklangan server
// 504 => Gateway Timeout. Ushbu xato javobi serverga kirish yo'li vazifasini bajarayotganda va vaqtida javob ololmaganda beriladi
// 505 => HTTP Version Not Supported. So'rovda ishlatladigan HTTP versiyasi server tomonidan qo'llab-quvvatlanmaydi

// ===================================================
// ===================================================

// lesson 22

// axios
// fetch vs axios
// vanilla javascript va 3rd part library
// manually vs automatic => paring or data transform
// npm- install whatwg-fetch --save polyfill for-fetch => internet explorer da barcha browserlarda o'qishga yordam beradi

// axios => agar bodyga parametr yozadigan bo'lsak avtomatik json() ga parse qilib oladi


// ===================================================
// ===================================================

// lesson 23 

// React Router DOM 5

// BrowserRouter
// NavLink, Link => boshqa bir page ga o'tish uchun link
// Route => o'sha page da nima ko'rsatish uchun
// useHistory, useLocation => window location
// useHistory => page larni orqaga yoki oldinga jonatish uchun ishlatsak bo'ladi
// useLocation => window.location
// Switch => bitta url da ikkita malumotni ifodalashda kerak bo'ladi
// usePrams
// privateRoute => page ga otganda ruxsat yo'q bo'lsa yani oldin login qilib keyin page ga o'tish uchun protected hisoblanadi
// redirect => agar componentga redirect bersak osha manzilga linkni yo'naltiradi

// Route larni yozish usullari 

{/* <Route path={'/home'} component={Home} /> */ }

{/* <Route path={'/home'}> => bu ko'rinishda prop jo'natsa bo'ladi
    <Home />
</Route> */}


// ===================================================
// ===================================================

// lesson 24

// React Router DOM 6

// redirect --> navigate
// useHistory --> useNavigate
// NavLink activeStyle --> style{({isActive}) => }
// Routes, Route
// Route => component --> element
// Outlet
// usePrams
// privateRoute
// useNavigate => javascript code bo'lganda yani button onClick bo'lganda
// Navigate => element sifatida keladi va component ko'rinishida yoziladi
// optimal navbar yasash


// ===================================================
// ===================================================

// lesson 25

// HOC => High Order Component


// High Order Function sintaksisi =>

// const Function = (Component) => {
//     const Updated = () => {
//         <Component />
//     }
//     return Function
// }

// ===================================================
// ===================================================


// lesson 26

// React 18V --> concurrent mode
// Batching -> flushSync

// useTransition => optimization ni tezlashtirib  beradi
// isPending => true yoki false qaytaradi. Ma'lumotni tutib kelyaptimi yo'qmi shuni ko'rsatadi
// startTransition => privarity ni pasaytirib beradi yani ikkinchi darajali ma'lumot

// startTransition => class componentlar bilan ishlatilinadi
// useDefferedValue => parent componentdan prop kelganda ishlatiladi va bitta value oladi

// 17V - Suspense => lazy => commmentga olib qo'ygan bilan bir xil yani display: none qilib qo'yadi
// 18V - Suspense => GraphQl bilan ishlaydi => Suspense ichidagi ma'lumotni o'chirib tashlagan bilan bir xil qachon beckenddan ma'lumot kelsagina bor qilib qo'yadi
// Suspense => ichidagi ma'lumotga display: none qiymatini qo'shib qo'yadi
// GraphQl => fetch ga oxshaydi va faqat bitta endpoint bo'ladi
// suspenseList

// useId => unique id yasab oladi
// useDebugValue => custom hooks bilan ishlaydi va kerakli bo'lganda ishlatish kerak maksimal bundan yiroqlashish kerak


// ===================================================
// ===================================================

// lesson 27 

// lazy load
// portal
// profiler -> react dev tools bilan bir xil