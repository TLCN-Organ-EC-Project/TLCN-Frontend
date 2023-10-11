import path from './path'
import blogimage from '../assets/blog.webp'
import icons from '../ultils/icons'

const { AiOutlineDashboard, GrGroup } = icons


export const navigation = [
  {
    id: 1,
    value: 'HOME',
    path: `/${path.HOME}`
  },
  {
    id: 2,
    value: 'PRODUCTS',
    path: `/${path.PRODUCTS}`
  },
  {
    id: 4,
    value: 'BLOGS',
    path: `/${path.BLOGS}`
  },
  {
    id: 5,
    value: 'CONTACT US',
    path: `/${path.CONTACT_US}`
  }
]

export const blogs = [
  {
    id: 1,
    title: 'IN 2017, YOUR PHONES CAMERA WILL HAVE SUPERPOWERS',
    image: 'https://digital-world-2.myshopify.com/cdn/shop/articles/blog12_1024x1024.jpg?v=1492595082',
    author: 'By Tada Theme',
    createAt: 'Dec 13, 2023',
    desc: 'Virtual reality is a somewhat understandable concept in 2016. You put on a headset, you find yourself in 3D worlds. But augmented reality -- AR -- is still a bit less understood Virtual reality is a somewhat understandable concept in 2016. You put on a headset, you find yourself in 3D worlds. But augmented reality -- AR -- is still a bit less understood. You could engage with augmented reality with a headset, and see 3D objects "projected" into your real world -- something thats usually called "mixed reality.'
  },
  {
    id: 2,
    title: 'IN 2017, YOUR PHONES CAMERA WILL HAVE SUPERPOWERS',
    image: 'https://digital-world-2.myshopify.com/cdn/shop/articles/blog12_1024x1024.jpg?v=1492595082',
    author: 'By Tada Theme',
    createAt: 'Dec 13, 2023',
    desc: 'Virtual reality is a somewhat understandable concept in 2016. You put on a headset, you find yourself in 3D worlds. But augmented reality -- AR -- is still a bit less understood Virtual reality is a somewhat understandable concept in 2016. You put on a headset, you find yourself in 3D worlds. But augmented reality -- AR -- is still a bit less understood. You could engage with augmented reality with a headset, and see 3D objects "projected" into your real world -- something thats usually called "mixed reality.'
  },
  {
    id: 3,
    title: 'IN 2017, YOUR PHONES CAMERA WILL HAVE SUPERPOWERS',
    image: 'https://digital-world-2.myshopify.com/cdn/shop/articles/blog12_1024x1024.jpg?v=1492595082',
    author: 'By Tada Theme',
    createAt: 'Dec 13, 2023',
    desc: 'Virtual reality is a somewhat understandable concept in 2016. You put on a headset, you find yourself in 3D worlds. But augmented reality -- AR -- is still a bit less understood Virtual reality is a somewhat understandable concept in 2016. You put on a headset, you find yourself in 3D worlds. But augmented reality -- AR -- is still a bit less understood. You could engage with augmented reality with a headset, and see 3D objects "projected" into your real world -- something thats usually called "mixed reality.'
  },

]


export const menuSPMoi = [
  {
    "id": 1,
    "name": "T-Shirt"
  },
  {
    "id": 2,
    "name": "Short"
  }
]

export const category = [
  {
    "id": 1,
    "name": "T-Shirt"
  },
  {
    "id": 2,
    "name": "Short"
  },
  {
    "id": 3,
    "name": "Shocks"
  },
  {
    "id": 4,
    "name": "Polo"
  },
  {
    "id": 5,
    "name": "Hat"
  },
  {
    "id": 6,
    "name": "Bag"
  },
  {
    "id": 7,
    "name": "Hoodie"
  },
  {
    "id": 8,
    "name": "Jeans"
  },
  {
    "id": 9,
    "name": "Trousers"
  }
]

export const size = [
  {
    id: 1,
    size: 'M',
  },
  {
    id: 2,
    size: 'L',
  },
  {
    id: 3,
    size: 'XL',
  },
  {
    id: 4,
    size: '2XL',
  }
]

export const memberSideBar = [
  {
    id: 1,
    text: 'Account information',
    path: `/${path.MEMBER}/${path.PERSINAL}`,
    icon: <AiOutlineDashboard size={20} />
  }
]