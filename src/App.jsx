import { useState, useRef } from "react";
import BubblesBackground from "./components/BubblesBackground";
import CustomNavbar from "./components/CustomNavbar";

const teamMembers = [
    { img: `${import.meta.env.BASE_URL}static/deniz-photo.jpeg`, name: "Deniz Can ÖZDEMİR" },
    { img: `${import.meta.env.BASE_URL}static/ogulcan-photo.jpeg`, name: "Oğulcan KARAKOLLUKÇU" },
    { img: `${import.meta.env.BASE_URL}static/yasemin-photo.jpeg`, name: "Yasemin AKIN" },
    { img: `${import.meta.env.BASE_URL}static/alphan-photo.jpeg`, name: "Alphan TULUKCU" },
    { img: `${import.meta.env.BASE_URL}static/ilhami-photo.jpeg`, name: "İlhami ULUĞTÜRKKAN" }
];

function App() {
    const [activeTab, setActiveTab] = useState("home");
    const teamContainerRef = useRef(null);

    const renderTabContent = () => {
        switch (activeTab) {
            case "home":
                return (
                    <section className="max-w-7xl mx-auto p-4 md:p-6 pt-10 md:pt-20">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-8xl font-extrabold text-[#DB4437] drop-shadow-lg mb-4 pt-10 md:pt-20">
                                Welcome to YOD-AI!
                            </h1>
                            <p className="text-lg md:text-xl mb-2 text-black font-bold pt-5 md:pt-15">
                                Stay updated with the latest information and news about our project and activities.
                            </p>
                            <p className="text-lg md:text-xl text-black pt-5 md:pt-10">
                                We are Senior Computer Science students at Bilkent University, Türkiye, developing our innovative senior project idea named{" "}
                                <span className="font-semibold text-black">"Köpük"</span>!
                            </p>
                        </div>

                        <div className="mt-8">
                            <div className="flex justify-center mb-4">
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.scrollBy({ top: 700, behavior: "smooth" });
                                    }}
                                    className="text-[#DB4437] text-base md:text-lg hover:font-bold cursor-pointer pt-5 md:pt-15"
                                >
                                    Who Are We?
                                </a>
                            </div>
                            <h2 className="text-2xl md:text-4xl font-bold text-[#DB4437] text-center mb-4 pt-15 md:pt-30 pb-3 md:pb-5">
                                Who Are We?
                            </h2>
                            <div
                                ref={teamContainerRef}
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto"
                            >
                                {teamMembers.map((member, index) => (
                                    <div key={index} className="bg-white p-2 md:p-3 text-center rounded-sm hover:scale-105">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-24 h-24 md:w-32 md:h-32 object-cover mx-auto mb-2 rounded-full"
                                        />
                                        <p className="font-bold text-base md:text-lg text-black">{member.name}</p>
                                        <p className="text-sm text-gray-700">
                                            Senior Computer Science Student @ Bilkent University
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8">
                            <h2 className="text-2xl md:text-4xl font-bold text-[#DB4437] text-center mb-4 pt-15 md:pt-10 pb-3 md:pb-5">
                                Gallery
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {[`${import.meta.env.BASE_URL}static/PHOTO-1.jpg`, `${import.meta.env.BASE_URL}static/PHOTO-2.jpg`, `${import.meta.env.BASE_URL}static/PHOTO-3.jpg`].map((src, index) => (
                                    <div key={index} className="bg-white rounded-sm shadow-lg p-2">
                                        <img
                                            src={src}
                                            alt={`Gallery Image ${index + 1}`}
                                            className="w-full h-32 md:h-48 object-cover rounded-sm"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            case "about":
                return (
                    <section className="max-w-5xl mx-auto p-4 md:p-6 bg-white rounded-lg shadow-lg my-5 md:my-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#DB4437] mb-5">
                            About Köpük: Our First Software Solution
                        </h2>
                        <a
                            href="https://www.canva.com/design/DAGh_m5tTpI/oO5j0Z5py2vxXvksYXCypw/edit?utm_content=DAGh_m5tTpI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 transition-colors duration-200 mb-5"
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}static/canva.svg`}
                                alt="Canva"
                                className="w-5 h-5 md:w-6 md:h-6"
                            />
                            <span className="text-sm md:text-base text-[#DB4437] hover:font-bold">Click to Open Demo Presentation of Köpük!</span>
                        </a>
                        <p className="mb-2 md:mb-4 text-black text-sm md:text-base text-justify">
                            After the recent legislation in Türkiye that mandates the removal of stray animals from public places and their placement in shelters,
                            it is urgent to enhance the adoption process to avoid overcrowding and euthanasia risks for these animals. In July 2024,
                            this law was passed to address public safety concerns, but it has proved to be a source of tremendous difficulty for animal welfare organizations.
                            Our goal is to build a new platform to simplify adoption. Our goal is to strengthen the bond between potential adopters and the animals in need by providing
                            comprehensive animal profiles, including health records and behavioral traits, personalized care recommendations, and most importantly,
                            a sophisticated personalized stray animal recommendation system. The platform will also provide adoption guidance and post-adoption support.
                            Beyond providing a solution to the urgent problems created by the new law, this initiative also serves to support the long-term health of stray animals in
                            Türkiye through the promotion of sustainable adoptions and strained shelter resources.
                        </p>
                        <div className="w-full h-40 md:h-64 rounded-md flex items-center justify-center">
                            <img
                                src={`${import.meta.env.BASE_URL}static/dog-cat.png`}
                                alt="About visual 1"
                                className="max-h-full max-w-full object-cover rounded-md"
                            />
                        </div>
                        <p className="mt-4 text-black text-sm md:text-base text-justify">
                            The core purpose of Köpük is to simplify and optimize the process of matching potential adopters with animals in need of a loving home.
                            The platform achieves this by creating in-depth, comprehensive animal profiles that include health records, vaccination histories, behavioral assessments,
                            and personalized care recommendations. These detailed profiles provide adopters with a clear understanding of each animal’s needs, enabling them to make
                            well-informed decisions and be better prepared for pet ownership. A sophisticated matching algorithm further refines the process by aligning adopter lifestyles,
                            preferences, and capabilities with the specific requirements of each animal, thereby fostering more compatible and successful adoptions.
                            Beyond the initial match, the platform offers robust support features through an artificial intelligence-driven chatbot that assists users at every stage—from
                            pre-adoption inquiries and the application process to post-adoption support for training and veterinary care. In doing so, Köpük not only reduces the risk of
                            returned adoptions and alleviates the burden on overcrowded shelters but also advances the broader mission of animal welfare by ensuring that animals find permanent,
                            loving homes while equipping adopters with the necessary tools and knowledge for responsible pet care.
                        </p>
                        <div className="w-full h-40 md:h-64 rounded-md flex items-center justify-center mt-4">
                            <img
                                src={`${import.meta.env.BASE_URL}static/dog-standing.png`}
                                alt="About visual 2"
                                className="max-h-full max-w-full object-cover rounded-md"
                            />
                        </div>
                    </section>
                );
            case "news":
                return (
                    <section className="max-w-5xl mx-auto p-4 md:p-6 bg-white rounded-lg shadow-lg my-5 md:my-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#DB4437] mb-4">Latest News & Updates</h2>
                        <p className="mb-2 md:mb-4 text-gray-700 text-sm md:text-base">
                            Stay tuned for the latest news, updates, and insights about our project and activities...
                        </p>
                        <p className="text-gray-700 mb-4 text-sm md:text-base">(This section will be updated regularly...)</p>
                        <div className="w-full h-40 md:h-64 rounded-md flex items-center justify-center">
                            <img
                                src={`${import.meta.env.BASE_URL}static/cat-standing.png`}
                                alt="News visual"
                                className="max-h-full max-w-full object-cover rounded-md"
                            />
                        </div>
                    </section>
                );
            case "contact":
                return (
                    <section className="max-w-5xl mx-auto p-4 md:p-6 bg-white rounded-lg shadow-lg my-5 md:my-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#DB4437] mb-4">Contact Us</h2>
                        <p className="text-gray-700 text-sm md:text-base">
                            <strong>Address:</strong> Üniversiteler Mahallesi Bilkent 2 Park Sitesi, L3/11, Çankaya, Ankara, 06800
                        </p>
                        <p className="text-gray-700 text-sm md:text-base">
                            <strong>Email:</strong>{" "}
                            <a href="mailto:yod.ai2024@gmail.com" className="text-[#DB4437] underline">
                                yod.ai2024@gmail.com
                            </a>
                        </p>
                        <p className="text-gray-700 text-sm md:text-base">
                            <strong>Phone:</strong> +90 (538) 939 21 11 / +90 (537) 880 62 88
                        </p>
                        <p className="text-gray-700 text-sm md:text-base">
                            <strong>Website:</strong>{" "}
                            <a
                                href="https://yod-ai.github.io/yod-ai/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#DB4437] underline"
                            >
                                https://yod-ai.github.io/yod-ai/
                            </a>
                        </p>
                    </section>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen relative bg-white pt-24 pb-16">
            <BubblesBackground />
            <div className="relative z-10">
                <CustomNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
                <main>{renderTabContent()}</main>
                <footer className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-t flex justify-between items-center">
                    <div className="text-xs md:text-sm text-black">2024 YOD-AI. All rights reserved.</div>
                    <a
                        href="https://www.instagram.com/kopukorg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 transition-colors duration-200"
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}static/instagram-logo-thin.svg`}
                            alt="Instagram"
                            className="w-5 h-5 md:w-6 md:h-6"
                        />
                        <span className="text-xs md:text-base hover:font-bold">Follow us on Instagram</span>
                    </a>
                </footer>
            </div>
        </div>
    );
}

export default App;