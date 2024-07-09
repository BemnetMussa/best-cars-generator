import express from "express";
import {fileURLToPath } from "url";
import { dirname} from "path";


const app = express();


const directoryPath = dirname(fileURLToPath(import.meta.url))

app.use(express.static("public"))

var cars = ["Bugatti Chiron", "Ferrari 812 Competitezion", "Porshe GT4RS", "Range Rover", "Koenisegge Jesko Absolute"]

function match() {
    // Generate a random integer between 1 and 5
    let random = Math.floor(Math.random() * 5) + 1;

    // Return an object containing both the car name and the image path
    switch(random) {
        case 1:
            return { name: cars[0], image: "images/bugatti.jpg" };
        case 2:
            return { name: cars[1], image: "images/ferrari.png" };
        case 3:
            return { name: cars[2], image: "images/porshe.jpg" };
        case 4:
            return { name: cars[3], image:  "images/Range.jpg" };
        case 5:
            return { name: cars[4], image:  "images/absolute.jpg" };
    
    }
}
var data;

app.get('/', (req, res)=> {
    res.render("main.ejs");
})


app.post('/submit', (req, res) => {

    data = match();
    console.log(data)
    res.render("main.ejs", data)
})



app.listen(3000, ()=> {
    console.log("listening on port 3000")
})