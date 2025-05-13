import Image from "next/image";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons";

export default function Nav({color}: {color: string}) {
    return (
        <nav className='w-full flex items-center justify-between absolute top-10' >
            <div className="w-1/5 pl-10" >
                <Image src="https://maebi.com/wp-content/uploads/2018/02/logo.png" alt="logo" width={125} height={100} />
            </div>
            <div className="flex flex-col  w-2/3 h-full items-center justify-end pr-10 z-10" >
                <ul className={`flex w-full h-full items-end justify-around ${color === 'dark' ? 'text-gray-950' : 'text-white'} tracking-widest font-bold font-gothic `} >
                    <Link href="/" className="ml-5  hover:text-orange-400" >Home</Link>
                    <Link href="/story" className="ml-5  hover:text-orange-400" >Our Company</Link>
                    <Link href="#" className="ml-5  hover:text-orange-400" >Our Brands</Link>
                    {/*<Link href="#" className="ml-5  hover:text-orange-400" >Request a Quote</Link>*/}
                    <Link href="#" className="ml-5  hover:text-orange-400" >Sign In</Link>
                    <Link href="#" className="ml-5  hover:text-orange-400" >Register</Link>
                    <div className={`w-14 h-14 ${color === 'dark' ? 'bg-gray-950' : 'bg-white'} bg-gray-900 rounded-full flex justify-center items-center cursor-pointer hover:bg-orange-400 duration-200`} >
                        <FontAwesomeIcon icon={faShoppingBasket} color={color === 'dark' ? '#fff' : '#000'} />
                    </div>
                </ul>
            </div>
        </nav>
    )
}