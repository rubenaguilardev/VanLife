const About = () => {
    return (
        <section>
            <img src="aboutimg.png" alt="man sitting on top of van staring at night sky"/>
            <div className="px-[1.625rem] py-13 text-[#161616]">
                <h1 className="text-[2rem] font-bold leading-[38px] mb-8">Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p className="mb-4">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)</p>
                <p className="mb-14">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                <div className="py-8 px-9 bg-[#FFCC8D] rounded-[5px]">
                    <div className="text-2xl font-bold leading-[30px] mb-[1.625rem]">
                        <p>Your destination is waiting.</p>
                        <p>your van is ready.</p>
                    </div>
                    <button className="font-bold text-white bg-black py-4 px-6 rounded-[10px]">Explore our vans</button>
                </div>
            </div>
            
        </section>
        
    )
}

export default About 