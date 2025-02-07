import { useEffect } from "react";

const useConsoleLog = (message: string) => {
    useEffect(() => {
        console.log(message)
    }, [message])
}

export default useConsoleLog;