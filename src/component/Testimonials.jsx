import React from "react";

const testimonialsText = [
    {
        text: "I've been coming here for years and [ Name ] is the best! I've never had a more consistent or higher quality hair coloring experience. I'm very particular and have followed [ Name ] from [ Business Name ] to [ Business Name ], because I do not like change! Thanks so much [ Name ]!",
        author: "[ Name ]",
    },
    {
        text: "OMG! I mean...I couldn't believe it! [ Name ] and [ Name ] made my hair and makeup look amazing! My sister and I were in town for the week and decided to get our hair and makeup done. I wanted to try something different than my normal look, and both stylists were great!",
        author: "[ Name ]",
    },
    {
        text: "I have to admit, I'm a picky client. I saw [ Name ] and [ Name ] during my visit and couldn't be happier. My hair looks amazing and I feel gorgeous! Thanks for the best mani pedi I've had since I last visited the city. I've recommended [ Business Name ] to all my friends! I love this place!",
        author: "[ Name ]",
    },
];

const images = [
    "https://lh4.googleusercontent.com/BqUj4ARH0E9r3jWRHUkA0WgPAbh8jOyo5ZjSJWdyTKUjcApoed12lVzOs-WuhHp_rWa8WRJ6QpDA086MpiKBdNF5p7Jk_A9igKh0nJjAeglm_zbMy_E8X0RSRYgrvEpReg=w1280",

    "https://lh6.googleusercontent.com/KnwUwWGoG2WuNLtvHY8W_2asxwxmZ9mDE5Et2CF_wussRlxzNmhe_up9VpH42wyhynRyjjMo-QD8mq_wr0wlNqb78TJWrKprPysLis_HjOSKiGymD5tpARqTYtfrRnIgOg=w1280",

    "https://lh5.googleusercontent.com/QgUoAjXMxoFDcXREkR_aP_QRq5zBs5cGtj1sTKsb3Y50hcClOn8WaUkozR7EVwm5MkJznSqxjnFjvc7z09qdP6txle86u-_436wgZwcNsXBVVyTlNpvwQ3CcCFHHyYkOHA=w1280",

    "https://lh5.googleusercontent.com/Fg3dUIdSJqABgXrahX7SYiT-UMaSjvxHyn32Ji-Y6HMRj1FFfO258CPNxta1Wfm6apl3kmlyKoBRtErYYLgrdOxfzsq9VnkIN8NVUQvc1M5LMD4ib9muNxhFOpRX_k4Vgw=w1280",

    "https://lh5.googleusercontent.com/lQYZMXSEeoKae6rHxtey_qgajwvgFk9Lmy1hQKE5ESS4bZHraZcEyFDJHv9ZjFMIhO5ME39kqkVhZZRUEn6NhU2yUIreXshoDEv341n-6H1dWYeufFgu5AZxI8uMtU5o1w=w1280",

    "https://lh4.googleusercontent.com/GfDqdsLHGbTDmGOuj2Ke4WbyBx-pXaqlhuIpiUHNa6ScvvuZY5oG1_OfT9mtL6Q9Y27jfzm-tfFIioz32yeHOOq_KYJ8g4or9TkAliV03jJRCn1SX7Ox-PEIf0nsGBNeqg=w1280",

    "https://lh3.googleusercontent.com/QvxgpBQZnFIl-LnS-ji3GPQH_ISqTZ9ToAGyGC3PR7BJwXq9LMeiMVVKFkZbgyxiHUuXL41dpc1X3Q4QNSvw-171QsICTEdjpgv_auRR9gISDLxYvz5DoysEDmbxfDOWpg=w1280",

    "https://lh6.googleusercontent.com/Vls_8L82mnMXOzvBKSb0zKnRUsia7fZQmIGRw-oKkE5kNBIwRelmzO2J6_MRITpWK2EGnm9ilseLouHuGXU2BG0nuxVB4vC_o5-ZjXDFUjekgN8PjHenX5D4YUZQ2kJUOQ=w1280",

    "https://lh6.googleusercontent.com/KOIQAmmbn46u-2ifDJZ5vQheqXmnRCEGKQ1JlAIcWgzTKpYjBDJpDJbUzVgd-pzZOja23JBi2QI0hAdsh2xIt5bEfydUGceV8Mhvrlo3yJKB-BL_TvbYVzb_dZ8eCFjVEQ=w1280",

    "hthttps://lh3.googleusercontent.com/X98yVDAEuZQOa1OzjjDKHpLMlunXZ5rX6kWv63-kYivMPzv8-op_28tUskRNOuLgbZpeEKA8uQc4YdZNwPDkc9zmPHlNNtK7Li8rmR9fKJ6ZOlNV0W-hAGUQmx7PBDqWjQ=w1280",

    "https://lh4.googleusercontent.com/_ZjFpNppCK63j3IeRCLdBBCSWhN5bRJ1DeH16x-ejoRavpDpIZlO-KXOg_8BFisdnrVRga413RwlE36SUbheQVYCRb6SUihCI_yHT3leBvlXqc2WVOUVfRiK3PfdP7o6=w1280",

    "https://lh3.googleusercontent.com/aER0vKQQde1sUkxmU5j3TN_IX_GdKSIup8wi6dvZgX0SlyrSJ3eFpR8SbUIcQtcBiRe-nTMGprpixaCzJuhZp-5enT4Ughh06jD2H4FhkoO6ZHqbcyPy6bIGw-vkNLYlfg=w1280",

    "https://lh3.googleusercontent.com/kJ2rnKLzXMsccGQxSZcSlm90ZLgKiz47ljuhBpwzAVLmeUXRZvuuxbZrTGn88KlyrlrlJE5CLlBgkQ0RGkr9b_ir52TFY56DMWfpbxD3WMBNHod6I4m6j4WQbsotUAuLDw=w1280",

    "https://lh5.googleusercontent.com/sYLO6IZ41eUNNcEd4S9GfQ8koGIKLtV1tGG4dghFpact6TEYeXu4Ifg4h36TZBQJHwmbWo0wA0EyHqR8qFYL_F0XMhH5RC1CGg_r7iwElsoEyLDuytV_Ssjn5ObQBUEQ_Q=w1280"
]

