import React from "react";

const Home = () => {
    return (
        <div className="container-fluid w-full max-w-full font-sans">
            {/* Hero Section */}
            <div
                className="relative h-[60vh] flex items-center justify-center text-white bg-black bg-opacity-60 bg-cover bg-center w-full"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    backgroundAttachment: "fixed"
                }}
            >
                <div className="absolute h-[60vh] flex items-center justify-center text-white bg-black opacity-20 bg-cover bg-center w-full"></div>
                <div className="absolute text-center px-6 md:px-12">
                    <h1 className="text-7xl md:text-6xl font-bold">Look & Feel Beautiful</h1>
                    <p className="mt-4 text-4xl md:text-xl">The Best Service. The Best Styles.</p>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="flex flex-col items-center justify-center mx-auto w-full py-9 border-b border-gray-300 shadow-lg bg-white px-6 md:px-12">
                <p>Need to speak with a specific stylist?</p>
                <button className="mt-6 bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-lg text-lg">
                    Schedule a Call
                </button>
            </div>

            {/* Services Section */}
            <div className="py-16 px-6 md:px-12 text-center w-full">
                <h2 className="text-3xl font-semibold text-pink-700">A Full Service Experience</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-9 w-full px-6 md:px-12">
                    <div className="flex flex-col items-center">
                        <img src="https://images.unsplash.com/photo-1581674210501-c760093514e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hair Styling" className="w-full max-w-[80%] h-auto sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover" />
                        <h3 className="mt-4 text-[1.8rem] text-[#7F1146] sm:text-[20px]">Hair Styling</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Nail Treatments" className="w-full max-w-[80%] h-auto sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover" />
                        <h3 className="mt-4 text-[1.8rem] text-[#7F1146] sm:text-[20px]">Nail Treatments</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://images.unsplash.com/photo-1520173043194-dc6b2a237fee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Makeup Services" className="w-full max-w-[80%] h-auto sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover" />
                        <h3 className="mt-4 text-[1.8rem] text-[#7F1146] sm:text-[20px]">Makeup Services</h3>
                    </div>
                </div>

                <p className="mt-[60px] lg:text-2xl max-w-full mx-auto text-[#7F1146] text-left md:text-xl sm:text-[20px] font-[Lora] px-6 md:px-12">
                    At [ Business Name ], our goal is to make you shine like a star. We create flattering, contemporary looks for our guests, specializing in versatile styles for everyday life. Whether you want something fashion forward, timeless, or just for a special event, [ Business Name ] has your answer.
                </p>
                <p className="mt-6 lg:text-2xl max-w-full mx-auto text-[#7F1146] md:text-xl text-left sm:text-[20px] font-[Lora] px-6 md:px-12">
                    We believe that you are your best accessory. This is why we offer a full service experience including hair styling, nail treatments, and makeup services.
                </p>
            </div>
        </div>
    );
};

export default Home;
