import "./test.css"
import React from 'react';
import Test from './view/components/common/test';
import Header from './view/components/layout/header';

const App = () => {
    return (
        <div>
            <Header />
            <Test />
            <h1>React App</h1>
        </div>
    );
}

export default App;