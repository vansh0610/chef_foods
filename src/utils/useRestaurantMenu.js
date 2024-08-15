// import { useEffect, useState } from "react";
// import { MENU_API } from "./constants";

// const useRestaurantMenu=(resId) => {
//     // fetch data
// const[info , setinfo]=useState(null);
// useEffect(() => {
//     fetchData();
  
// },[]);

// const fetchData=async ()=>{
//     const data=await fetch(MENU_API+resId);
//     const json=await data.json();
// setinfo(json);
// };
//   return info;
// }

// export default useRestaurantMenu;



// ------------
import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(MENU_API + resId);
        const json = await response.json();
        setInfo(json);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    if (resId) {
      fetchData();
    }
  }, [resId]);

  return info;
};

export default useRestaurantMenu;
