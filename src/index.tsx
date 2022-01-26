import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import AppWithRedux from "./components/AppWithRedux";
import {store} from "./components/store/store";

ReactDOM.render(
    <Provider store={store} >
    {/*<App/>,*/}
    {/*<AppWithReducer/>,*/}
    <AppWithRedux/>,
    </Provider>,
    document.getElementById('root'));





serviceWorker.unregister();
