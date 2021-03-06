import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Sponsors from './Sponsors';
import Exec from './Exec';
import Events from './Events';
import ContactUs from './ContactUs';
import '../styles/main.css';

const Main = () => (
    <main>
        <div className="content">
            <Switch>
                <Route exact path='/' component={About}/>
                <Route path='/sponsors' component={Sponsors}/>
                <Route path='/exec' component={Exec}/>
                <Route path='/contact' component={ContactUs}/>
                <Route path='/events' component={Events}/>
            </Switch>
        </div>
    </main>
)

export default Main;

// class App {
// 	render() {
// 		return (
// 			<div className="App">
// 				<Header />
// 				<div className="App-Content">
// 					<About />
// 					{/* <Sponsors /> */}
// 					<Exec />
// 					{/* <ContactUs /> */}
// 				</div>
// 			</div>
// 		);
// 	}
// }