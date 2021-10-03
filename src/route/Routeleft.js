import React from 'react';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Requests from '../fun/Requests';
import Suggestions from '../fun/Suggestions';
import List from '../fun/List';
import Friendlist from '../fun/Friendlist';
import Layoutleft from '../Layout/Layoutleft';






function Routeleft({Banbe}) {
    return (
        <div>

            <Switch>
                
                <Route path="/friends/requests"><Requests Banbe={Banbe}/></Route>
                <Route path="/friends/suggestions"><Suggestions Banbe={Banbe}/></Route>
                <Route path="/friends/list"><List Banbe={Banbe}/></Route>
                <Route path="/friends/friendlist"><Friendlist/></Route>
                {
                    Banbe.map((value)=>{
                        return(
                            <Route path={"/friends-request/" + value.id} >
                                <Requests Banbe={Banbe}/>
                            </Route>
                        );
                    })
                }

                {
                    Banbe.map((value)=>{
                        return(
                            <Route path={"/friends-suggestion/" + value.id} >
                                <Suggestions Banbe={Banbe}/>
                            </Route>
                        );
                    })
                }

                {
                    Banbe.map((value)=>{
                        return(
                            <Route path={"/friends-list/" + value.id} >
                                <List Banbe={Banbe}/>
                            </Route>
                        );
                    })
                }
                <Route path="/"><Layoutleft/></Route>
                
            </Switch>
            
        </div>
    );
}

export default Routeleft;