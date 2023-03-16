import React from "react";

// Menuコンポーネントは、itemsというpropsを受け取ります。
const Menu = ({ items }) => {
  return (
    // メニューアイテムを表示するためのセクションセンターをレンダリングします。
    <div className="section-center">
      {items.map((menuItem) => {
        // menuItemから、id、title、img、desc、priceの各プロパティを抽出します。
        const { id, title, img, desc, price } = menuItem;
        // メニューアイテムをレンダリングします。
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

// Menuコンポーネントをエクスポートします。
export default Menu;
