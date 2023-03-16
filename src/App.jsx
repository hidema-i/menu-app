import { useState } from "react";
import Categories from "./Categories";
import items from "./data";
import Menu from "./Menu";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  // itemsという名前でdata.jsからデータを読み込み、menuItemに設定
  const [menuItem, setMenuItem] = useState(items);

  // カテゴリーの一覧を管理するstateを初期化
  const [categories, setCategories] = useState(allCategories);

  // カテゴリーでアイテムをフィルタリングする関数
  const filterItems = (category) => {
    if (category === "all") {
      // "all"を選択した場合はすべてのアイテムを表示
      setMenuItem(items);
      return;
    }
    // 選択されたカテゴリーでアイテムをフィルタリング
    const newItems = items.filter((item) => item.category === category);
    setMenuItem(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        {/* カテゴリーコンポーネントを表示 */}
        <Categories categories={categories} filterItems={filterItems} />
        {/* フィルタリングされたアイテムを表示 */}
        <Menu items={menuItem} />
      </section>
    </main>
  );
}

export default App;
