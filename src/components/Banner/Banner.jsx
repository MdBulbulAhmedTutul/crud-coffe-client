import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import banner1 from '../../assets/images/banner/banner1.jpg'
import banner2 from '../../assets/images/banner/banner2.jpg'
import banner3 from '../../assets/images/banner/banner3.jpg'
import banner4 from '../../assets/images/banner/banner4.jpg'
const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto mt-10 mb-16'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className='rounded-xl relative'>
                    <div className='absolute w-full h-full bg-black opacity-40 rounded-xl'></div>
                    <img className='w-full h-[550px] rounded-xl' src={banner1} alt="" />
                    <div className='absolute w-full h-full top-[40%] text-white text-center'>
                        <h2 className='text-3xl font-bold mb-2'>Would you like a Cup of Delicious Coffee?</h2>
                        <p className='mb-2'>It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className='bg-[#E3B577] px-4 py-2 rounded-lg font-bold text-black'>Learn More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='rounded-xl relative'>
                    <div className='absolute w-full h-full bg-black opacity-40 rounded-xl'></div>
                    <img className='w-full h-[550px] rounded-xl' src={banner2} alt="" />
                    <div className='absolute w-full h-full top-[40%] text-white text-center'>
                        <h2 className='text-3xl font-bold mb-2'>Would you like a Cup of Delicious Coffee?</h2>
                        <p className='mb-2'>It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className='bg-[#E3B577] px-4 py-2 rounded-lg font-bold text-black'>Learn More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='rounded-xl relative'>
                    <div className='absolute w-full h-full bg-black opacity-40 rounded-xl'></div>
                    <img className='w-full h-[550px] rounded-xl' src={banner3} alt="" />
                    <div className='absolute w-full h-full top-[40%] text-white text-center'>
                        <h2 className='text-3xl font-bold mb-2'>Would you like a Cup of Delicious Coffee?</h2>
                        <p className='mb-2'>It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className='bg-[#E3B577] px-4 py-2 rounded-lg font-bold text-black'>Learn More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='rounded-xl relative'>
                    <div className='absolute w-full h-full bg-black opacity-40 rounded-xl'></div>
                    <img className='w-full h-[550px] rounded-xl' src={banner4} alt="" />
                    <div className='absolute w-full h-full top-[40%] text-white text-center'>
                        <h2 className='text-3xl font-bold mb-2'>Would you like a Cup of Delicious Coffee?</h2>
                        <p className='mb-2'>It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className='bg-[#E3B577] px-4 py-2 rounded-lg font-bold text-black'>Learn More</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;