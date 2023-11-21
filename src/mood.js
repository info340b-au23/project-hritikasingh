import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function MoodPage()  {
    const [selectedMood, setSelectedMood] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleMoodChange = (e) => {
        setSelectedMood(e.target.value);
    };

    const handleShowModal = () => {
        setShowModal(!showModal);
    };
    
    const handleCloseModal = () => {
        setShowModal(false);
    }
    const handleSubmit = () => {
        if (selectedMood) {
            navigate(`/`)
        }
    };

    return (
        <div>
            <div className="nav-container">
                <span className="menu material-icons">menu</span>
                <header>FOR ALL THE MOODS</header>
                <span className="profile material-icons">account_circle</span>
            </div>

            <div className={`selector-container ${showModal ? 'modal-container' : ''}`}>
                <h1 className="select-title">SELECT YOUR MOOD</h1>
                <p className="select-notice">SELECT YOUR MOOD AND LISTEN TO A PLAYLIST CURATED FOR YOUR MOOD.</p>

                <button className="mood-button" onClick={handleShowModal}>Choose Your Mood</button>

                {showModal && (
                    <div className="modal">
                        <form className="selector">
                            <label className="selecter-options" html="mood">MOOD:</label>
                            <select id="mood" name="mood" onChange={handleMoodChange} value={selectedMood || ''}>
                                <option value="party">Party Drake</option>
                                <option value="nostalgic">Nostalgic Drake</option>
                                <option value="heartbreak">Heartbreak Drake</option>
                                <option value="club">Hit the Club Drake</option>
                                <option value="hyped">Hyped Drake</option>
                                <option value="combination">Combination Drake</option>
                            </select>
                        </form>
                        <div className='button-container'>
                            <button className='submit-button' onClick={handleSubmit}>Submit</button>
                            <button className='close-button' onClick={handleCloseModal}>Close</button>
                        </div>
                    </div>
                )}
            </div>
            
            <footer>
                <small>
                    &copy; 2023 For All the Moods
                </small>
            </footer>
        </div>
    );
};
