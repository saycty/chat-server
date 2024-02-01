import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
const chat = () => {
  const { userChats, isUserChatsLoading, userChatsError } =
    useContext(ChatContext);

  console.log("UserChats", userChats);
  return <>chat</>;
};

export default chat;
