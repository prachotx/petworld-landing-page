import Wrapper from "./Wrapper"

const Header = () => {
    return (
        <section className="h-[1100px] bg-[#F7F5FD] pt-[88px] lg:h-[600px] lg:pt-[80px]">
            <Wrapper>
                <div className="max-h-[735px] flex flex-col justify-between lg:flex-row ">
                    <div className="max-w-[466px] text-center lg:text-left">
                        <h2 className="text-[80px] leading-[90px] font-semibold text-[#2D2D2D] mb-[15px]">Pet Storebr <br /> & Beyond</h2>
                        <p className="text-[#2D2D2D] text-[18px] font-extralight mb-[60px]">This is a sample landing page, created with Figma and Anima. No coding involved.</p>
                        <button className="w-[203px] h-[64px] bg-[#F8D57E] rounded-[10px] text-[#2D2D2D] mb-[60px]">Get Started</button>
                    </div>
                    <div>
                        <img src="../src/assets/Image.svg" alt="dog" />
                    </div>

                </div>
            </Wrapper>
        </section>
    )
}

export default Header