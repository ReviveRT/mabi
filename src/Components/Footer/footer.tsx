export default function Footer() {
    return (
        <footer className="w-full h-[400px] border-t-2 bg-gray-900 " >
            <div className="max-w-[1400px] m-auto h-full flex flex-row justify-around items-center relative text-white pt-20" >
                <div className="absolute -top-28 p-20" >
                    <h1 className="text-6xl font-bold text-transparent bg-gradient-half-text bg-clip-text" >CONTACT US</h1>
                </div>
                <div>
                    <p>
                        MA&BI srl
                    </p>
                    <ul>
                        <li>— Pongobag</li>
                        <li>— Remedy Italy</li>
                        <li>— A3 Fashion</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Via Mario Carraro, 3 – 36075 Montecchio</li>
                        <li>Maggiore – Vicenza (IT)</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Tel. +39 0444.696645</li>
                        <li>Fax: +39 0444.498280</li>
                        <li>info@maebi.com</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}