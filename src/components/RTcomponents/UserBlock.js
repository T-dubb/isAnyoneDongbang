import React from "react";
import "../../styles/UserBlock.css";

function UserBlock({id, userName, time}){

    return(
        <div className="UserBlockContainer" rank = '1'>
          <div>대충 사진</div>
          <div>{userName}</div>
          <div className='time'>{time}</div>
        </div>

    )
}

export default UserBlock;