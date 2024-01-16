import Circle from '../../public/images/circle.jpg'

export default function Hearder(){
    return(
        <>
        <nav className="navbar">
            <img className='circle' src={Circle} alt="world icon" />
            <h1 className='nav--text'>my travel journal.</h1>
        </nav>
        
        </>
    )
}