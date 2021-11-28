import express, { json } from "express"
import { createServer } from "http"
import { Server } from "socket.io"
import cors from 'cors'
import bodyParser from "body-parser"

const corsOptions = {origin:'https://mattgrinton.com'}
const app = express()
app.use(cors(corsOptions))
app.use(bodyParser.json())
const serv = createServer(app)
const io = new Server(serv, {
    cors: {
        origin: "https://mattgrinton.com",
        methods: ["GET", "POST"]
    }
})

let items = [
    {
        id: 1,
        userName: "",
        maxBid: 250
    },
    {
        id: 2,
        userName: "",
        maxBid: 0
    },
    {
        id: 3,
        userName: "",
        maxBid: 0
    },
    {
        id: 4,
        userName: "",
        maxBid: 0
    },
    {
        id: 5,
        userName: "",
        maxBid: 90
    },
    {
        id: 6,
        userName: "",
        maxBid: 0
    },
    {
        id: 7,
        userName: "",
        maxBid: 0
    },
    {
        id: 8,
        userName: "",
        maxBid: 0
    },
    {
        id: 9,
        userName: "",
        maxBid: 0
    },
    {
        id: 10,
        userName: "",
        maxBid: 0
    },
    {
        id: 11,
        userName: "",
        maxBid: 0
    },
    {
        id: 12,
        userName: "",
        maxBid: 0
    },
    {
        id: 13,
        userName: "",
        maxBid: 0
    },
    {
        id: 14,
        userName: "",
        maxBid: 0
    },
    {
        id: 15,
        userName: "",
        maxBid: 0
    },
    {
        id: 16,
        userName: "",
        maxBid: 0
    },
    {
        id: 17,
        userName: "",
        maxBid: 0
    },
    {
        id: 18,
        userName: "",
        maxBid: 0
    },
    {
        id: 19,
        userName: "",
        maxBid: 0
    },
    {
        id: 20,
        userName: "",
        maxBid: 0
    },
    {
        id: 21,
        userName: "",
        maxBid: 0
    },
    {
        id: 22,
        userName: "",
        maxBid: 0
    },
    {
        id: 23,
        userName: "",
        maxBid: 0
    },
    {
        id: 24,
        userName: "",
        maxBid: 60
    }
]

app.get('/', (req, res) => {
    return res.send(`<h2>App working</h2><br><h5>There are ${io.sockets.adapters.rooms.get('bidroom').size} current bidders<h5>`)
})
app.get('/bids/:id', (req, res) => {
    return res.json({id:req.params.id, maxBid:items[req.params.id-1].maxBid})
})
app.get('/bids', (req, res) => {
    return res.json(items.map((item)=>{
        return {id:item.id, maxBid:item.maxBid}
    }))
})
app.post('/bids/:id', (req, res) =>{
    if(req.body.bid>items[req.params.id-1].maxBid){
        items[req.params.id-1].maxBid = Number(req.body.bid)
        return res.json({success:true})
    } else {
        return res.json({success: false, errorMessage: `Your bid for item ${req.params.id} must be greater than ${items[req.params.id-1].maxBid}`})
    }

})

io.on("connection", (socket) => {
    console.log(`LOG: Socket ${socket.id} connected`)
    socket.join('bidroom') // Join them automatically to bid room

    socket.on("new-bid", (itemId, itemBid) => {
            console.log(`LOG: Setting new max bid on item ${itemId} to ${itemBid}`)
            if(itemBid>items[itemId-1].maxBid){
                items[itemId - 1].maxBid = Number(itemBid)
                io.to('bidroom').emit("new-bid", itemId, itemBid)
            } else {
                socket.emit("bid-error", `Your bid for item ${itemId} must be greater than $${items[itemId-1].maxBid}`)
            }
            
    })

    socket.on("disconnect", () => {
            console.log(`LOG: Socket ${socket.id} disconnected.`)
    })
})

serv.listen(54545)
console.log("Bid Server running")