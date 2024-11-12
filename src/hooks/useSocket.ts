import { io, Socket } from "socket.io-client";
import { useEffect, useRef } from "react";

export const useSocket = () => {
  const socket = useRef<Socket | null>(null);

  useEffect(() => {
    if (!socket.current) {
      socket.current = io(process.env.EXPO_PUBLIC_SOCKET_URL as string);
    }

    return () => {
      if (socket.current) {
        socket.current.disconnect();
        socket.current = null;
      }
    };
  }, []);

  return socket.current;
};
