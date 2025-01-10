import Wrapper from './Wrapper';

const Logo = () => {
  return (
    <article className="h-[550px] pt-[40px] lg:h-[200px] lg:pt-[80px]">
      <Wrapper>
        <div className='flex justify-between items-center flex-col lg:flex-row'>
          <img className="mb-[50px] lg:mb-0" src="../src/img/Nestle.svg" alt="Logo" />
          <img className="mb-[50px] lg:mb-0" src="../src/img/Apple.svg" alt="Logo" />
          <img className="mb-[50px] lg:mb-0" src="../src/img/Beco.svg" alt="Logo" />
          <img className="mb-[50px] lg:mb-0" src="../src/img/Amazon.svg" alt="Logo" />
          <img className="mb-[50px] lg:mb-0" src="../src/img/Google.svg" alt="Logo" />
          <img src="../src/img/Walmart.svg" alt="Logo" />
        </div>
      </Wrapper>
    </article>
  )
}

export default Logo