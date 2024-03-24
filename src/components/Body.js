
import Login from "./Login";

import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // corrected import

const Body = () => {
  
    const appRouter = createBrowserRouter([
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/browse",
          element: <Browse />,
        },
      ]);
    
   

    return (
        <div>
          <RouterProvider router={ appRouter } />
        </div>
      );
    };

export default Body;
