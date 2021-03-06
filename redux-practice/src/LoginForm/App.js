import { Provider } from 'react-redux';
import { store } from './redux/store';
import Form from './components/Form';

export default function App() {
    return (
        <Provider store={store}>
            <Form />
        </Provider>   
    )
}