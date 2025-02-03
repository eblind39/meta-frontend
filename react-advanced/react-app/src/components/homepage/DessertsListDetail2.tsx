import React from "react";
import Dessert from "../../types/dessert";

interface Props {
    desserts: Array<Dessert>
}

function DessertsListDetail2({ desserts }: Props) {

    const lowCaloriesDesserts= desserts.filter((dessert: Dessert) => dessert.calories < 500)
                                       .sort((desserta: Dessert, dessertb: Dessert) => dessertb.calories - desserta.calories) // DESC
                                       .map((dessert: Dessert, index: number) => {
                                          return (
                                              <li key={index}>
                                              {dessert.name} - {dessert.calories} cal
                                              </li>
                                          )
                                        });
  
    return React.createElement('ul', null, lowCaloriesDesserts);
  }
  
  export default DessertsListDetail2;
  