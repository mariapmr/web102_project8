import { useParams, Link } from 'react-router-dom';
import { supabase } from '../supabase';
import { useEffect, useState } from 'react';

const CrewmateDetail = () => {
    const { id } = useParams();

    const [data, setData] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await supabase.from('crewmates').select().eq('id', id).single();

                if (error) console.log(error);
                
                setData(data);

                console.log(data.name)
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [id]);

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error: {error}</div>;

    if (!data) return <div>No magical girl found.</div>

    return (
        <div className='page-container'>
            <Link to='/'>
                <button>Back to Dashboard</button>
            </Link>
            
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