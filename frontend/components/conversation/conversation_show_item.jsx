import React from 'react';
import { Link } from 'react-router-dom';
import ConversationShow from './conversation_show';

const ConversationShowItem = (props) => {
  const message = props.message;
  const users = props.users;
  const authorId = props.message.author_id;
  let userImgUrl = users[authorId].img_url;

  return (
    <li className="msg-li">
      {
        users[authorId] ?
        <div className="msg-img-wrapper">
          <Link to={`/users/${users[authorId].id}`}>
            <img src={userImgUrl}
              alt={users[authorId].username} />
          </Link>
        </div> : <span></span>
      }
      <div className="msg-body-wrapper">{message.body}</div>
    </li>
  );
};

export default ConversationShowItem;
