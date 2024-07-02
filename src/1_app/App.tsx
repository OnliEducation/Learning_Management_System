import { Providers } from "./providers";
import { AppRouter } from "./routers";


export function App() {
    return (
        <Providers>
            <AppRouter />
        </Providers>
    )
}