//precisioncleaning/FRONTEND/Components/Containers/standarPage

import Footer from "./footer";
import Header from "./header";
import NavigationBar from "./navigationBar";


export default function StandardPage(props) {
    return (
        <div>
            <Header text ="PRECISION CLEANING"/>
            <NavigationBar/>
            <div style={{ textAlign: 'center' }} className="container">
                {props.children}
            </div>
            <Footer/>
        </div>
    );
}