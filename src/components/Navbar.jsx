import Wrapper from "./Wrapper"

const Navbar = () => {
  return (
    <nav className="h-[100px]">
      <Wrapper>
        <div className="h-[100px] flex items-center justify-between">
          <div className="flex">
            <img src="../src/assets/Logo illustration.svg" alt="logo" />
            <h1 className="uppercase text-[20px] font-bold text-[#2D2D2D] ml-[10px]">petworld</h1>
          </div>
          <div className="hidden lg:block">
            <button className="font-medium">Sign Up</button>
            <button className="bg-[#3366FF] w-[154px] h-[54px] font-medium rounded-[10px] text-white font ml-[30px]">Log in</button>
          </div>
        </div>
      </Wrapper>
    </nav>
  )
}

export default Navbar