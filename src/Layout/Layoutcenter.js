import React from 'react';

function Layoutcenter({Banbe}) {
    return (
        <div>
            <h3 style={{float: 'left', marginLeft: '30px'}}>Lời mời kết bạn</h3>
            <br/>
            <br/>
            <br/>
            {
                    Banbe.map((value)=>{
                        return(
                            
                            
                                <div style={{width: '20%', height: '300px', float: 'left', backgroundColor: 'white', marginRight: '10px',  marginLeft: '20px'}}>
                                   <img style={{objectFit: 'cover', width: '100%', height: '50%'}} src={value.avt}/>
                                   <h4> {value.fullname}</h4>
                                   <button className="button-confirm-layoutcenter">Xác nhận</button>
                                   <button className="button-delete-layoutcenter">Xoá</button>
                                </div>
                            
                        );
                    })
                }
        </div>
    );
}

export default Layoutcenter;