import Wrapper from "./Wrapper"

const Footer = () => {
    return (
        <article className="h-[700px] pt-[45px] lg:h-[413px] lg:pt-[70px]">
            <Wrapper>
                <div className='flex justify-between flex-col lg:flex-row'>
                    <div className='max-w-[469px]'>
                        <div className='flex mb-[40px] lg:mb-[80px]'>
                            <img src="../src/img/Logo illustration.svg" alt="logo" />
                            <h5 className='uppercase text-[20px] font-black text-[#2D2D2D] ml-[10px]'>petworld</h5>
                        </div>
                        <p className='mb-[15px]'>Updates right to your Inbox</p>
                        <div className='mb-[35px]'>
                            <input className='w-[320px] h-[54px] border-[#D0D0D0] border-[1px] rounded-[10px] outline-none pl-[20px] placeholder:text-[#2D2D2D] mr-[20px] mb-[20px] lg:mb-0' type="text" placeholder='Email Address' />
                            <button className='w-full h-[54px] bg-[#3366FF] text-white rounded-[10px] lg:w-[116px]'>Send</button>
                        </div>
                        <div className='flex justify-between flex-col-reverse lg:flex-row'>
                            <span className='mb-[30px] font-semibold lg:mb-0'>© PETWORLD 2022</span>
                            <span className='mb-[30px] font-semibold lg:mb-0'>Privacy policy</span>
                            <span className='mb-[30px] font-semibold lg:mb-0'>Terms of use</span>
                        </div>
                    </div>
                    <div className='max-w-[417px]'>
                        <div className='flex text-left justify-between flex-col lg:flex-row'>
                            <div className='mb-[25px] lg:mb-0'>
                                <h5 className='mb-0 font-semibold lg:mb-[18px]'>Our story</h5>
                                <ul className='hidden lg:block'>
                                    <li className='mb-0 lg:mb-[18px]'><a href="">FAQ</a></li>
                                    <li><a href="">Contact</a></li>
                                </ul>
                            </div>
                            <div className='mb-[25px] ml-0 lg:mb-0 lg:ml-[58px]'>
                                <h5 className='mb-0 font-semibold lg:mb-[18px]'>Pet care</h5>
                                <ul className='hidden lg:block'>
                                    <li className='mb-0 lg:mb-[18px]'><a href="">Treatments</a></li>
                                    <li className='mb-0 lg:mb-[18px]'><a href="">Health</a></li>
                                    <li><a href="">Hygiene</a></li>
                                </ul>
                            </div>
                            <div className='mb-[25px] ml-0 lg:mb-0 lg:ml-[85px]'>
                                <h5 className='mb-0 font-semibold lg:mb-[18px]'>Shop</h5>
                                <ul className='hidden lg:block'>
                                    <li className='mb-0 lg:mb-[18px]'><a href="">Pet Food</a></li>
                                    <li className='mb-0 lg:mb-[18px]'><a href="">Toys</a></li>
                                    <li><a href="">Accessories</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className=' lg:mt-[80px] lg:float-right'>
                            <div className='w-[180px] flex justify-between'>
                                <img src="../src/img/Facebook.svg" alt="" />
                                <img src="../src/img/Linkedin.svg" alt="" />
                                <img src="../src/img/Instagram.svg" alt="" />
                                <img src="../src/img/Twitter.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </article>
    )
}

export default Footer