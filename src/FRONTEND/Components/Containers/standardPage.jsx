//precisioncleaning/FRONTEND/Components/Containers/standarPage

import Header from "./header";
import NavigationBar from "./navigationBar";


export default function StandardPage(props) {
    return (
        <div>
            <Header text ="PRECISION CLEANING"/>
            <NavigationBar/>
            <div className="container">
                {props.children}
            </div>
        </div>
    );
}