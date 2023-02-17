import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import Routing from "./routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<p>loading....</p>}>
          <Routing />
        </Suspense>
      </BrowserRouter>
    </div>
  );
};
export default App;
