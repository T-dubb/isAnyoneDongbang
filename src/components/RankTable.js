import React from 'react';
import UserBlock from './RTcomponents/UserBlock';
import { Link } from "react-router-dom";
import "../styles/RankTable.css"

const userInfo = [
    {id:'tjwjdgk1', userName:'서정하1', time:16},
    {id:'tjwjdgk2', userName:'서정하2', time:1},
    {id:'tjwjdgk3', userName:'서정하3', time:0},
    {id:'tjwjdgk4', userName:'서정하4', time:12},
    {id:'tjwjdgk5', userName:'서정하5', time:1515},
    {id:'tjwjdgk6', userName:'서정하6', time:1}
];

const RankTable = () => {
  return (
    <div className='RankTableBackGround'>
      <div className='RankTableHeader'>
          <div className="RankTableHomeWrapper">
            <img className='RankTableHeaderImg' src="backBtn.png"/>
          </div>
          <div className="RankTableLogoWrapper">
            <img className='RankTableHeaderImg' src="RTlogo.png"/>
          </div>
          <div className="RankTableEmptyWrapper">
          </div>
      </div>
      <div className="RankTableBody">
        {
          userInfo.map((user) => (
            <UserBlock
              id={user.id}
              userName={user.userName}
              time={user.time}
            />
          ))
        }
      </div>
    </div>
  );
};

export default RankTable;