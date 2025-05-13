import Nav from "@/Components/Navigation/Nav";
import Footer from "@/Components/Footer/footer";

export default function Story() {

    return (
        <div>
            <Nav color='dark' />
            <section className="max-w-[1400px] h-auto mt-50 m-auto mb-80" >
                <div className="flex flex-row justify-center items-center relative" >
                    <h1 className="text-7xl font-bold absolute bg-clip-text text-transparent text-border bg-gradient-transparent w-50 left-31 top-10 z-10">OUR STORY</h1>
                    <video
                        className="w-2/3 h-[400px] object-cover rounded-xl"
                        controls={false}
                        autoPlay
                        muted
                        loop
                        preload="preload">
                        <source src="/sky.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="w-full flex mt-15" >
                    <div className="mr-15 w-[20%]" >
                        <h3 className="text-xl font-bold mb-5" >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>Assumenda autem est hic id laborum maxime quod, sint sit tempore vel.
                        </h3>
                    </div>
                    <div className="w-[80%]" >
                        <p className="mb-5" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. A commodi consequuntur eum ipsa laboriosam, laborum
                            nihil optio quae quia rem! Accusantium aut consequuntur dolorum et excepturi exercitationem facilis hic id
                            iste iusto libero, molestias nam nesciunt non nostrum obcaecati omnis, perspiciatis quas quasi quia quos
                            reiciendis repudiandae sequi similique voluptatibus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Beatae deleniti facere iusto magni, placeat quae quod repellat repellendus rerum saepe sapiente sit ullam?
                            Libero possimus quos repudiandae vero! Ratione, repellendus tenetur. Doloremque exercitationem illum impedit
                            incidunt iusto nisi odio quos sint sunt tenetur? Blanditiis cumque deserunt ipsam magnam nobis odio.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}