

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import useRestaurantMenu from '../utils/useRestaurantMenu';
// import Shimmer from './Shimmer';
// import { useDispatch } from 'react-redux';
// import { addItems } from '../utils/cartSlice';
// const RestaurantMenu = () => {
//   const { resId } = useParams();
//   const info = useRestaurantMenu(resId);
//   const [restaurantInfo, setRestaurantInfo] = useState({
//     name: '',
//     cuisines: [],
//     costForTwoMessage: ''
//   });
//   const [menuItems, setMenuItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (info) {
//       // Extract restaurant info
//       const restaurantInfoCard = info.data.cards.find(card => card.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant');
//       if (restaurantInfoCard) {
//         const { name, cuisines, costForTwoMessage } = restaurantInfoCard.card.card.info;
//         setRestaurantInfo({ name, cuisines, costForTwoMessage });
//       }

//       // Extract menu items
//       const regularCard = info.data.cards.find(card => card.groupedCard && card.groupedCard.cardGroupMap && card.groupedCard.cardGroupMap.REGULAR);
//       if (regularCard) {
//         const menuCards = regularCard.groupedCard.cardGroupMap.REGULAR.cards.filter(card => card.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

//         const items = menuCards.flatMap(menuCard => {
//           if (menuCard.card && menuCard.card.card && menuCard.card.card.itemCards) {
//             return menuCard.card.card.itemCards.map(item => ({
//               id: item.card.info.id,
//               name: item.card.info.name,
//               description: item.card.info.description,
//               price: item.card.info.price,
//               cloudinaryImageID: item.card.info.imageId // Ensure this property exists
//             }));
//           }
//           return [];
//         });

//         setMenuItems(items);
//       }
//       setLoading(false); // Set loading to false when data is processed
//     }
//   }, [info]);

//   const { name, cuisines, costForTwoMessage } = restaurantInfo;

//   if (loading) return <Shimmer />;

//   const dispatch=useDispatch();
//   const handleAddItems=() => {
//     // dispatch an action
// dispatch(addItems("pizza"));

    
//   }
  
//   return (
//     <div className='menu'>
//       <center>
//         <h1>{name || 'Loading...'}</h1>
//         <h3>Cuisines: {cuisines.join(', ')}</h3>
//         <h3>Cost for Two: {costForTwoMessage}</h3>
//       </center>
//       <ul>
//         {menuItems.length > 0 ? (
//           menuItems.map(item => (
//             <li key={item.id} className='menu-class'>
//               <h4>{item.name}</h4>
//               <p>{item.description}</p>
//               <p>Price: ₹{item.price / 100}</p> {/* Assuming price is in paise */}
//               {item.cloudinaryImageID && (
//                 <>
//                   <img 
//                     src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.cloudinaryImageID}`} 
//                     alt={item.name} 
//                   />
//                   <button className='menu-btn' onClick={()=>{handleAddItems}}>Add +</button>
//                 </>
//               )}
//             </li>
//           ))
//         ) : (
//           <p>No menu items available.</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;




// ------------
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from './Shimmer';
import { useDispatch } from 'react-redux';
import { addItems } from '../utils/cartSlice';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const info = useRestaurantMenu(resId);
  const [restaurantInfo, setRestaurantInfo] = useState({
    name: '',
    cuisines: [],
    costForTwoMessage: ''
  });
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (info) {
      // Extract restaurant info
      const restaurantInfoCard = info.data.cards.find(card => card.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant');
      if (restaurantInfoCard) {
        const { name, cuisines, costForTwoMessage } = restaurantInfoCard.card.card.info;
        setRestaurantInfo({ name, cuisines, costForTwoMessage });
      }

      // Extract menu items
      const regularCard = info.data.cards.find(card => card.groupedCard && card.groupedCard.cardGroupMap && card.groupedCard.cardGroupMap.REGULAR);
      if (regularCard) {
        const menuCards = regularCard.groupedCard.cardGroupMap.REGULAR.cards.filter(card => card.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

        const items = menuCards.flatMap(menuCard => {
          if (menuCard.card && menuCard.card.card && menuCard.card.card.itemCards) {
            return menuCard.card.card.itemCards.map(item => ({
              id: item.card.info.id,
              name: item.card.info.name,
              description: item.card.info.description,
              price: item.card.info.price,
              cloudinaryImageID: item.card.info.imageId // Ensure this property exists
            }));
          }
          return [];
        });

        setMenuItems(items);
      }
      setLoading(false); // Set loading to false when data is processed
    }
  }, [info]);

  const { name, cuisines, costForTwoMessage } = restaurantInfo;

  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    // Dispatch an action with the item
    dispatch(addItems(item));
  }

  if (loading) return <Shimmer />;

  return (
    <div className='menu'>
      <center>
        <h1>{name || 'Loading...'}</h1>
        <h3>Cuisines: {cuisines.join(', ')}</h3>
        <h3>Cost for Two: {costForTwoMessage}</h3>
      </center>
      <ul>
        {menuItems.length > 0 ? (
          menuItems.map(item => (
            <li key={item.id} className='menu-class'>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p>Price: ₹{item.price / 100}</p> {/* Assuming price is in paise */}
              {item.cloudinaryImageID && (
                <>
                  <img 
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.cloudinaryImageID}`} 
                    alt={item.name} 
                  />
                  <button className='menu-btn' onClick={() => handleAddItems(item)}>Add +</button>
                </>
              )}
            </li>
          ))
        ) : (
          <p>No menu items available.</p>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
