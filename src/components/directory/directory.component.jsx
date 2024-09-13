import CateroryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CateroryItem key={category.id} category={category}></CateroryItem>
      ))}
    </div>
  );
};
export default Directory;
