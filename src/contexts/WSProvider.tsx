import React, { createContext, useContext, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

// Socket servis tipini tanımla
type SocketService = {
  emit: (event: string, data?: any) => void;
  on: (event: string, cb: (data: any) => void) => void;
  off: (event: string) => void;
  disconnect: () => void;
  removeListener: (listenerName: string) => void;
};

const WSContext = createContext<SocketService | undefined>(undefined);

export const WSProvider = ({ children }: { children: React.ReactNode }) => {
  const socket = useRef<Socket>();

  useEffect(() => {
    socket.current = io(process.env.EXPO_PUBLIC_SOCKET_URL || "", {
      transports: ["websocket"],
      withCredentials: true,
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    // Bağlantıyı başlat
    socket.current.connect();

    // Bağlantı hatalarını yakala
    socket.current.on("connect_error", (error) => {
      console.error("Socket bağlantı hatası:", error.message);
    });

    socket.current.on("connect", () => {
      console.log("Socket bağlandı, ID:", socket.current?.id);
    });

    socket.current.on("disconnect", () => {
      console.log("Socket bağlantısı koptu");
    });

    // Cleanup
    return () => {
      if (socket.current) {
        socket.current.removeAllListeners();
        socket.current.disconnect();
      }
    };
  }, []);

  const socketService: SocketService = {
    emit: (event: string, data = {}) => {
      if (!socket.current?.connected) {
        // Bağlı değilse yeniden bağlan
        socket.current?.connect();
      }
      socket.current?.emit(event, data);
    },

    on: (event: string, cb: (data: any) => void) => {
      if (socket.current) {
        socket.current.on(event, cb);
      }
    },

    off: (event: string) => {
      if (socket.current) {
        socket.current.off(event);
      }
    },

    removeListener: (listenerName: string) => {
      if (socket.current) {
        socket.current.removeListener(listenerName);
      }
    },

    disconnect: () => {
      if (socket.current) {
        socket.current.disconnect();
        socket.current = undefined;
      }
    },
  };

  return (
    <WSContext.Provider value={socketService}>{children}</WSContext.Provider>
  );
};

export const useWS = (): SocketService => {
  const context = useContext(WSContext);
  if (!context) {
    throw new Error("useWS must be used within a WSProvider");
  }
  return context;
};
