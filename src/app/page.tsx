import Image from "next/image";
import Link from "next/link";
import Nav from "@/Components/Navigation/Nav";
import Footer from "@/Components/Footer/footer";

export default function Home() {
  return (
    <div className="continer w-full">
            <section className="relative" >
                <Nav color='white' />
                <div className="w-full absolute top-80" >
                    <h1 className="text-6xl text-center font-bold font-gothic text-white tracking-widest" >
                        <span className="text-orange-400" >DISCOVER</span> <br/>SOMETHING<br/> NEW
                    </h1>
                    <div className="w-50 h-14 m-auto top-14 relative bg-transparent text-white transition-colors duration-200  hover:bg-orange-400 cursor-pointer border border-white z-10" >
                        <Link href='/products' className="w-full h-full tracking-widest flex justify-center items-center font-bold text-center" >
                            BOOK NOW
                        </Link>
                    </div>
                </div>
                <video
                    className="w-full h-[800px] object-cover borderborder-red-500"
                    controls={false}
                    autoPlay
                    muted
                    loop
                    preload="preload"
                >
                    <source height='500' src="/12.mp4" type="video/mp4" />
                </video>
            </section>
            <section className="w-full h-[900px] mt-20 " >
                <div className="max-w-[1400px] m-auto h-full pl-15 pr-15 ">
                    <div>
                        <div className="flex w-full justify-between h-[400px] mb-15 relative" >
                            <div className="z-10" >
                                <h1 className="text-7xl font-bold absolute tracking-widest top-20" >
                                    <span className="text-orange-400" >OUR</span> <br/> BRANDS
                                </h1>
                                <div className="w-[250px] h-[60px] border-2 border-black absolute bottom-10" >
                                    <Link href="/products" className="w-full h-full tracking-widest flex justify-center items-center font-bold text-center duration-200 hover:bg-orange-400 cursor-pointer " >
                                        SEE ALL
                                    </Link>
                                </div>
                            </div>
                            <div className="w-[85%] h-full relative"  >
                                <Image src="/654.jpg" alt="shirt" fill />
                            </div>
                        </div>
                        <div className="flex justify-between" >
                            <div className="w-[350px] h-[350px] relative hover:scale-110 duration-200" >
                                <Link href="#" >
                                    <Image src="/mcad.avif" alt="shirt" fill objectFit={'cover'} />
                                    <div className="w-full h-[60px] bg-transparent absolute top-55 left-0 pt-3" >
                                        <h1 className="text-4xl font-bold tracking-widesttop-5 text-white text-center" >
                                            Remedy®
                                        </h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="w-[350px] h-[350px] relative hover:scale-110 duration-200" >
                                <Link href="#" >
                                    <Image src="/garden.jpg" alt="shirt" fill objectFit={'cover'} />
                                    <div className="w-full h-[60px] bg-transparent absolute top-55 left-0 pt-3" >
                                        <h1 className="text-4xl font-bold tracking-widesttop-5 text-white text-center" >
                                            Ma&Bi Casa®
                                        </h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="w-[350px] h-[350px] relative hover:scale-110 duration-200" >
                                <Link href="#" >
                                    <Image src="/rt.jpg" alt="shirt" fill objectFit={'cover'}/>
                                    <div className="w-full h-[60px] bg-transparent absolute top-55 left-0 pt-3">
                                        <h1 className="text-4xl font-bold tracking-widesttop-5 text-white text-center">
                                            Pongobag®
                                        </h1>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full h-[900px] mt-20 relative" >
                <div className="absolute bg-gray-300 ra text-black w-[600px] h-[350px] right-20 top-70 pt-30 pl-30 pr-20" >
                    <h1 className="absolute text-7xl font-bold tracking-widest -left-27 top-1" ><span className="text-white">AB</span>OUT<br/><span className="text-white" >US</span></h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aperiam architecto at cum
                        deserunt dicta dolore dolorem dolores eius eos esse, est ex exercitationem fuga hic illo impedit
                        in iure libero maiores, necessitatibus nisi obcaecati odit officia perspiciatis quam qui quibusdam
                        quidem quis repellat similique suscipit temporibus ut voluptatibus.</p>
                    <div className="w-40 h-12 bg-white absolute -bottom-5 right-15 hover:bg-orange-400 cursor-pointer duration-200 z-10" >
                        <Link href="/story" className="w-full h-full flex justify-center items-center" >OUR STORY</Link>
                    </div>
                </div>
                <video
                    className="w-full h-[900px] object-cover"
                    controls={false}
                    autoPlay
                    muted
                    loop
                    preload="preload"
                >
                    <source src="/123.mp4" type="video/mp4" />
                </video>
            </section>
        <Footer />
        </div>
  );
}
