import Wrapper from "./Wrapper"

const Feedback = () => {
    return (
        <article className="h-[750px] bg-[#ECE7FB] pt-[25px] lg:pt-[50px] lg:h-[500px]">
            <Wrapper>
                <div className="max-w-[831px] mx-auto flex flex-col lg:flex-row">
                    <div className="mr-0 lg:mr-[65px] ">
                        <img src="/assets/Image (Desktop).svg" alt="" />
                    </div>
                    <div className="max-w-[418px] pt-[45px]">
                        <img className="mb-[20px]" src="/assets/Quote icon.svg" alt="" />
                        <p className="mb-[45px] font-semibold text-[#2D2D2D] leading-7">
                            We love using "PETWORLD" products.  Environmentally friendly and sustainable.
                            We have the sustainable dog bowls and regularly use the mint scented poo bags which were all such great value for money.
                        </p>
                        <span className="font-light text-[#7e7e7e]">
                            Dylan Shaw
                        </span>
                    </div>
                </div>
            </Wrapper>
        </article>
    )
}

export default Feedback