import Wrapper from "./Wrapper";

const Logo = () => {
  return (
    <article className="h-[550px] pt-[40px] lg:h-[200px] lg:pt-[80px]">
      <Wrapper>
        <div className="flex justify-between items-center flex-col lg:flex-row">
          <img className="mb-[50px] lg:mb-0" src="/assets/Nestle.svg" alt="Logo" />
          <img className="mb-[50px] lg:mb-0" src="/assets/Apple.svg" alt="Logo" />
          <img className="mb-[50px] lg:mb-0" src="/assets/Beco.svg" alt="Logo" />
          <img className="mb-[50px] lg:mb-0" src="/assets/Amazon.svg" alt="Logo" />
          <img className="mb-[50px] lg:mb-0" src="/assets/Google.svg" alt="Logo" />
          <img src="/assets/Walmart.svg" alt="Logo" />
        </div>
      </Wrapper>
    </article>
  )
}

export default Logo