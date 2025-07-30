import { useParams, Link } from 'react-router-dom';
import { supabase } from '../supabase';
import { useEffect, useState } from 'react';

const CrewmateDetail = () => {
    const { id } = useParams();

    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await supabase.from('crewmates').select().eq('id', id).single();

            setData(data);
        }

        fetchData();
    }, [id]);

    if (!data) return <div>Loading...</div>;

    return (
        <div className='page-container'>
            <h2>{data.name}</h2>

            <div className='theme-color-img' style={{background: data.theme_color, width:60, height:60, borderRadius: '50%'}}></div>

            <p><b>Theme Color:</b> {data.theme_color}</p>

            <p><b>Motifs:</b> {data.motif.join(', ')}</p>

            <p><b>Weapon:</b> {data.weapon}</p>

            <p><b>Wish:</b> {data.wish}</p>

            <Link className='submit-button' to={`/edit/${data.id}`}>Edit Magical Girl</Link>
        </div>
    );
}

export default CrewmateDetail;