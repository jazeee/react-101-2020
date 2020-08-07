import React, { useEffect, useState } from 'react';
import GitHubUser from './GitHubUser';

interface Props {
  userId: string;
};

const URL_PREFIX = 'https://api.github.com/users'

const GitHubContainer: React.FC<Props> = props => {
  const { userId } = props;
  const [gitHubUser, setGitHubUser] = useState();

  useEffect(() => {
    let isCurrent = true;
    if (userId) {
      fetch(`${URL_PREFIX}/${userId}`)
        .then(response => response.json())
        .then((result) => {
          if (isCurrent) {
            setGitHubUser(result)
          }
        });
    }
    return () => {
      isCurrent = false;
    }
  }, [userId]);

  if (!gitHubUser) {
    return null;
  }

  return <GitHubUser gitHubUser={gitHubUser} />;
}

export default GitHubContainer;
