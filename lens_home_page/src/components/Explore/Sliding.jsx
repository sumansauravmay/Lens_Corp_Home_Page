import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@chakra-ui/react";
import "../../App.css";

const data = [
  {
    id: 1,
    image:
      "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_1.ad2ee302.png&w=256&q=75",
  },

  {
    id: 2,
    image:
      "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_3.37f82c98.png&w=256&q=75",
  },

  {
    id: 3,
    image:
      "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_2.7e06895b.png&w=256&q=75",
  },

  {
    id: 4,
    image:
      "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrov.97a72987.png&w=128&q=75",
  },
];

function Sliding() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    pauseOnHover: true,
  };

  return (
    <div>
      <div style={{ marginTop: "80px", width:"96%"}}>
        <Slider {...settings}>
          {data.map((item) => (
            <Container justifyContent={"center"} key={item.id}>
              <img style={{ width: "20%" }} src={item.image} alt="offers" />
            </Container>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Sliding;
