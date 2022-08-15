import './App.css';
import BackFoto from './component/BackFoto/backfoto';
import Content from './component/Content/content';
import Content2 from './component/Content2/content2';
import Header from './component/Header/header';
import News from './component/News/news';
import Social from './component/Social/social';

function App() {
  return (
    <>
      <Header />
      <Content />
      <News/>
      <Content2/>
      <BackFoto/>
      <Social/>
    </>

  );
}

export default App;
