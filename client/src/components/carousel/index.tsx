import { Navigation, Pagination, Scrollbar, EffectCube } from "swiper"
import "swiper/css"
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
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
            url: "https://images.unsplash.com/photo-1610390000000-1b1b1b1b1b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1610390000000-1b1b1b1b1b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        },
        {
            id: 4,
            url: "https://images.unsplash.com/photo-1610390000000-1b1b1b1b1b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        },
    ]


    return (
        <div className="swiper-container">
        <Swiper
   // install Swiper modules
   effect={"cube"}
   grabCursor={true}
   cubeEffect={{
     shadow: true,
     slideShadows: true,
     shadowOffset: 20,
     shadowScale: 0.94,
   }}
   pagination={true}
   modules={[EffectCube, Pagination]}
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