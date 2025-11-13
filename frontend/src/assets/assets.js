//SHOP IMAGE

import shop_img1_1 from '../assets/shop_1.1.jpg'
import shop_img1_2 from '../assets/shop_1.2.jpg'
import shop_img2_1 from '../assets/shop_2.1.jpg'
import shop_img3_1 from '../assets/shop_3.1.jpg'
import shop_img4_1 from '../assets/shop_4.1.jpg'
import shop_img4_2 from '../assets/shop_4.2.jpg'
import shop_img4_3 from '../assets/shop_4.3.jpg'
import shop_img5_1 from '../assets/shop_5.1.jpg'
import shop_img6_1 from '../assets/shop_6.1.jpg'
import shop_img7_1 from '../assets/shop_7.1.jpg'
import shop_img8_1 from '../assets/shop_8.1.jpg'
import shop_img9_1 from '../assets/shop_9.1.jpg'
import shop_img10_1 from '../assets/shop_10.1.jpg'
import shop_img11_1 from '../assets/shop_11.1.jpg'
import shop_img12_1 from '../assets/shop_12.1.jpg'
import shop_img13_1 from '../assets/shop_13.1.jpg'
import shop_img14_1 from '../assets/shop_14.1.jpg'
import shop_img15_1 from '../assets/shop_15.1.jpg'
import shop_img16_1 from '../assets/shop_16.1.jpg'
import shop_img17_1 from '../assets/shop_17.1.jpg'
import shop_img18_1 from '../assets/shop_18.1.jpg'
import shop_img19_1 from '../assets/shop_19.1.jpg'
import shop_img20_1 from '../assets/shop_20.1.jpg'
import shop_img21_1 from '../assets/shop_21.1.jpg'
import shop_img22_1 from '../assets/shop_22.1.jpg'
import shop_img23_1 from '../assets/shop_23.1.jpg'
import shop_img24_1 from '../assets/shop_24.1.jpg'
import shop_img25_1 from '../assets/shop_25.1.jpg'
import shop_img26_1 from '../assets/shop_26.1.jpg'
import shop_img27_1 from '../assets/shop_27.1.jpg'
import shop_img28_1 from '../assets/shop_28.1.jpg'
import shop_img29_1 from '../assets/shop_29.1.jpg'
import shop_img30_1 from '../assets/shop_30.1.jpg'
import shop_img31_1 from '../assets/shop_31.1.jpg'

//ICON IMAGE

import dropdownIcon from './dropdown_icon.png'
import menuIcon from './menu_icon.png'
import profileIcon from './profile_icon.png'
import starIcon from './star_icon.png'

//EMPLOYEES IMAGE

import emp1_img from './p_img2.png'
import emp2_img from './p_img39.png'
import emp3_img from './p_img1.png'
import emp4_img from './p_img13.png'
import emp5_img from './hero_img.png'

export const assets = {
    dropdownIcon,
    menuIcon,
    profileIcon,
    starIcon
}

