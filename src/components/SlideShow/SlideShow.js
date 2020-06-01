// import React from "react";
// import Slider from "react-slick";
// import img1 from "../../assets/media/firstPage/img1.jpg";
// import img2 from "../../assets/media/firstPage/img2.jpg";
// import img3 from "../../assets/media/firstPage/img3.jpg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Cart from "../../components/Cart/Cart";

// const images = [
//   { src: require("../../assets/media/firstPage/img4.jpg") },
//   { src: require("../../assets/media/firstPage/img5.jpg") },
//   { src: require("../../assets/media/firstPage/img6.jpg") },
//   { src: require("../../assets/media/firstPage/img7.jpg") },
// ];
// const settings = {
//   dots: true,
//   dotsClass: "slick-dots",
//   autoplay: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };
// function SlideShow() {
//   return (
//     <div
//       style={{
//         width: "90%",
//         backgroundColor: "yellow",
//         height: "10rem",
//         position: "relative",
//         margin: "6em",
//         boxSizing: "border-box",
//       }}
//     >
//       <Slider {...settings}>
//         {images.map((img) => (
//           <div>
//             <img
//               src={images[0].src}
//               style={{
//                 width: "100%",
//                 height: "20rem",
//                 objectFit: "cover",
//                 marginTop: "1em",
//               }}
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default SlideShow;
