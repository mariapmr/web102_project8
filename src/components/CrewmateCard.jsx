import { Link } from 'react-router-dom';

const CrewmateCard = ({ crewmate }) => {
    return (
        <div className='crewmate-card'>
            <Link className='card-link' to={`/detail/${crewmate.id}`}>
                <div className='theme-color-img' style={{background: crewmate.theme_color}}></div>

                <div className='card-info'>
                    <h3>{crewmate.name}</h3>

                    <p>Weapon: <span className='chip'>{crewmate.weapon}</span></p>
                </div>
            </Link>

            <Link className='edit-button' to={`/edit/${crewmate.id}`}>Edit</Link>
        </div>
    );
}

export default CrewmateCard;