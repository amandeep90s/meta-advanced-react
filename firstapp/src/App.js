import React, { memo } from 'react';
import { UserProvider, useUser } from './UserContext';

const LoggedInUser = () => {
  const { user } = useUser();

  return (
    <p>
      Hello <span className='username'>{user.name}</span>
    </p>
  );
};

const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  );
};

const Page = () => {
  const { user } = useUser();

  return (
    <>
      <h2>What is lorem ipsum?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic
        quaerat totam soluta eaque suscipit maxime velit, libero excepturi
        reiciendis delectus illo iure doloribus quisquam fugiat impedit at nemo
        numquam eius est laudantium. Ullam reiciendis officia iure blanditiis
        optio veritatis culpa soluta et, impedit placeat nemo ipsa laboriosam,
        earum natus provident fugiat, aut minus tempora deleniti! Modi odit ad,
        ab eligendi temporibus fugiat soluta culpa! A ad possimus explicabo
        ipsa, nulla sit sint dolore provident illum assumenda blanditiis
        voluptatibus ullam labore, perferendis doloremque harum suscipit esse
        quaerat numquam asperiores qui velit enim. Ducimus enim laudantium quo
        obcaecati, veritatis eveniet sint?
      </p>
      <p>Written by {user.name}</p>
    </>
  );
};

const Root = memo(() => {
  return (
    <div className='App'>
      <Header />
      <Page />
    </div>
  );
});

const App = () => {
  return (
    <UserProvider>
      <Root />
    </UserProvider>
  );
};

export default App;
