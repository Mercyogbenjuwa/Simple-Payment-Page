import { Link } from 'react-router-dom';

const Button = ({ page, content }) => {
    const formButtonStyle = {
        height: '45px',
        fontWeight: '700',
        color: '#F7F7FF',
        background: `linear-gradient(180deg, #F2C94C 0%, #F2994A 100%)`,
        borderRadius: `10px`,
        marginTop: '5px', 
        padding: '20px 6rem',
        display: 'flex',
        alignItems: 'center',
        cursor: 'Pointer'
    }

    return(
        <Link to={page} style={formButtonStyle} >{content} </Link>
    )
}

export default Button;