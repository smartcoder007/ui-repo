import { RouterConfig } from "./navigation/RouterConfig.jsx";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./redux/store.jsx";

const App = () => {
    return (
        <Provider store={store}>
            <Header></Header>
            <RouterConfig />
            <Footer></Footer>
        </Provider>
    );
};

export default App;