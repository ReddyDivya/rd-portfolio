//import icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";

//link
import { Link } from "react-scroll";



const Nav = () => {
    return (
        <nav classname="fixed bottom-2 lg:botton-8 w-full overflow-hidden z-50">
            <div classname='container mx-auto'>
                {/*nav link*/}
                <div classname="w-full bg-black/20">
                    <Link>
                        <BiHomeAlt />
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;