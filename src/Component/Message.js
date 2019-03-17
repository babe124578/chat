import React from "react";

const Message = ({ chat, user }) => (
  <li className={`chat ${user === chat.username ? "right" : "left"}`}>
    {user !== chat.username
    /*{&& <img src={chat.img} alt={`${chat.username}'s profile pic`} />}*/
    }
    <div
      style={{
        fontSize: "10px",
        float: user === chat.username ? "right" : "left"
      }}
    >
      {chat.username}
      <img src={"https://api.adorable.io/avatars/200/"+ chat.username +".png"} alt="Avatar"/>
    </div>
    <br />
    {chat.content}
  </li>
);

export default Message;
