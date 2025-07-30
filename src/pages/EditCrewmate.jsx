import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

import CrewmateForm from '../components/CrewmateForm';

const EditCrewmate = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const [initData, setInitData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await supabase.from('crewmates').select().eq('id', id).single();

            setInitData(data);
        }

        fetchData();
    }, [id]);

    const handleUpdate = async ( update ) => {
        await supabase.from('crewmates').update(update).eq('id', id);

        navigate(`/detail/${id}`);
    }

    const handleDelete = async () => {
        await supabase.from('crewmates').delete().eq('id', id);

        navigate('/');
    }

    if (!initData) return <div>Loading...</div>;
    
    return (
        <div className="page-container">
            <h2>Edit: {initData.name}</h2>
        
            <CrewmateForm initialData={initData} onSubmit={handleUpdate} submitLabel="Update" />
            
            <button className="btn-main delete" onClick={handleDelete}>🗑 Delete Crewmate</button>
        </div>
    );
}

export default EditCrewmate;