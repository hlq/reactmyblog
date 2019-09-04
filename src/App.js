import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Header from './common/header';
import store from './store';

import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component{
    render(){
        return(
            <Provider store={store} className="App">
                <Header/>
                <BrowserRouter>
                    {/*exact 精确？ */}
                    <Route path="/" exact render={() => <div>HOME</div>} ></Route>
                    <Route path="/detail" exact render={() => <div>DETAIL</div>} ></Route>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
