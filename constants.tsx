import { GearItem, Tutorial } from './types';

export const FOILS: GearItem[] = [
  {
    id: 'f1',
    brand: 'Takoon',
    name: 'Pump',
    image: 'https://takoon.com/cdn/shop/files/Pump_2_b83406bd-06ff-4063-ad94-e8ff949ff7b4_1200x.png?v=1716589858',
    description: 'A high-performance pumping foil designed for maximum lift and sustained flight with minimal effort.',
    features: ['High Lift', 'Low Stall Speed', 'Carbon Finish'],
    link: 'https://takoon.com/products/foil-pump',
    price: '789€'
  },
  {
    id: 'f2',
    brand: 'GONG',
    name: 'Trail V3',
    image: 'https://www.gong-galaxy.com/cdn/shop/files/00-25-1500-FOIL-PERF_SERIES-TRAIL-GONGFOIL-TB_1.png?v=1738146721&width=1062',
    description: 'The Trail V3 pack is the ultimate value-for-money setup to get into the world of dock starting and pumping.',
    features: ['Perf Series', 'Stable', 'Ready to Fly'],
    link: 'https://www.gong-galaxy.com/products/pack-setup-pumping-trail-v3',
    price: '639€'
  },
  {
    id: 'f3',
    brand: 'Sroka',
    name: 'S-Foil 2000 HA',
    image: 'https://srokacompany.com/wp-content/uploads/2023/03/2000HA.png',
    description: 'The 2000 HA (High Aspect) wing is a glide monster. Perfect for heavy riders or those seeking infinite flight.',
    features: ['2000cm²', 'High Aspect', 'Glide King'],
    link: 'https://srokacompany.com/produit/foil-pumping-2000-ha/',
    price: '999€'
  }
];

export const BOARDS: GearItem[] = [
  {
    id: 'b2',
    brand: 'Takoon',
    name: 'Pump Wood 80',
    image: 'https://takoon.com/cdn/shop/files/Big_b8390586-9fba-4c9e-b834-542b3198ef6f_1200x.png?v=1750927502',
    description: 'Natural Paulownia wood finish. Beautiful aesthetics combined with professional pumping performance.',
    features: ['Wood Core', 'Responsive', 'Durable'],
    link: 'https://takoon.com/products/pump-wood-80',
    price: '280€'
  },
  {
    id: 'b3',
    brand: 'Takoon',
    name: 'Pump Carbon 80',
    image: 'https://takoon.com/cdn/shop/files/Pocket-80-V4---Image-03_42e78c3a-85ea-4ac7-8b94-7d0b716b7dba_1200x.png?v=1750840294',
    description: 'Full carbon sandwich construction. The peak of lightweight efficiency for long duration flights.',
    features: ['Full Carbon', 'Lightweight', 'Elite Tech'],
    link: 'https://takoon.com/products/pump-carbon-80',
    price: '399€'
  },
  {
    id: 'b4',
    brand: 'GONG',
    name: 'Kluber 80',
    image: 'https://www.gong-galaxy.com/cdn/shop/files/1500-25-PUMPING-KLUBER-80-HDCC-GONGPUMPING-01_95140c49-65a5-4685-a7db-89447ed2d241.png?v=1755677256&width=1062',
    description: 'Short and ultra-maneuverable. Designed specifically for technical dock starts and tight turns.',
    features: ['HDCC Tech', '80cm Compact', 'Pro Shape'],
    link: 'https://www.gong-galaxy.com/en/products/gong-kluber-hdcc-pump-foil-board',
    price: '399€'
  }
];

export const TUTORIALS: Tutorial[] = [
  {
    id: 't1',
    title: 'Dock Start Mastery',
    author: '@yvonvite_AXIS',
    duration: '06:18',
    thumbnail: 'https://img.youtube.com/vi/WSXoRP9TB3U/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=WSXoRP9TB3U'
  },
  {
    id: 't2',
    title: 'How to Pump Any Foil',
    author: '@wakethief',
    duration: '08:13',
    thumbnail: 'https://img.youtube.com/vi/QpjtsrMWv2U/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=QpjtsrMWv2U'
  },
  {
    id: 't3',
    title: 'Pump Foil Advanced Tips',
    author: '@gaelfoil',
    duration: '12:45',
    thumbnail: 'https://img.youtube.com/vi/hWIveY2OV-E/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=hWIveY2OV-E'
  },
  {
    id: 't4',
    title: 'The Pumping Handbook',
    author: '@arthurfoil',
    duration: '04:30',
    thumbnail: 'https://img.youtube.com/vi/O9D2zwtnYe0/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=O9D2zwtnYe0'
  },
  {
    id: 't5',
    title: 'Pumping Endurance Secrets',
    author: '@Ludo_freefoiler',
    duration: '15:20',
    thumbnail: 'https://img.youtube.com/vi/6-dSKiGtGk8/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=6-dSKiGtGk8'
  }
];