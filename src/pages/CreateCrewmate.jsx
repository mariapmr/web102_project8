import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';
import CrewmateForm from '../components/CrewmateForm';

const CreateCrewmate = () => {
    const navigate = useNavigate();

    const handleSubmit = async (crewmate) => {
        const { data, error } = await supabase.from('crewmates').insert([{ ...crewmate }]).select().single();

        if (!error) navigate(`/detail/${data.id}`);
    }

    return (
        <div className='page-container'>
            <h2>Create a Magical Girl</h2>

            <CrewmateForm onSubmit={handleSubmit} submitLabel='Create' />
        </div>
    );
}

export default CreateCrewmate;