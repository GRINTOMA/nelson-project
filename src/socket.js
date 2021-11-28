import React from "react";
import io from 'socket.io-client'

export const Socket = io('https://mattgrinton.com/api')

export const SocketContext = React.createContext()