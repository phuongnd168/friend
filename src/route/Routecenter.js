import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Friend_c from '../fun/Friend_c';
import Profile_request from '../fun/Profile_request';
import Profile_suggestion from '../fun/Profile_suggestion';
import Profile_list from '../fun/Profile_list';
import Layoutcenter from '../Layout/Layoutcenter';
import Friend_c1 from '../fun/Friend_c1';


  
function Routecenter({Banbe}) {
        console.log(Banbe)
    return (
    <div>
           
            <Switch>
                <Route path="/friends/requests"><Friend_c/></Route>
                {
                    Banbe.map((value)=>{
                        return(
                            <Route path={"/friends-request/" + value.id} >
                                <Profile_request Banbe={Banbe}/>
                            </Route>
                        );
                    })
                }
                <Route path="/friends/suggestions"><Friend_c/></Route>
                {
                    Banbe.map((value)=>{
                        return(
                            <Route path={"/friends-suggestion/" + value.id} >
                                <Profile_suggestion Banbe={Banbe}/>
                            </Route>
                        );
                    })
                }
                <Route path="/friends/list"><Friend_c/></Route>
                {
                    Banbe.map((value)=>{
                        return(
                            <Route path={"/friends-list/" + value.id} >
                                <Profile_list Banbe={Banbe}/>
                            </Route>
                        );
                    })
                }
                <Route path="/friends/friendlist"><Friend_c1/></Route>
                <Route path="/"><Layoutcenter Banbe={Banbe}/></Route>
            </Switch>
        
    
        
    </div>
    
    );
}

export default Routecenter;