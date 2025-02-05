import React, { useEffect, useState } from "react";

const LemonChat = {
    subscribeToMessages: (chatId: number, fnSetStatus: () => void) => {
        console.log(chatId);
        fnSetStatus();
    },
    unsubscribeFromMessages: (chatId: number) => {
        console.log(chatId);
    }
}

interface Props {
    chatId: number
}

const UseEffect = ({ chatId }: Props) => {
    const [chatStatus, setChatStatus] = useState<string>("offline");

    // If your effect returns a function, React will run it when it’s time to 
    // clean up resources and free unused memory.
    useEffect(() => {
        LemonChat.subscribeToMessages(chatId, () => setChatStatus("online"));
        console.log(chatStatus);

        return () => {
            setChatStatus("offline")
            LemonChat.unsubscribeFromMessages(chatId);
            console.log(chatStatus);
        }
    }, [])

    return React.createElement('h4', null, chatStatus);
}

export default UseEffect;