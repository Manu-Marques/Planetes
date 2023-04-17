import { Navigation, Pagination, Scrollbar, EffectCube, Autoplay } from "swiper"
import "swiper/css"
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-cube'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react';


export default function Carousel() {


    const Images = [
        {
            id: 1,
            url : '../../src/assets/planetes.jpg',
            text: "hello par ici"
        },
        {
            id: 2,
            url : '../../src/assets/planetes.jpg',
            text: "hello par ici"
        },
        {
            id: 3,
            url : '../../src/assets/planetes.jpg',
            text: "hello par ici"
        },
        {
            id: 4,
            url : '../../src/assets/planetes.jpg',
            text: "hello par ici"
        },
    ]


    return (
        <div className="swiper-container">
        <Swiper
   effect={"cube"}
   
   grabCursor={true}
   autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        }}
   cubeEffect={{
     shadow: true,
     slideShadows: true,
     shadowOffset: 20,
     shadowScale: 0.94,
   }}
   pagination={true}
   modules={[EffectCube, Pagination, Navigation, Scrollbar, Autoplay]}
   className="mySwiper" >
    {Images.map((image) => (
        <SwiperSlide key={image.id}>
            <img src={image.url} alt="image" />
            <p>{image.text}</p>
        </SwiperSlide>
    ))}
 </Swiper>
     </div>
    );
}