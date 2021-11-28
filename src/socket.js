import React from "react";
import io from 'socket.io-client'

export const Socket = io('https://api.nelson-holiday-sale.com')

export const SocketContext = React.createContext()