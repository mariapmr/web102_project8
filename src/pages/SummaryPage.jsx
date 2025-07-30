import { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import { Link } from 'react-router-dom';

import CrewmateCard from '../components/CrewmateCard';

const SummaryPage = () => {
    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {
        const fetchCrewmates = async () => {
            let { data } = await supabase
                .from('crewmates')
                .select()
                .order('created_at', { ascending: false });

            setCrewmates(data);
        }

        fetchCrewmates();
    }, []);

    return (
        <div className='page-container'>
            <h2>Magical Girls</h2>

            <Link to='/create' className='submit-button'>Add New Magical Girl</Link>

            <div className='crewmates-list'>
                {crewmates.length === 0 && <p>No magical girls yet~</p>}

                {crewmates.map(mg => <CrewmateCard key={mg.id} crewmate={mg} />)}
            </div>
        </div>
    );
}

export default SummaryPage;