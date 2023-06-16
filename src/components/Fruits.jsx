import React from "react";
import Box from "./Box.jsx";
import "./index.css";

class Fruits extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Box
          title="Watermelon"
          src="https://www.gardeningknowhow.com/wp-content/uploads/2021/05/whole-and-slices-watermelon.jpg"
        />
        <Box
          title="Orange"
          src="https://saverafresh.com/wp-content/uploads/2021/08/fresh-orange-281kg-29-500x500-1.png"
        />
        <Box
          title="Cherry"
          src="https://milis.bg/images/categories/cherry.jpg"
        />
        <Box
          title="Lemon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzavNqqEz5JWVAytHM-I1fpXVFf-alOexxbTE9lmQhGaTpTIdQ2X3M_KgGoqMdGGanG-8&usqp=CAU"
        />
        <Box
          title="Blueberry"
          src="https://billsberryfarm.com/wp-content/uploads/2020/08/blueberry-2.png"
        />
        <Box
          title="Banana"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiHFPAKLnbl_aPwpU5mK6qOlHQKUYLea2QUQ&usqp=CAU"
        />
        <Box
          title="Peach"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2sh7JGOQVI95sVW0Wx7C2iYFAap5RF6yQ_A&usqp=CAU"
        />
        <Box
          title="Cocount"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JcjkDzmMTlwEQ6OM4EIxqyI6bNDjOaRtuw&usqp=CAU"
        />
        <Box
          title="Papaya"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0XKC2nTCatJCTKrnj4NVPLAPfd36HHgYDidHmik4L6WG0WGgnh1slawS8IdCDtmSpqxw&usqp=CAU"
        />
        <Box
          title="Dragon Fruit"
          src="https://whatsupmag.com/downloads/61334/download/dragon-fruit2.jpg?cb=d54ab1775ea9059399a5537e1ae2eec8&w=600"
        />
        <Box
          title="Grape"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzD08J70ffSflJEbJqVbXyCTQKsi87KWB5Q&usqp=CAU"
        />
        <Box
          title="Mango"
          src="https://cdn.shopify.com/s/files/1/0069/2201/0735/products/mango-ripe-250grams-per-piece-fruits-vegetables-fresh-produce-979218_800x.jpg?v=1601479990"
        />
        <Box
          title="Mangosteen"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALyuER5fnDPTt-fgAR6VxqLmbDIRMF00tBA&usqp=CAU"
        />
        <Box
          title="Durian"
          src="https://img.freepik.com/premium-photo/durian-fruit-with-cut-in-half-and-leaves-isolated-on-white-surface_252965-916.jpg?w=2000"
        />
        <Box
          title="Avacado"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsspgRL7wL68pMKv7NnvORfoLFH5R6HpDHtg&usqp=CAU"
        />
      </div>
    );
  }
}

export default Fruits;
