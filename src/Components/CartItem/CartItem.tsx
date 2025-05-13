import Image from "next/image";

export default function CartItem({img,name,price}: {img: string, name: string, price: number}) {
    return (
        <div className="p-5" >
            <div className="w-[350px] h-[500px] relative" >
                <Image src={img} alt="shirt" fill objectFit={'cover'} />
            </div>
            <div className="pt-5 pb-5" >
                <h1>{name}</h1>
                <p>{price}$</p>
            </div>
            <div className="w-full flex justify-center items-center text-white hover:bg-orange-400 duration-200 cursor-pointer h-10 bg-gray-900" >
                <button>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}