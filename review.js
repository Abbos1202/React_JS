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