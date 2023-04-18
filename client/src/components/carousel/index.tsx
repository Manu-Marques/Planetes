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
            url: '../../src/assets/planetes.jpg',
            text: "hello par ici que tu sois hello par ici que tu soishello par ici que tu soishello par ici que tu soishello par ici que tu soishello par ici que tu sois"
        },
        {
            id: 2,
            url: '../../src/assets/planetes.jpg',
            text: ' "hello par ici que tu sois hello par ici que tu soishello par ici que tu soishello par ici que tu soishello par ici que tu soishello par ici que tu sois"'
        },
        {
            id: 3,
            url: '../../src/assets/planetes.jpg',
            text: "hello par ici"
        },
        {
            id: 4,
            url: '../../src/assets/planetes.jpg',
            text: "hello par ici"
        },
    ]

    return (
        <div className="swiper-container">
            <Swiper
                effect={"cube"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                cubeEffect={{
                    shadow: false,
                }}
                pagination={true}
                modules={[EffectCube, Pagination, Navigation, Scrollbar, Autoplay]}
                className="swiper" >
                {Images.map((image) => (
                    <SwiperSlide key={image.id}>
                        <img className="swiper__image" src={image.url} alt="image" />
                        <p className="swiper__text">{image.text}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}