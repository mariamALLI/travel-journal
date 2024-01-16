import Locpin from '../../public/images/Locpin.png'

export default function Main(props){
    console.log(props)
    
    return (
        <>
        <div className='main--container'>
            <div className='flex--card'>
                <img className='card--img' src={`./images/${props.item.imageUrl}`} alt="" />
                <div className='card--txt'>
                    <div className='loc-icon-txt'>
                        <img className='loc--pin' src={Locpin} alt="location pin icon" />
                        <h2 className='loc'>{props.item.location}</h2>
                        <a className='loc--link' href={props.item.googleMapsUrl} target='_blank'>View on Google Maps</a>
                    </div>

                    <h2 className='loc--title'>{props.item.title}</h2>
                    <h3 className='loc-date'>
                        {props.item.startDate} - {props.item.endDate}
                    </h3>
                    <p className='loc-des'>{props.item.description}</p>

                    
                </div>
               
            </div>
            <div className='line'></div>
        </div>
        </>
    )
}