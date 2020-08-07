import React, { useState } from 'react';

interface Props {
  onSubmit: (userId: string) => any;
}

const UserIdForm:React.FC<Props> = props => {
  const { onSubmit } = props;
  const [userId, setUserId] = useState<string>('');

  return (
    <form onSubmit={(event) => {
      onSubmit(userId ?? '');
      event.preventDefault();
    }}>
      <label htmlFor="user-id">User ID: </label>
      <input
        id="user-id"
        value={userId}
        onChange={(event) => {
          setUserId(event.target.value)
        }}
      />
    </form>
  )
};

export default UserIdForm
