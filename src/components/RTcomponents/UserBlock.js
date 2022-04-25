import React from "react";
import "../../styles/UserBlock.css";

function UserBlock({id, userName, time}){
    let rank = 1;
    return(
        <div className="UserBlockContainer">
          <div><img className="UserRankImg" src={`rank_img${rank}.png`}/></div>
          <div>
            <img className="UserCharImg" src="Americano (1).png"/>
          </div>
          <div>{userName}</div>
          <div className="EmptyBlock"></div>
          <div className='time'>{time}</div>
        </div>

    )
}

export default UserBlock;