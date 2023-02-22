import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Routing from "./routes";
import { SpinnerFullPage } from "./SpinnerFullPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routing />
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}
export default App;
