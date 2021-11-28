import React from "react";
import io from 'socket.io-client'

export const Socket = io('http://localhost:54545')

export const SocketContext = React.createContext()