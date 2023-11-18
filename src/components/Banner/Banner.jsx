import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import banner1 from '../../assets/images/cups/Rectangle 11.png';
import banner2 from '../../assets/images/cups/Rectangle 12.png';
import banner3 from '../../assets/images/cups/Rectangle 13.png';
import banner4 from '../../assets/images/cups/Rectangle 14.png';
const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto my-16'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className=''>
                    <img className='w-full h-[500px]' src={banner1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[500px]' src={banner2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[500px]' src={banner3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[500px]' src={banner4} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;