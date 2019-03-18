import React from "react";

const Message = ({ chat, user }) => (
  <li className={`chat ${user === chat.username ? "right" : "left"}`}>
    <div>
      <div className={`chatname ${user === chat.username ? "right" : "left"}`}>
        {chat.username}
      </div>
      <img
        src={"https://api.adorable.io/avatars/200/" + chat.username + ".png"}
        alt="Avatar"
      />
    </div>
    <br />
    {chat.content}
  </li>
);

export default Message;
