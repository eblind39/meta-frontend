import DessertsListDetail from "./DessertsListDetail";
import Dessert from "../../types/dessert"
import DessertsListDetail2 from "./DessertsListDetail2";
import "../../css/controlled_uncontrolled.css";

const desserts: Array<Dessert> = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

const DessertstListMaster = () => {
  return (
    <div className="contruncontr-container" style={{ width: "70%" }}>
      <h2>List of low calorie desserts:</h2>
      <DessertsListDetail desserts={desserts} />
      <DessertsListDetail2 desserts={desserts} />
    </div>
  );
}

export default DessertstListMaster;
