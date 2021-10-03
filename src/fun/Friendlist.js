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
            <div className="prev-friendlist">
                <GrLinkPrevious />
            </div>
            <div className="title-friendlist">
                <p>Bạn bè</p>
            </div>
            <div className="title1-friendlist">
                <h2>Danh sách tùy chỉnh</h2>
            </div>

            
            <Link to="">
                <div className="icons1">
                    <CgUserList />
                </div>
                <b>Danh sách chưa đặt tên</b>
            </Link>
            <Link to="">
                <div className="icons1">
                    <CgUserList />
                </div>
                <b>Bị hạn chế</b>
            </Link>
            <Link to="">
                <div className="icons1">
                    <CgUserList />
                </div>
                <b>Người quen</b>
            </Link>
            <Link to="">
                <div className="icons1">
                    <AiFillStar />
                </div>
                <b>Bạn thân</b>
            </Link>
            <Link to="">
                <div className="icons1">
                    <IoAddOutline/>
                </div>
                <b>Tạo danh sách</b>
            </Link>
              
            
        </div>
    );
}

export default Friendlist;