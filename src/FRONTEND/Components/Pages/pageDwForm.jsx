//precisioncleaning/FRONTEND/Components/Pages/pageDwForm

import DwForm from "../Forms/dwForm";
import StandardPage from "../Containers/standardPage";

export default function PageDwForm(props) {
    return (
        <div>
            <StandardPage>
                <h2 style={{ textAlign: 'center' }}>Daily Worksheet Form</h2>
                <DwForm />
            </StandardPage>
        </div>
    )
}
