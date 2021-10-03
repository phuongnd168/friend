import logo from './logo.svg';
import './App.css';
import Home from './fun/Home';
import './fun/requests.css'
import './fun/suggestions.css'
import './fun/list.css'
import { useState } from 'react';
import logo1 from './img/logo1.jpg';
import logo2 from './img/logo2.jpeg';
import logo3 from './img/logo3.png';
import logo4 from './img/logo4.jpg';
import images from './img/images.jpg';
import images1 from './img/images1.jpg';
import images2 from './img/images2.jpg';
import images3 from './img/images3.jpg';
import images4 from './img/images4.jpg';
import images5 from './img/images5.jpg';
import images6 from './img/images6.jpg';
import images7 from './img/images7.jpg';

function App() {

  const [Banbe, setBanbe] = useState([
    {
      id: '1',
      fullname: 'Phuong', 
      name: 'P',
      avt: logo1,
      coverphoto: logo1,
      work: 'Công ty A',
      study: 'Trường THPT A',
      live: 'Hà Nội',
      relationship: 'Độc thân',
      caption: 'abcxyz',
      mutualfriends : '100'

    }, 
    {
      id: '2',
      fullname: 'Phuong1', 
      name: 'P1', 
      avt: logo2,
      coverphoto: logo2,
      work: 'Công ty B',
      study: 'Trường THPT B',
      live: 'TP HCM',
      relationship: 'Đã kết hôn',
      caption: 'abcxyz',
      mutualfriends : '20'
    },
    {
      id: '3',
      fullname: 'Phuong2', 
      name: 'P2', 
      avt: logo3,
      coverphoto: logo3,
      work: 'Công ty C',
      study: 'Trường THPT C',
      live: 'Đà Nẵng',
      relationship: 'Độc thân',
      caption: 'abcxyz',
      mutualfriends : '10'

    },
    {
      id: '4',
      fullname: 'Phuong3', 
      name: 'P3',
      avt: logo4,
      coverphoto: logo4,
      work: 'Công ty D',
      study: 'Trường THPT D',
      live: 'Thái Nguyên',
      relationship: 'Hẹn hò',
      caption: 'abcxyz',
      mutualfriends : '230'

    },
  ]);
    
 
  return (

    <div className="App">
      <Home Banbe = {Banbe} />
      
    </div>
  );
}

export default App;
