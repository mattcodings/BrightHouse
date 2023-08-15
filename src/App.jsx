import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  Bedroom,
  LivingRoom,
  Kitchen,
  Bathroom,
  DiningRoom,
  KidsRoom,
  Layout,
} from "./rooms";

const router = createBrowserRouter([
  {
    path: "/brighthouse/",
    element: <Layout />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Bedroom />,
      },
      {
        path: "living-room",
        element: <LivingRoom />,
      },
      {
        path: "kitchen",
        element: <Kitchen />,
      },
      {
        path: "bathroom",
        element: <Bathroom />,
      },
      {
        path: "dining-room",
        element: <DiningRoom />,
      },
      {
        path: "kids-room",
        element: <KidsRoom />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
