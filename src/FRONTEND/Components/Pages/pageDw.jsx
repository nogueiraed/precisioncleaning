//precisioncleaning/FRONTEND/Components/Pages/pageDwForm

import { useState } from "react";
import StandardPage from "../Containers/standardPage";
import DwForm from "../Forms/dwForm";
import DwList from "../Tables/dwList";


export default function PageDw(props) {
    const [showTable, setShowTable] = useState (true);
    const [dwList, setDwList] = useState ([]);



    if (showTable){
        return(
            <div>
                <StandardPage>
                    <h2>Dailyworksheets List</h2>
                    <DwList dwList={dwList} 
                            setShowTable= {setShowTable}/> 
                </StandardPage>
            </div>   
        )
    }

    else{
        return (
            <div>
                <StandardPage>
                    <h2 >Daily Worksheet Form</h2>
                    <DwForm setShowTable={setShowTable}
                            dwList= {dwList}
                            setDwList = {setDwList}
                    />
                </StandardPage>
            </div>
        )
    }    
}
