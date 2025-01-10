const Wrapper = ({ children }) => {
  return (
    <div className="max-w-[320px] mx-auto lg:max-w-[1075px]">
        {children}
    </div>
  )
}

export default Wrapper