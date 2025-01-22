
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NavSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
    <Slider {...settings}>
       <div >
        <img src="template/api/UploadImages/newslider3.jpeg" />
      </div>
      <img src="template/api/UploadImages/4d9f45a6-9cd5-4e6c-9164-d98119a6641fdrive%20thru%20solutions%2003.png" />
      <div>
        <img src="template/api/UploadImages/mobile_app_development_saudi_arabia.jpg" />
      </div>
      <div>
        <img src="template/api/UploadImages/newslider2.jpeg" />
      </div>
      <div>
        <img src="template/api/UploadImages/67e07543-e14f-403e-8a12-1b1edd3611a0Creative-Time-Attendance-Software-02.jpg" />
      </div>
      <div>
        <img src="template/api/UploadImages/newslider2.jpeg" />
      </div>
    </Slider>
    </div>
  );
}

export default NavSlider;

// return (
//   <Carousel>
//     <Carousel.Item>
//     <img src="template/api/UploadImages/4d9f45a6-9cd5-4e6c-9164-d98119a6641fdrive%20thru%20solutions%2003.png"  />
//     </Carousel.Item>

//     <Carousel.Item>
//     <img src="template/api/UploadImages/mobile_app_development_saudi_arabia.jpg" />
//     </Carousel.Item>

//     <Carousel.Item>
//
//     </Carousel.Item>

//     <Carousel.Item>
//     <img src="template/api/UploadImages/newslider1.jpeg" />

//     </Carousel.Item>

//     <Carousel.Item>
//     <img src="template/api/UploadImages/newslider3.jpeg" />

//     </Carousel.Item>

//     <Carousel.Item>
//     <img src="template/api/UploadImages/67e07543-e14f-403e-8a12-1b1edd3611a0Creative-Time-Attendance-Software-02.jpg" />
//     </Carousel.Item>
//   </Carousel>
// );
