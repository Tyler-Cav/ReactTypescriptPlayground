import { Link } from 'react-router-dom'

export default function Home() {
    return(
        <>
            <Link to='/test'>Go to Test Path</Link>
            <p> Yup this is home.</p>
        </>
    )
}