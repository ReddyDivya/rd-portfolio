//import icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";

//link
import { Link } from "react-scroll";



const Nav = () => {
    return (
        <nav className="fixed bottom-2 lg:botton-8 w-full overflow-hidden z-50">
            <div className='container mx-auto'>
                {/*nav link*/}
                <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between">
                    <Link>
                        <BiHomeAlt />
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;