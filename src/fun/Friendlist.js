import React from 'react';
import { GrLinkPrevious } from 'react-icons/gr';
import { CgUserList} from 'react-icons/cg';
import { AiFillStar} from 'react-icons/ai';
import { IoAddOutline} from 'react-icons/io5'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Friendlist(props) {
    return (
        <div>
            <Link to="/">
            <div className="prev-friendlist">
                <GrLinkPrevious />
            </div>
            </Link>
            <div style={{float:'left', marginLeft: '10px'}}>
                
                <h2>Danh sách tùy chỉnh </h2>
                
            </div>


            
            <Link to="/">
                <div className="icons-friendlist">
                    <CgUserList />
                </div>
                <div className="title-icons-friendlist">
                    <b>Danh sách chưa đặt tên</b>
                </div>
            </Link>
            <Link to="/">
                <div className="icons-friendlist">
                    <CgUserList />
                </div>
                <div className="title-icons-friendlist">
                    <b>Bị hạn chế</b>
                </div>
            </Link>
            <Link to="/">
                <div className="icons-friendlist">
                    <CgUserList />
                </div>
                <div className="title-icons-friendlist">
                    <b>Người quen</b>
                </div>
            </Link>
            <Link to="/">
                <div className="icons-friendlist">
                    <AiFillStar />
                </div>
                <div className="title-icons-friendlist">
                    <b>Bạn thân</b>
                </div>
            </Link>
            <Link to="/">
                <div style={{color: '#1876f2', backgroundColor: '#e7f3ff'}}  className="icons-friendlist">
                    <IoAddOutline/>
                    
                </div>
                <div className="title-icons-friendlist">
                    <b style={{color: '#1876f2'}}>Tạo danh sách</b>
                </div>
                
            </Link>

         
              
              
            
        </div>
    );
}

export default Friendlist;