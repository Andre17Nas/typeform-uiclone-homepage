import React, {useEffect} from 'react';
import FirstAndSecond from './components/FirstAndSecond';
import Header from './components/Header';
import GlobalStyles from './styles/globalStyles';
import {Main, Sticky, Section} from './styles/index';

function App() {

  useEffect(() => {
    window.scrollTo({top: 0})
  }, [])


  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Main style={{height: '1610vh'}}>

          <Section style={{ height: '72.7%'}}> 
            <FirstAndSecond/>

          </Section>

          <Section style={{height: '9.7%'}}>
            <Sticky className="third">
              </Sticky>
          </Section>

          <Section style={{height: '10.1%'}}>
            <Sticky className="fourth">
            </Sticky>
            
          </Section>
      </Main>
    </>
  );
}

export default App;
