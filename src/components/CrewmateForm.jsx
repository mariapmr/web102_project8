import React, { useState } from 'react';

const motifs = ['Feathers','Nature','Puzzle','Fruit','Fire','Film','Cherry Blossoms','Flowers','Water','Stars','Music','Ocean','Knight','Cheese','Sweets'];

const weapons = ['Light Construct Rubiks Cube','Hammer','Shield','Crossbow','Wooden Cane','Twin Batons','Multi-Jointed Spear','Scissors','Bow','Gun','Ribbon','Gloves','Machete','Halberd','Kite','Iron Fans','Shinobue','Parasol','Cutlass Sword','Trident','Book','Bubble Trumpet'];

const CrewmateForm = ({initialData = {}, onSubmit, submitLabel}) => {
    const [name, setName] = useState(initialData.name || '');

    const [themeColor, setThemeColor] = useState(initialData.theme_color || '#ff99cc');

    const [motifSelected, setMotifSelected] = useState(initialData.motif || []);

    const [weapon, setWeapon] = useState(initialData.weapon || '');

    const [wish, setWish] = useState(initialData.wish || 'I want...');

    const handleMotifToggle = (motif) => {
        setMotifSelected((prev) =>
            prev.includes(motif)
            ? prev.filter(m => m !== motif)
            : [...prev, motif]
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({ name, theme_color: themeColor, motif: motifSelected, weapon, wish });
    };

    return (
        <form className='crewmate-form' onSubmit={handleSubmit}>
            <label>
                Name: <input value={name} required onChange={e => setName(e.target.value)} />
            </label>

            <label>
                Theme Color: <input type='color' value={themeColor} onChange={e => setThemeColor(e.target.value)} />
            </label>

            <fieldset>
                <legend>Motif:</legend>

                <div className='motif-list'>
                    <p>Select as many as you'd like!</p>

                    {motifs.map(motif =>
                        <label key={motif} className='motif-chip' style={{background: motifSelected.includes(motif) ? '#fde4f2' : '#fff'}}>
                            <input type='checkbox' checked={motifSelected.includes(motif)} onChange={() => handleMotifToggle(motif)} />
                            {motif}
                        </label>
                    )}
                </div>
            </fieldset>

            <label>
                Weapon: 
                <select value={weapon} onChange={e => setWeapon(e.target.value)}>
                    <option value=''>Select a weapon!</option>

                    {weapons.map(w => <option key={w} value={w}>{w}</option>)}
                </select>
            </label>

            <label>
                Wish:<br/>

                <input value={wish} onChange={e => setWish(e.target.value)} />
            </label>

            <button className='submit-button' type='submit'>{submitLabel || 'Submit'}</button>
        </form>
    );
}

export default CrewmateForm;