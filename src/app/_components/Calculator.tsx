import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button'; // changing to tailwind eventually
import TextField from '@mui/material/TextField'; // changing to tailwind eventually

const Calculator = () => {
    const [totalXp, setTotalXp] = useState(0);
    const [neededXp, setNeededXp] = useState(0);
    const [nextLevel, setNextLevel] = useState(1);
    const [nextLevelXp, setNextLevelXp] = useState(0);
    const [characterName, setCharacterName] = useState('');
    const [characterLevel, setCharacterLevel] = useState(1);
    const [currentXp, setCurrentXp] = useState(0);
    const [newXp, setNewXp] = useState(0);
    const [xpValues] = useState(data.xpValues); // move to api
    const [showDetails, setShowDetails] = useState(false);

    const setValue = (valueContext, value) => {
        // valueContext is a string value that determines which action to fire
        switch(valueContext) {
            case 'totalXp':
                setTotalXp(value);
                break;
            case 'characterName':
                setCharacterName(value);
                break;
            case 'characterLevel':
                setCharacterLevel(value);
                break;
            case 'currentXp':
                setCurrentXp(value);
                break;
            case 'nextLevel':
                setNextLevel(value);
            case 'newXp':
                setNewXp(value);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if(currentXp !== 0) {
            setTotalXp(currentXp + newXp);
            setNextLevel(characterLevel + 1);

            // takes the current user's xp + 1 and finds the corresponding xp total
            let levelObject = xpValues.find(obj => obj.level === characterLevel + 1);
            let startingXp = levelObject.startingXP;

            setNextLevelXp(startingXp);
            setNeededXp(startingXp - totalXp);

        }
    }, [
        setNextLevel,
        setTotalXp,
        setNeededXp,
        xpValues,
        totalXp,
        newXp,
        currentXp,
        nextLevelXp,
        nextLevel,
        characterLevel,
        neededXp
    ]);

    const handleCalc = () => {
        setCharacterName(document.getElementById('charName').value);
        setCharacterLevel(parseInt(document.getElementById('charLevel').value));
        setCurrentXp(parseInt(document.getElementById('currXp').value));
        setNewXp(parseInt(document.getElementById('newXp').value));
        setShowDetails(true);
    };

    const restartCalc = () => {
        setShowDetails(false);
        
        document.getElementById('charName').value = characterName;
        document.getElementById('currXp').value = totalXp;
        document.getElementById('newXp').value = 0;

        if(totalXp >= nextLevelXp) {
            document.getElementById('charLevel').value = characterLevel + 1;
            setNextLevel(nextLevel + 1);
        } else {
            document.getElementById('charLevel').value = characterLevel;
        }

        setTotalXp(0);
    };

    return (
        <section>
            <div className="content_wrap">
            <form>
                <TextField id="charName" className="inputs" fullWidth={true} label="Character Name" value={characterName} />
                <TextField id="charLevel" className="inputs" fullWidth={true} label="Character Level" value={characterLevel} />
                <TextField id="currXp" className="inputs" fullWidth={true} label="Current XP" value={currentXp} />
                <TextField id="newXp" className="inputs" fullWidth={true} label="Newly Earned XP" required />
                <div className="button_container">
                    <Button type="submit" id="submit" onClick={() => handleCalc()}>Compute</Button>
                    <Button type="restart" id="restart" onClick={() => restartCalc()}>Restart</Button>
                </div>
            </form>
                {
                    showDetails && <React.Fragment>
                        <h2>New Total Xp</h2>
                        <div id="newTotalXp">{ totalXp }</div><br />
                    </React.Fragment>
                }
                {
                   showDetails && <div id="nextLevelCalc">
                        <p>
                            {
                                neededXp > 0 ? 'You are ' + neededXp + 'xp from level ' + nextLevel :
                                'Congratulations, on leveling up!'
                            }
                        </p>
                    </div>
                }
            </div>
        </section>
    );
}

export default Calculator;
