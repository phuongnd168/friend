import React from 'react';
import { GrLinkPrevious } from 'react-icons/gr';
import { Link } from 'react-router-dom';



function Requests({Banbe}) {
    
    return (
        <div >
            <Link to="/">
            <div className="prev-request">
                <GrLinkPrevious />
            </div>
            </Link>

            
            
            <div style={{float:'left', marginLeft: '10px'}}>
                
                <h2>Lời mời kết bạn</h2>
            </div>
            

            <hr style={{width: '300px'}} />


            <h4 style={{textAlign: 'left', marginLeft: '20px', marginTop: '10px', fontSize: '17px'}}>{Banbe.length} lời mời kết bạn</h4>
            <div className="send-request">
                <Link style={{textDecoration: 'none'}}>
                    <p>
                    Xem lời mời đã gửi
                    </p>
                </Link>
            </div>
            
            
         
            
            {Banbe.map((value)=>{
                return (
                <Link style={{textDecoration:'none'}} to={"/friends-request/"+value.id}>
                    <div style={{position: 'relative', bottom: '30px'}}>
                    
                        <div className="avatar-request">
                            <img  src={value.avt}/>
                        </div> 
                        
                        <h4 style={{textAlign: 'left', marginLeft: '90px', marginBottom: '10px'}}>{value.fullname}</h4> 
                        
                        <button className="button-confirm-request"><h4>Xác nhận</h4></button>  
                        <button className="button-delete-request"><h4>Xóa</h4></button>     
                        
                    
                    </div>
                </Link>
            );
            })
            
            }
           
            
        </div>
    );
}

export default Requests;