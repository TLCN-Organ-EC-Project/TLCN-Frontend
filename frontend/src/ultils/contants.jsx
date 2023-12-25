import path from './path'
import icons from '../ultils/icons'

const { AiOutlineDashboard} = icons


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
    id: 5,
    value: 'CONTACT US',
    path: `/${path.CONTACT_US}`
  }
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
  },
  {
    id: 2,
    text: 'List Order',
    path: `/${path.MEMBER}/${path.LISTORDER}`,
    icon: <AiOutlineDashboard size={20} />
  }
]