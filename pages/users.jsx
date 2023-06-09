import React from 'react';
import Link from 'next/link';
import MainContainer from '../components/MainContainer';

function users({ users }) {
  return (
    <MainContainer keywords="users next js">
      <h1>List of Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link legacyBehavior href={`/users/${user.id}`}>

              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
}

export default users;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return {
    props: { users },
  };
}
