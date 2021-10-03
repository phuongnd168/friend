import React from 'react';
import "./home.css";


import Routeleft from '../route/Routeleft';
import Routecenter from '../route/Routecenter';
import Routeright from '../route/Routeright';



function Home({Banbe}) {
    return (

        <div className="home-controller">



            <div className="home-profile" >
                <Routeleft Banbe={Banbe}/>
            </div>
            <div className="home-page" id="style-home-friend">
                <Routecenter  Banbe={Banbe} />
            </div>
            <div className="home-advertisement">
                <Routeright />
            </div>


        </div>

    );
}

export default Home;