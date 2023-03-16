import React from "react";

type MenuItem = {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
};

type MenuProps = {
  items: MenuItem[];
};

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
