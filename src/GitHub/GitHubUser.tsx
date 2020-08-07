import React from 'react';

interface Props {
  gitHubUser: {
    name?: string;
    bio?: string;
  };
}

const GitHubUser: React.FC<Props> = props => {
  const { gitHubUser } = props;
  return (
    <h1>GitHub User: {gitHubUser?.name}</h1>
  )
}

export default GitHubUser;
