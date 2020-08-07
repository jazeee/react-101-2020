import React, { useState } from 'react';
import './App.css';

import UserIdForm from './GitHub/UserIdForm';
import GitHubContainer from './GitHub/Container';

function App() {
  const [userId, setUserId] = useState<string>('');
  return (
    <div className="App">
      <UserIdForm
        onSubmit={(userId: string) => {
          setUserId(userId);
        }}
      />
      <GitHubContainer userId={userId} />
    </div>
  );
}

export default App;
