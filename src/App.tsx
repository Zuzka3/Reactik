import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Counter from './Counter.tsx';
import Bgcolor from './Bgcolor.tsx';
import Title from './Title.tsx';
import { UserCard } from './UserCard';
import { User } from './types';

const user1: User = {
  name: 'Nella',
  age: 18,
  email: 'gaskova@spsejecna.cz',
  isStudent: true,
  address: 'Chorvatska',
  hobbies: ['Reading', 'Riding'],
};

const user2: User = {
  name: 'Martinek',
  age: 19,
  email: 'rosic@spsejecna.cz',
  hobbies: ['Driving', 'Traveling'],
};

function App() {
  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <h2>První počítadlo:</h2>
        <Counter /> {}
        <h2>Druhé počítadlo:</h2>
        <Counter /> {}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Bgcolor /> {}
      <div>
        <Title text='Můj první nadpis'></Title>
        <Title text='Můj druhý nadpis' color='red'></Title>
        <Title text='Můj třetí nadpis' color='blue'></Title>
      </div>
      <div>
        <UserCard user={user1} />
        <UserCard user={user2} />
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
