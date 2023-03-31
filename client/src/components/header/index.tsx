import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    )
}