
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';
import About from './component/About';
import Todo from './component/Todo';
import Skill from './component/Skill';
import Portfolio from './component/Portfolio';

    // About portfolio TodoList skill
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="portfolio" element={< Portfolio />}/>
          <Route path="todo" element={<Todo />}/>
          <Route path="skill" element={<Skill />}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
