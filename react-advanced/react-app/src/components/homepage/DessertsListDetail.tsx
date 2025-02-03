import Dessert from "../../types/dessert";

interface Props {
    desserts: Array<Dessert>
}

function DessertsListDetail({ desserts }: Props) {
  
    const filtered: Array<Dessert> = desserts.filter((dessert: Dessert) => dessert.calories < 500);
  
    const sorted: Array<Dessert> = filtered.sort((desserta: Dessert, dessertb: Dessert) => desserta.calories - dessertb.calories); // ASC
  
    return (
      <ul>
        {
          sorted.map((dessert: Dessert, index: number) => {
            return (
                <li key={index}>
                {dessert.name} - {dessert.calories} cal
                </li>
            )
          })
        }
      </ul>
    )
  }
  
  export default DessertsListDetail;
  