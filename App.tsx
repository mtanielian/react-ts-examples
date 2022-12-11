import React, { useState, useRef, useEffect } from 'react';
import { getPupuils } from './mock.pupil.services';
import './style.css';

import { Status, Pupil } from './interfaces';

const App = () => {
  const name: string = 'Martin';
  const refSelect: React.MutuableRefObject<Status> = useRef();
  const status: Status[] = ['Active', 'Inactive', 'Suspended'];
  const [newPupilName, setNewPupilName] = useState<string>('');
  const [newPupilAge, setNewPupilAge] = useState<number>();
  const [newPupilStatus, setNewPupilStatus] = useState<Status>();
  const [aPupíls, setAPupils] = useState<Pupil[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const p: Pupil[] = getPupuils({ name: 'juan', age: 45, status: 'Active' });
    setAPupils(p);
  });

  const handleNewPupil = (): void => {
    setError(false);
    if (!newPupilAge || newPupilName === '') {
      setError(true);
    } else {
      const pupil: Pupil = {
        name: newPupilName,
        age: newPupilAge,
        status: refSelect.current.value,
      };
      setAPupils([...aPupíls, pupil]);
    }
  };

  return (
    <div>
      <h1>Hello typescript with {name}</h1>
      <div>
        <div> Nuevos alumnos: </div>
        <input
          type="text"
          value={newPupilName}
          onChange={({ target }) => setNewPupilName(target.value)}
        />
        <input
          type="number"
          value={newPupilAge}
          onChange={({ target }) => setNewPupilAge(Number(target.value))}
        />
        <select ref={refSelect}>
          {status.map((state) => (
            <option value={state}>{state}</option>
          ))}
        </select>
        <button onClick={handleNewPupil}>Add Pupil</button>
        {error && (
          <div style={{ color: 'red' }}>Error all fileds are required</div>
        )}
      </div>
      <pre>{JSON.stringify(aPupíls, null, 4)}</pre>
    </div>
  );
};

export default App;
