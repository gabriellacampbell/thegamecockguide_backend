const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, "public")))

const bars = [
    {
        _id: 1,
        name: "The Tin Roof",
        img_name: "images/tinroof.jpg",
        location: "1022 Senate Street, Columbia, SC",
        type: "Live music bar",
        description: "A casual spot for food, drinks, and live music.",
        link: "https://tinroofcolumbia.com/"
    },
    {
        _id: 2,
        name: "Luckys",
        img_name: "images/luckys.jpg",
        location: "2100 Devine St, Columbia, SC",
        type: "College nightlife bar",
        description: "A popular Five Points stop for students looking for a lively night out.",
        link: "https://www.instagram.com/explore/locations/1873726529509721/luckys-of-columbia/?hl=en"
    },
    {
        _id: 3,
        name: "Chicken on a Stick",
        img_name: "images/chicken.jpg",
        location: "724 Harden St, Columbia, SC",
        type: "Bar and grill",
        description: "A casual Five Points spot known for chicken on a stick, drinks, and late-night food.",
        link: "https://www.chickenonastickcola.com/"
    },
    {
        _id: 4,
        name: "Jakes",
        img_name: "images/jakes.jpg",
        location: "2112 Devine St, Columbia, SC",
        type: "Neighborhood bar and grill",
        description: "A relaxed Five Points bar with craft beer, bar food, and a dog-friendly patio.",
        link: "https://jakesofcolumbia.com/"
    },
    {
        _id: 5,
        name: "Social",
        img_name: "images/social.jpg",
        location: "632 Harden St, Columbia, SC",
        type: "Sports bar and entertainment venue",
        description: "A Gamecock-owned Five Points venue for food, drinks, sports, music, and nightlife.",
        link: "https://5pointssocial.com/"
    },
    {
        _id: 6,
        name: "Group Therapy",
        img_name: "images/group.jpg",
        location: "2107 Greene St, Columbia, SC",
        type: "Neighborhood nightlife bar",
        description: "A longtime Five Points bar with a casual setting for drinks and nights out with friends.",
        link: "https://www.instagram.com/grouptherapy5points/?hl=en"
    },
    {
        _id: 7,
        name: "Saloon",
        img_name: "images/saloon.jpg",
        location: "812 Harden St, Columbia, SC",
        type: "Late-night bar",
        description: "A lively Five Points bar that is a popular stop for students and groups.",
        link: "https://www.instagram.com/mooseheadsaloon/?hl=en"
    },
    {
        _id: 8,
        name: "The Salty Nut",
        img_name: "images/salty.jpg",
        location: "2000A Greene St, Columbia, SC",
        type: "Restaurant and bar",
        description: "A relaxed Five Points restaurant and bar near campus with food, drinks, and outdoor seating.",
        link: "https://www.saltynut.com/"
    }
]

app.get("/api/bars", (req, res) =>{
    res.json(bars);
})

const port = process.env.PORT || 3001;

app.listen(port, "0.0.0.0", () =>{
    console.log("Server running on port " + port);
})