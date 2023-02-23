import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Sorin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'STM 32 NUCLEO-F411RE',
      slug: 'stm-32-nucleo-f411re',
      category: 'Development Board',
      image: '/images/p1.jpg', // 679px × 829px
      price: 30,
      countInStock: 12,
      brand: 'Nucleo',
      rating: 4.5,
      numReviews: 7,
      description: 'high quality product',
    },
    {
      // _id: '2',
      name: 'Arduino UNO R3',
      slug: 'arduino-uno-r3',
      category: 'Development Board',
      image: '/images/p2.jpg',
      price: 100,
      countInStock: 0,
      brand: 'Arduino',
      rating: 4.0,
      numReviews: 25,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'ATMEGA 328P',
      slug: 'atmega-328p',
      category: 'Microcontroller',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'ATMEL',
      rating: 4.5,
      numReviews: 39,
      description: 'high quality microcontroller',
    },
    {
      // _id: '4',
      name: 'ATMEGA 324P',
      slug: 'atmega-324p',
      category: 'Microcontroller',
      image: '/images/p4.jpg',
      price: 25,
      countInStock: 5,
      brand: 'MICROCHIP',
      rating: 4.5,
      numReviews: 30,
      description: 'high quality microcontroller',
    },
  ],
};
export default data;
