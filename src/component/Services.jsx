import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const servicesData = [
    {
        title: "Hair Styling",
        details: [
            { name: "Blow Dry", price: "$32+" },
            { name: "Women's Cut", price: "$48+" },
            { name: "Men’s Cut", price: "$22+" },
            { name: "Children’s Cut", price: "$18+" },
            { name: "Styles", price: "$50+" },
            { name: "Single Process Color (no foils)", price: "$49+" },
            { name: "Highlights", price: "$62+" },
            { name: "Treatments", price: "+$12+" },
            { name: "Corrective Color", price: "Price upon consultation" },
            { name: "Keratin Treatment", price: "$220+" },
            { name: "Hair Extensions", price: "Price upon consultation" },
            { name: "Straightener", price: "Price upon consultation" },
            { name: "Smoother/Defrizzer", price: "Price upon consultation" },
        ],
    },
    {
        title: "Nail Treatments",
        details: [
            { name: "Manicure", price: "$22" },
            { name: "French Manicure", price: "$24" },
            { name: "Acrylic Tips", price: "$57+" },
            { name: "Fill In", price: "$57+" },
            { name: "Polish Change", price: "$14+" },
            { name: "Pedicure", price: "$47+" },
            { name: "French Pedicure", price: "$52" },
            { name: "Mini Pedicure", price: "$37" },
            { name: "Shellac", price: "$37" }
        ]
        ,
    },
    {
        title: "Makeup Services",
        details: [
            { name: "Full Face Makeup", price: "$52+" },
            { name: "Eye Makeup Only", price: "$32+" },
            { name: "Eyebrow Arch (Tweezing)", price: "$12" }
        ],
    },
];

const Services = () => {
    const [openService, setOpenService] = useState(null);

    const toggleService = (index) => {
        setOpenService(openService === index ? null : index);
    };

    return (
        <div className="font-sans">
            <div
                className="relative h-[60vh] flex items-center justify-center text-white bg-black bg-opacity-60 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    backgroundAttachment: "fixed"
                }}
            >
                 <div className="absolute h-[60vh] flex items-center justify-center text-white bg-black opacity-20 bg-cover bg-center w-full"></div>
                <div className="absolute text-center px-6 md:px-12">
                    <h1 className="text-7xl md:text-6xl ">Services</h1>


                </div>
            </div>
            {/*  */}
            <div  className="max-w-[80%] mx-auto px-4 md:px-8 py-10">
                <div className="flex justify-center items-center border-b border-gray-300 pb-4 mb-6">
                    <h2 className="text-center text-2xl md:text-3xl font-semibold text-pink-600">
                        List of Services
                    </h2>
                </div>

                <p className="text-center text-gray-600 text-xl italic mb-6">
                    You're a beautiful canvas, and we're all about helping your inner beauty emerge. We create exclusive looks inspired by your personal style, event needs, and taste. Our team uses their eye for detail and high-quality salon products to deliver a range of services.
                </p>
                <div className="mb-10 mt-10 w-full flex justify-center">
                    <img
                        className="w-full h-80 object-cover"
                        src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Service"
                    />
                </div>

                {servicesData.map((service, index) => (
                    <div key={index} className="border-b border-black">
                        <button
                            className="w-full flex justify-between 
      items-center py-4 px-6  mt-8 text-2xl  
      text-[#7F1164] hover:bg-gray-200 transition-all duration-200"
                            onClick={() => toggleService(index)}
                        >
                            {service.title}
                            {openService === index ? <FiChevronUp /> : <FiChevronDown />}
                        </button>

                        {openService === index && (
                            <div className="p-4 bg-white text-xl shadow-md">
                                <ul className="space-y-2">
                                    {service.details.map((item, i) => (
                                        <li key={i} className="text-black ">
                                            <span>{item.name}</span>
                                            <span className="text-black">|{item.price}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}



            </div>
        </div>
    );
};

export default Services;
