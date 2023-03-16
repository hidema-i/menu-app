import React from "react";

import { useState } from "react";
import Categories from "./Categories";
import items from "./data";
import Menu from "./Menu";

// MenuItemとMenuPropsという型を定義
type MenuItem = {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
};

// 全てのカテゴリーを抽出し、配列に格納
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  // MenuItemの配列とcategoriesの配列をuseStateで管理
  const [menuItem, setMenuItem] = useState<MenuItem[]>(items);
  const [categories, setCategories] = useState<string[]>(allCategories);

  // カテゴリーに基づいてメニューアイテムをフィルタリングする関数
  const filterItems = (category: string) => {
    if (category === "all") {
      // カテゴリーが'all'の場合、すべてのアイテムを表示する
      setMenuItem(items);
      return;
    }
    // カテゴリーに一致するアイテムを抽出する
    const newItems = items.filter((item) => item.category === category);
    setMenuItem(newItems);
  };
  // メインコンポーネントをレンダリング
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        {/* Categoriesコンポーネントを呼び出し、propsを渡す */}
        <Categories categories={categories} filterItems={filterItems} />
        {/* Menuコンポーネントを呼び出し、propsを渡す */}
        <Menu items={menuItem} />
      </section>
    </main>
  );
}

export default App;
