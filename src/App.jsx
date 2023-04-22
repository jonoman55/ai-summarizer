import Hero from './components/Hero';
import Demo from './components/Demo';

import './App.css';

/**
 * App Component
 */
const App = () => (
  <main>
    <div className='main'>
      <div className='gradient' />
    </div>
    <div className='app'>
      <Hero />
      <Demo />
    </div>
  </main>
);

export default App;