import React from 'react';
import { DiAptana } from 'react-icons/di';
import { FiUsers } from 'react-icons/fi';
import { FiUserPlus } from 'react-icons/fi';
import { CgUserList } from 'react-icons/cg';
import { AiFillGift } from 'react-icons/ai';
import { RiUserSharedLine } from 'react-icons/ri';
import { GrNext } from 'react-icons/gr';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function Layoutleft(props) {
    
    return (
        <div>
            <div className="title-layout">
                <h2>Bạn bè</h2>
            </div>
            <div className="setting">
                <DiAptana />
            </div>

            <Link to="/friends">
                <div className="icons">
                    <FiUsers />
                </div>
                <div className="title-icons">
                    <b>Trang chủ</b>
                </div>
            </Link>



            <Link to="/friends/requests">
                <div className="icons">
                    <RiUserSharedLine />
                </div>
                <div className="title-icons">
                    <b>Lời mời kết bạn</b>
                </div>
                <div className="next">
                    <GrNext />
                </div>
            </Link>


            <Link to="/friends/suggestions">
                <div className="icons">
                    <FiUserPlus />
                </div>
                <div className="title-icons">
                    <b>Gợi ý</b>
                </div>
                <div className="next">
                    <GrNext />
                </div>
            </Link>

            <Link to="/friends/list">
                <div className="icons">
                    <CgUserList />
                </div>
                <div className="title-icons">
                    <b>Tất cả bạn bè</b>
                </div>
                <div className="next">
                    <GrNext />
                </div>
            </Link>

            <Link to="/friends/birthdays">
                <div className="icons">
                    <AiFillGift />
                </div>
                <div className="title-icons">
                    <b>Sinh nhật</b>
                </div>
            </Link>

            <Link to="/friends/friendlist">
                <div className="icons">
                    <CgUserList />
                </div>
                <div className="title-icons">
                    <b>Danh sách tùy chỉnh</b>
                </div>
                <div className="next">
                    <GrNext />
                </div>
            </Link>
        </div>
    );
}

export default Layoutleft;