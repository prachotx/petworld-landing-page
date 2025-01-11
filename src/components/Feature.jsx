import Wrapper from "./Wrapper"

const Feature = () => {
    return (
        <article className="h-[1300px] pt-[90px] lg:h-[500px] lg:pt-[110px]">
            <Wrapper>
                <div className="pt-[10px] flex flex-col justify-between items-center lg:flex-row">
                    <div className="max-w-[230px] text-center mb-[60px] lg:mb-0">
                        <div className="flex justify-center"><img src="../src/assets/Illustration.svg" alt="img content" /></div>
                        <h3 className="text-[18px] text-[#2D2D2D] font-semibold mt-[50px] mb-[25px]">Best quality pet food</h3>
                        <p className="text-[18px] text-[#2D2D2D] font-extralight">Super delicious food. Available in a range of delicious flavors.</p>
                    </div>
                    <div className="max-w-[230px] text-center mb-[60px] lg:mb-0">
                        <div className="flex justify-center"><img src="../src/assets/Illustration (1).svg" alt="img content" /></div>
                        <h3 className="text-[18px] text-[#2D2D2D] font-semibold mt-[20px] mb-[25px]">Toys & Accessories</h3>
                        <p className="text-[18px] text-[#2D2D2D] font-extralight">Soft toys, chew toys, and rope toys. Strong, interactive, and fun.</p>
                    </div>
                    <div className="max-w-[230px] text-center mb-[65px] lg:mb-0">
                        <div className="flex justify-center "><img src="../src/assets/Illustration (2).svg" alt="img content" /></div>
                        <h3 className="text-[18px] text-[#2D2D2D] font-semibold mt-[30px] mb-[25px]">Pets medical care</h3>
                        <p className="text-[18px] text-[#2D2D2D] font-extralight">You can get a wide range of great treatments for your dog.</p>
                    </div>
                    <div className="max-w-[230px] text-center">
                        <div className="flex justify-center"><img src="../src/assets/Illustration (3).svg" alt="img content" /></div>
                        <h3 className="text-[18px] text-[#2D2D2D] font-semibold mt-[40px] mb-[25px]">Full service grooming</h3>
                        <p className="text-[18px] text-[#2D2D2D] font-extralight">It"s the right time to groom your dog with a variety of treatments.</p>
                    </div>
                </div>
            </Wrapper>
        </article>
    )
}

export default Feature