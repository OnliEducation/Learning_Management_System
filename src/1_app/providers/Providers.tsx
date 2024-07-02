import { Provider } from 'react-redux'
import {store} from '../store'

interface IProviders {
    /** Content that will be wrapped by providers. */
    readonly children: JSX.Element
}

export function Providers({ children }: IProviders): JSX.Element {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}