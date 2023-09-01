import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import App from "./App";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
        <StrictMode>
            <App />
        </StrictMode>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>,
);
