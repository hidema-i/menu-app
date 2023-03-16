import React from "react";

type MenuItem = {
  id: number; // 商品のID
  title: string; // 商品のタイトル
  category: string; // 商品のカテゴリー
  price: number; // 商品の価格
  img: string; // 商品の画像
  desc: string; // 商品の説明
};

type MenuProps = {
  items: MenuItem[]; // 表示する商品リスト
};

// メニューのコンポーネント
const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem: MenuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
