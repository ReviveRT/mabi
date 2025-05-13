'use client'

import Nav from "@/Components/Navigation/Nav";
import {useState} from "react";
import CartItem from "@/Components/CartItem/CartItem";
import Footer from "@/Components/Footer/footer";

export default function Products(){
    const [data, setData] = useState([
        {
            name: 'Product',
            price: 100,
            img: '/col2.png'
        },
        {
            name: 'Product',
            price: 100,
            img: '/col2.png'
        },
        {
            name: 'Product',
            price: 100,
            img: '/col2.png'
        },
        {
            name: 'Product',
            price: 100,
            img: '/col2.png'
        },
        {
            name: 'Product',
            price: 100,
            img: '/col2.png'
        },
        {
            name: 'Product',
            price: 100,
            img: '/col2.png'
        },

    ])

    return (
        <div>
            <Nav color='dark' />
            <section className="w-[1100px] h-auto mt-50 m-auto mb-20" >
                <div>
                    <h1 className="text-6xl font-bold mb-10 tracking-widest" >
                        ALL PRODUCTS
                    </h1>
                </div>
                <div className="flex w-full">
                    <aside className="w-[300px]" >
                        <div className="border-b-1 border-gray-500 pb-5 mb-5" >
                            <h1 className="text-2xl tracking-widest font-bold" >BROWSE BY</h1>
                        </div>
                        <div>
                            <ul className="text-gray-500 " >
                                <li className="cursor-pointer hover:text-black hover:underline" >All Products</li>
                                <li className="cursor-pointer hover:text-black hover:underline">Pongobag</li>
                                <li className="cursor-pointer hover:text-black hover:underline">Ma&Bi Casa</li>
                                <li className="cursor-pointer hover:text-black hover:underline">Remedy</li>
                            </ul>
                        </div>
                    </aside>
                    <div className="w-[800px] flex flex-row flex-wrap justify-between relative" >
                        <p className="text-gray-500 absolute left-5 -top-5" >{data.length} products</p>
                        {data.map((item, index) => (
                            <CartItem img={item.img} name={item.name} price={item.price} key={index} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}