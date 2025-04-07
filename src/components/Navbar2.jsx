export default function Navbar2() {

  return (
    <>
    <div className="navigation flex justify-center rounded-xl mt-16 h-[44px]">
        <ul className="flex gap-10 bg-white w-[200px] mt-1">
            <li className="list relative w-[70px] h-[30px] z-10 bg-transparent  ">
            <a href="#" className="block relative font-bold w-[80px] h-[40px] bg-white transition-[2s] hover:-translate-y-[-20px]  hover:bg-orange-500 hover:rounded-xl hover:pl-2 hover:center hover:border-black hover:border-8">Home</a>
            </li>
            <li className="list relative w-[70px] h-[30px] z-10 bg-white">
            <a href="#" className="block relative font-bold w-[90px] h-[40px] bg-white transition-[2s] hover:-translate-y-[-20px] hover:bg-orange-500 hover:rounded-xl hover:pl-2 hover:center hover:border-black hover:border-8">Services</a>
            </li>
            <li className="list relative w-[70px] h-[30px] z-10 bg-white">
            <a href="#" className="block relative font-bold w-[80px] h-[40px] bg-white transition-[2s] hover:-translate-y-[-20px] hover:bg-orange-500 hover:rounded-xl hover:pl-2 hover:center hover:border-black hover:border-8">About</a>
            </li>
            <li className="list relative w-[70px] h-[30px] z-10 bg-white">
            <a href="#" className="block relative font-bold w-[90px] h-[40px] bg-white transition-[2s] hover:-translate-y-[-20px] hover:bg-orange-500 hover:rounded-xl hover:pl-2 hover:center hover:border-black hover:border-8">Contact</a>
            </li>
            <div style={{
              position:"absolute",
              top:"88px",
              width:"80px",
              height:"20px",
              background:"orange",
              borderRadius:"30%",
              border:"20px solid black",
              transition:"2s",

            }}>
              <span style={{
                position:"absolute",
                top:"px",
                left:"147%",
                width:"15px",
                height:"14px",
                bottom:".1px",
                backgroundColor:"transparent",
                borderBottomLeftRadius:"24px",
                boxShadow:"-1.5px 6px 0 0 black",
              }}></span>
            </div>
        </ul>
    </div>
    </>
  );
}