const Testimonials = () => {
    return (

        // header
        <div className="container-fluid w-full max-w-full font-sans">
            <div
                className="relative h-[60vh] flex items-center justify-center text-white bg-black bg-opacity-60 bg-cover bg-center w-full"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    backgroundAttachment: "fixed"
                }}
            >
                <div className="absolute h-[60vh] flex items-center justify-center text-white bg-black opacity-20 bg-cover bg-center w-full"></div>
                <div className="absolute text-center px-6 md:px-12">
                    <h1 className="text-[4rem] md:text-6xl ">Gallary & Testimonials</h1>

                </div>
            </div>
            {/*  */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="flex justify-center items-center border-b border-gray-300 pb-10 mb-7">
                    <h2 className="text-center text-4xl md:text-3xl  text-pink-600">
                        Testimonial
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-gray-700">
                    {testimonialsText.map((testimonial, index) => (
                        <div key={index} className="text-xl pl-4">
                            <p className="italic">{testimonial.text}</p>
                            <p className="mt-2 font-bold ">{testimonial.author}</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-center text-3xl text-pink-600  mt-[40px] mb-[40px] ">Our Styles</h2>


                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-y-9 gap-x-6 p-4 md:p-8 auto-rows-[300px]">
  {images.map((src, index) => (
    <img
      key={index}
      src={src}
      alt="Style"
      className={`w-full h-full object-cover ${index % 2 === 0 ? 'row-span-2' : ''}`}
    />
  ))}
</div>



            </div>
        </div>
    );
};

export default Testimonials;
