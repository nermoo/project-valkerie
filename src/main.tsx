import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import Counter from './components/Counter/counter';

import './index.module.less'



// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="project-valkerie/" element={<Counter />}>
//       <Route path="counter" element={<App />} />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
