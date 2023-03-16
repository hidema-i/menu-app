import React from "react";

// Props の型を定義
type CategoriesProps = {
  categories: string[]; // カテゴリの配列
  filterItems: (category: string) => void; // カテゴリのフィルタリング関数
};

// コンポーネントを定義
const Categories: React.FC<CategoriesProps> = ({ categories, filterItems }) => {
  // カテゴリの配列をループしてボタンを作成し、クリック時にフィルタリング関数を呼び出す
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

// コンポーネントをエクスポート
export default Categories;
