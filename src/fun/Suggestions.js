import React from 'react';
import { GrLinkPrevious } from 'react-icons/gr';
import { Link } from 'react-router-dom';
function Suggestions({Banbe}) {
    return (
        <div >
            <Link to="/">
            <div className="prev-suggestion">
                <GrLinkPrevious />
            </div>
            </Link>
            
            <div style={{float:'left', marginLeft: '10px'}}>
                
                <h2>Gợi ý</h2>
                
            </div>
            
            <br/>
            

            {Banbe.map((value)=>{
                return (
                <Link style={{textDecoration:'none'}} to={"/friends-suggestion/"+value.id}>
                   
                    <div style={{position: 'relative', top: '30px'}}>   
                        <div className="avatar-suggestion">
                            <img  src={value.avt}/>
                        </div> 
                        
                            <h4 style={{textAlign: 'left', marginLeft: '90px', marginBottom: '10px'}}>{value.fullname}</h4> 
                           
                        <button className="button-add-friend-suggestion"><h4>Thêm bạn bè</h4></button>  
                        <button className="button-delete-suggestion"><h4>Xóa, gỡ bỏ</h4></button>     
                    </div>
                    
                   
                </Link>
            );
            })
            
            }
        </div>
    );
}

export default Suggestions;