import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71gbdEe+82L._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12341"
            title='Rich Dad Poor Dad : What The Rich Teach Their Kids About Money That The Poor And Middle Class'
            price={120.09} image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51A88IvtjGL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'
            rating={4} />
          <Product
            id="12342"
            title='Sony WH-1000XM4 Industry Leading Wireless Noise Cancellation Bluetooth Headphones'
            price={1900.09} image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51SKmu2G9FL._SX450_.jpg'
            rating={4} />
     <Product
            id="12342"
            title='mazon Brand - Solimo Back Cover for Apple iPhone 11 (Silicone_Transparent)'
            price={1200.09} image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51slzY7osKL._SX679_.jpg'
            rating={4} />
        </div>
        <div className="home__row">
          <Product
            id="12343"
            title='WoodenTant Women&#39;s Cotton Silk Saree Without Blouse Piece'
            price={2100.00} image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81qiItFu9US._UY741_.jpg'
            rating={5} />
          <Product
            id="12344"
            title='SS ARTS Wood Plastic Wall Shelf (13Cm X 24Cm X 38 Cm, White)'
            price={500.00} image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41mPf2uSCWL.jpg'
            rating={3} />
          <Product
            id="12345"
            title='Balensia Floor Standing Engineered Wood TV Entertainment Unit/TV Cabinet/3 Decker TV Stand/Display Shelf for Living Room/TV Console Table Storage with 3 Display Shelves'
            price={8300.00} image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51jZdy0xTyL._SX569_.jpg'
            rating={5} />
        </div>
        <div className="home__row">
          <Product
            id="12346"
            title='PTron Newly Launched Force X10 Bluetooth Calling Smartwatch with 1.7" Full Touch Display, Real Heart Rate Monitor, SpO2, Watch Faces, 5 Days Runtime, Health/Fitness Trackers & IP68 Waterproof (Black)'
            price={5100.00} image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51IUa29+qPL._SY450_.jpg'
            rating={5} />
        </div>
      </div>
    </div>
  );
};

export default Home;
