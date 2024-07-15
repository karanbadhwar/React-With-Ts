import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store } from "./storeTrial.tsx";
// import { store } from "./store.ts";
import { Provider } from "react-redux";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <QueryClientProvider client={queryClient}>
  //   <App />
  //   {/* <ReactQueryDevtools /> */}
  // </QueryClientProvider>

  <Provider store={store}>
    <App />
  </Provider>
);
