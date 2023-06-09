// MenuItem型を定義する
type MenuItem = {
  id: number; // 商品のID
  title: string; // 商品のタイトル
  category: string; // 商品のカテゴリー
  price: number; // 商品の価格
  img: string; // 商品の画像URL
  desc: string; // 商品の説明
};

// 商品の配列を定義する
const menu: MenuItem[] = [
  {
    id: 1,
    title: "simple desk",
    category: "desk",
    price: 99.99,
    img: "./images/desk1.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quod asperiores, inventore earum similique omnis!`,
  },
  {
    id: 2,
    title: "leather chair",
    category: "chair",
    price: 78.99,
    img: "./images/chair1.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quod asperiores, inventore earum similique omnis!`,
  },
  {
    id: 3,
    title: "working desk",
    category: "desk",
    price: 120.98,
    img: "./images/desk2.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quod asperiores, inventore earum similique omnis!`,
  },
  {
    id: 4,
    title: "country delight",
    category: "desk",
    price: 100.99,
    img: "./images/desk3.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quod asperiores, inventore earum similique omnis! `,
  },
  {
    id: 5,
    title: "Simple chair",
    category: "chair",
    price: 29.99,
    img: "./images/chair2.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quod asperiores, inventore earum similique omnis! `,
  },
  {
    id: 6,
    title: "Chic chair",
    category: "chair",
    price: 29.99,
    img: "./images/chair3.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quod asperiores, inventore earum similique omnis!`,
  },
  {
    id: 7,
    title: "Chic Pair of Desks",
    category: "desk",
    price: 520.98,
    img: "./images/desk4.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quod asperiores, inventore earum similique omnis!`,
  },
  {
    id: 8,
    title: "One Room Desk Set",
    category: "set",
    price: 790.99,
    img: "./images/set1.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quod asperiores, inventore earum similique omnis! `,
  },
  {
    id: 9,
    title: "Natural desk set",
    category: "set",
    price: 580.55,
    img: "./images/set2.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quod asperiores, inventore earum similique omnis!`,
  },
  {
    id: 10,
    title: "Bedroom Desk Set",
    category: "set",
    price: 680.99,
    img: "./images/set3.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui natus voluptates sint! Non architecto consectetur voluptatem. Blanditiis ex sequi dolorum?`,
  },
];
export default menu;