export const shops = [
    {
        _id: "aaaaa",
        name: "Morocca",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz",
        image: [shop_img1_1, shop_img1_2],
        category: "Women",
        location: "Pendik/İstanbul",
        rating: 4.6,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                description: "Ben sizlere en iyi hizmeti verebilmek için buradayım.",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür", "Saç Kesimi"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                description: "Ben sizlere en iyi hizmeti verebilmek için buradayım.",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            },
            {
                _id: "emp3",
                name: "Ebru Kınat",
                description: "Ben sizlere en iyi hizmeti verebilmek için buradayım.",
                image: [emp3_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            },
            {
                _id: "emp4",
                name: "Nuray Binicioğlu",
                description: "Ben sizlere en iyi hizmeti verebilmek için buradayım.",
                image: [emp4_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"
                ]
            },
            {
                _id: "emp5",
                name: "Beyza Koçak",
                description: "Ben sizlere en iyi hizmeti verebilmek için buradayım.",
                image: [emp5_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]
    },
    {
        _id: "aaaab",
        name: "Buchraiser",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img2_1],
        category: "Men",
        location: "Kartal/İstanbul",
        rating: 4.3,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür", "Saç Kesimi"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            },
            {
                _id: "emp3",
                name: "Ebru Kınat",
                image: [emp3_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]
    },
    {
        _id: "aaaac",
        name: "Soft",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img3_1],
        category: "Women",
        location: "Maltepe/İstanbul",
        rating: 4.1,
        services: [
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Saç Kesimi"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Tırnak bakımı ve tırnak protezi"]
            }
        ]
    },
    {
        _id: "aaaad",
        name: "Berber Burak",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img4_1, shop_img4_2, shop_img4_3],
        category: "Men",
        location: "Kaynarca/İstanbul",
        rating: 4.0,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 },
            { name: "Saç Kaynak", price: 100 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür", "Saç Kesimi", "Saç Kaynak"]
            },
            {
                _id: "emp3",
                name: "Ebru Kınat",
                image: [emp3_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]
    },
    {
        _id: "aaaae",
        name: "Kuaför Beyza",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img5_1],
        category: "Women",
        location: "Kurtköy/İstanbul",
        rating: 3.9,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp5",
                name: "Beyza Koçak",
                image: [emp4_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp4",
                name: "Nuray Binicioğlu",
                image: [emp5_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]
    },
    {
        _id: "aaaaf",
        name: "Berber Harun",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img6_1],
        category: "Men",
        location: "Esenler/İstanbul",
        rating: 4.4,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]
    },
    {
        _id: "aaaag",
        name: "Lüx Hairdress",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img7_1],
        category: "Women",
        location: "Bağcılar/İstanbul",
        rating: 3.5,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]
    },
    {
        _id: "aaaah",
        name: "Kevin Morphy",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img8_1],
        category: "Men",
        location: "Kadıköy/İstanbul",
        rating: 4.7,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]
    },
    {
        _id: "aaaai",
        name: "Cool Barber",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img9_1],
        category: "Men",
        location: "Fatih/İstanbul",
        rating: 4.8,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]
    },
    {
        _id: "aaaaj",
        name: "Make Up",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img10_1],
        category: "Women",
        location: "Göztepe/İstanbul",
        rating: 4.5,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]
    },
    {
        _id: "aaaak",
        name: "Wait",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img11_1],
        category: "Men",
        location: "Beykoz/İstanbul",
        rating: 3.4,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]
    },
    {
        _id: "aaaal",
        name: "Dövmece",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img12_1],
        category: "Women",
        location: "Çubuk/Ankara",
        rating: 3.1,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]
    },
    {
        _id: "aaaam",
        name: "Mor Kuaför",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img13_1],
        category: "Women",
        location: "Pursaklar/Ankara",
        rating: 4.9,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]
    },
    {
        _id: "aaaan",
        name: "Tarz Kuaför",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img14_1],
        category: "Women",
        location: "Çankaya/Ankara",
        rating: 4.7,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp3",
                name: "Ebru Kınat",
                image: [emp3_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp4",
                name: "Nuray Binicioğlu",
                image: [emp5_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]

    },
    {
        _id: "aaaao",
        name: "Saade",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img15_1],
        category: "Women",
        location: "Ulus/Ankara",
        rating: 4.2,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]

    },
    {
        _id: "aaaap",
        name: "Kuaför Selin",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img16_1],
        category: "Women",
        location: "Kızılay/Ankara",
        rating: 4.4,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]

    },
    {
        _id: "aaaar",
        name: "Fashion Hair Saloon",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img17_1],
        category: "Men",
        location: "Kahramankazan/Ankara",
        rating: 4.4,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]

    },
    {
        _id: "aaaas",
        name: "Barber Cut",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img18_1],
        category: "Men",
        location: "Keçiören/Ankara",
        rating: 3.0,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]

    },
    {
        _id: "aaaat",
        name: "Salon Aniello",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img19_1],
        category: "Men",
        location: "Çayyolu/Ankara",
        rating: 2.0,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]

    },
    {
        _id: "aaaau",
        name: "Alley Barber Salon",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img20_1],
        category: "Men",
        location: "Mengen/Bolu",
        rating: 4.1,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]

    },
    {
        _id: "aaaav",
        name: "CHAP&CO",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img21_1],
        category: "Men",
        location: "Merkez/Bolu",
        rating: 5.0,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]

    },
    {
        _id: "aaaay",
        name: "Shaves&Trims",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img22_1],
        category: "Men",
        location: "Mudurnu/Bolu",
        rating: 4.6,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]

    },
    {
        _id: "aaaaz",
        name: "Daginik",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img23_1],
        category: "Men",
        location: "Göynük/Bolu",
        rating: 4.4,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]

    },
    {
        _id: "aaaba",
        name: "Kuaför JAPON ",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img24_1],
        category: "Women",
        location: "Gerede/Bolu",
        rating: 4.2,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]

    },
    {
        _id: "aaabb",
        name: "Entel",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img25_1],
        category: "Women",
        location: "Sapanca/Sakarya",
        rating: 3.9,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]

    },
    {
        _id: "aaabc",
        name: "Oldwell",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img26_1],
        category: "Women",
        location: "Mudanya/Bursa",
        rating: 4.8,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]

    },
    {
        _id: "aaabd",
        name: "Berber Japon",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img27_1],
        category: "Men",
        location: "Ayvalık/Balıkesir",
        rating: 4.4,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]

    },
    {
        _id: "aaabf",
        name: "Kuaför Nice",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img28_1],
        category: "Women",
        location: "Bandırma/Balıkesir",
        rating: 4.4,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]
    },
    {
        _id: "aaabg",
        name: "Pacific Ocean",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img29_1],
        category: "Men",
        location: "Çınarcık/Yalova",
        rating: 4.3,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]

    },
    {
        _id: "aaabh",
        name: "Berber Dar",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img30_1],
        category: "Men",
        location: "Bahçelievler/Ankara",
        rating: 3.6,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]

    },
    {
        _id: "aaabi",
        name: "Berber Mutlu",
        description: "Biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz biz bir güzellik merkeziyiz ",
        image: [shop_img31_1],
        category: "Men",
        location: "Gölbaşı/Ankara",
        rating: 3.7,
        services: [
            { name: "Nail Art", price: 300 },
            { name: "Manikür & Pedikür", price: 250 },
            { name: "Tırnak bakımı ve tırnak protezi", price: 400 },
            { name: "Saç Kesimi", price: 200 }
        ],
        employees: [
            {
                _id: "emp1",
                name: "Burhan Latif",
                image: [emp1_img],
                service: ["Nail Art", "Manikür & Pedikür"]
            },
            {
                _id: "emp2",
                name: "Emre Arslan",
                image: [emp2_img],
                service: ["Nail Art", "Manikür & Pedikür", "Tırnak bakımı ve tırnak protezi"]
            }
        ]

    },

]

