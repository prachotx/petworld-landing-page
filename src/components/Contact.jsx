import Wrapper from "./Wrapper";

const Contact = () => {
    return (
        <article className="h-[950px] pt-[85px] lg:h-[498px] lg:pt-[68px]">
            <Wrapper>
            <div className="max-w-[960px] mx-auto flex justify-between flex-col text-center lg:flex-row lg:text-left">
                    <div className="max-w-[385px]">
                        <h4 className="text-[80px] text-[#2D2D2D] font-semibold leading-[90px] mb-[40px]">Let’s talk, woof!</h4>
                        <p className="text-[18px] font-extralight mb-[40px]">You can ask us questions about your pet, and we will be happy to answer you!</p>
                        <button className="w-[203px] h-[64px] bg-[#F8D57E] text-[#2D2D2D] rounded-lg mb-[58px] lg:mb-0">Contact us</button>
                    </div>
                    <div>
                        <img src="../src/assets/dog.svg" alt="dog" />
                    </div>
                </div>
            </Wrapper>
        </article>
    )
}

export default Contact