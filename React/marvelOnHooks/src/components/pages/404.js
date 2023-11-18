import ErrorMessage from "../errorMessage/ErrorMessage"
import { Link } from "react-router-dom"

const Page404 = () => {
    return (
        <div style={{ 'marginTop': '150px' }} >
            <ErrorMessage />
            <p style={{ 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '20px' }}>Page doesn't exist</p>
            <Link style={{ 'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '150px', }} to='/'>Back to main page</Link>
        </div>
    )
}

export default Page404;