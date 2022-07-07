import * as React from 'react';
import NavBar from '../components/NavBar';
import Carousell from '../components/Home/Carousell';
import HomePicOne from '../images/HomePicOne.png';
import HomePicTwo from '../images/HomePicTwo.png';

function PageHome() {
  return (
    <>
      <NavBar />
      <Carousell />
      <div className="homeCardOne">
        <img className="pageImageOne" src={HomePicOne} alt="HomePicOne" width="332px" height="300px" />
        <p style={{ fontSize: '20px', marginTop: '20px' }}>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
          It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old.
          Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
          {' '}
        </p>
      </div>
      <div className="homeCardTwo">
        <img className="pageImageTwo" src={HomePicTwo} alt="HomePicTwo" width="332px" height="300px" />
        <p style={{ fontSize: '20px', marginTop: '30px' }}>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
          It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old.
          Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
          {' '}
        </p>
      </div>
    </>
  );
}

export default PageHome;
