// import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/productService";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Sort } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Product } from "../../common/interfaces/interface";
import { Link } from "react-router-dom";

export const SwiperProducts = () => {
  const { data: products = [] } = useQuery<Product[]>({
    enabled: true,
    queryKey: ["products", { Sort }], // Clave de caché
    queryFn: getAllProducts,
  });
  return (
    <Box
      id="carousel"
      sx={{
        alignItems: "center",
        padding: "5px",
        top: "80px",
      }}>
      <Typography
        sx={{
          fontSize: "28px",
        }}>
        Productos que te podrian interesar
      </Typography>
      <Swiper
        spaceBetween={2}
        slidesPerView={5}
        style={{
          display: "flex",
          top: "50px",
          textAlign: "center",
          maxHeight: "250px",
        }}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}>
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`cart/${item.id}`}>
              <img
                style={{
                  justifySelf: "center",
                  maxWidth: "100px",
                  maxHeight: "80px",
                }}
                src={item.image}
              />
            </Link>
            <Typography sx={{ fontSize: "12px" }}>{item.title}</Typography>
            <Typography>${item.price}.00</Typography>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
