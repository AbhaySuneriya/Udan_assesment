import React from "react";

const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Salon interior with modern design",
      description: "A luxurious salon space with comfortable seating and stylish decor.",
    },
    {
      id: 2,
      url: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
      alt: "Hairdresser styling a client's hair",
      description: "A professional stylist working on a trendy haircut.",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Barber using scissors for a precise cut",
      description: "A barber giving a classic trim using scissors and a comb.",
    },
    {
      id: 4,
      url: "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Makeup artist applying eyeshadow",
      description: "A skilled makeup artist creating a glamorous look.",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Manicurist applying nail polish",
      description: "A fresh manicure with vibrant nail polish colors.",
    },
    {
      id: 6,
      url: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Client getting a hair wash",
      description: "A relaxing hair wash at a high-end salon.",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Facial treatment at a spa",
      description: "A rejuvenating facial for glowing skin.",
    },
    {
      id: 8,
      url: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Hair coloring session",
      description: "A stylist applying a beautiful hair dye treatment.",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
      alt: "Salon team posing together",
      description: "A friendly team of stylists ready to serve clients.",
    },
  ];
  

const AboutPage = () => {
    return (
        <div className="font-sans">

            <div
                className="relative h-[60vh] flex items-center justify-center text-white bg-black bg-opacity-60 bg-cover bg-center w-full"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    backgroundAttachment: "fixed"
                }}
            >
               <div className="absolute h-[60vh] flex items-center justify-center text-white bg-black opacity-20 bg-cover bg-center w-full"></div>
                <div className=" absolute text-center px-6 md:px-12">
                    <h1 className="text-7xl md:text-6xl font-bold">About</h1>
                    
                </div>
            </div>
            {/* Header */}
            <div className="max-w-[80%] mx-auto px-4 md:px-8 py-10">
                <div className="flex justify-center items-center border-b border-gray-300 pb-10 mb-7">
                    <h2 className="text-center text-2xl md:text-3xl font-semibold text-pink-600">
                        The [ Business Name ] Experience
                    </h2>
                </div>


                {/* Hero Section */}
                <div className="grid md:grid-cols-2 gap-4 px-4 md:px-16">
                    <img
                        src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Barber cutting hair"
                        className="w-full h-auto rounded-lg"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Hair styling tools"
                        className="w-full h-auto rounded-lg"
                    />
                </div>

                {/* About Text */}
                <div className="text-left text-2xl font-[Lora] py-10 text-gray-700 border-b border-gray-300">
    <p>
        [ Business Name ] has been serving the metro area since 2010. Founded by [ Name ] and [ Name ],
        [ Business Name ] provides unisex services to make everyone look and feel their most beautiful.
        Our staff of nine stylists is here to support your vision and unlock your inner shine.
        We exclusively use [ Product Name ] styling products.
    </p>
    <p className="mt-4">
        We've been featured in numerous magazines including [ Press ], [ Press ], [ Press ] and Looking for Looks.
        Our stylists have appeared on [ Press ], [ Press ], and [ Press ]. Our nail and makeup artists
        have worked with a number of Hollywood production companies for both TV and film.
    </p>
    <p className="mt-6 pb-3">Call or email us to book an appointment today!</p>
</div>


                {/* Stylists Section */}
                <div className="text-center text-4xl text-pink-700 py-10">Our Stylists</div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-16">
                    {images.map((img, id) => (
                        <div key={img.id} className="text-center">
                            <img
                                src={img.url}
                                alt={img.alt}
                                className="w-full h-80 object-cover rounded-lg"
                            />
                            <p className="mt-2">[ Name ]</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default AboutPage;
