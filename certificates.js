// npm install node-html-to-image
const nodeHtmlToImage = require('node-html-to-image')
const fs = require('fs');

const image = fs.readFileSync('./frame.jpeg');
const base64Image = new Buffer.from(image).toString('base64');
const dataURI = 'data:image/jpeg;base64,' + base64Image


nodeHtmlToImage({
    output: './image.png',
    html: '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Certificate</title> <style> @import url("https://fonts.googleapis.com/css2?family=K2D:wght@400;500&display=swap"); html { width: 1650px; height: 1275px; } body { overflow: hidden; margin: 0; padding: 0; width: 1650px; height: 1275px; } main { -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-color: #cccccc; font-family: "K2D", sans-serif; width: 1650px; height: 1275px; overflow: hidden; } img { position: absolute; width: 1650px; height: 1275px; z-index: 0; } .container { margin: auto; text-align: center; padding-top: 150px; z-index: 1; position: relative; } .title { font-size: 72px; background-color: rgba(185, 28, 28, 1); color: white; padding: 2rem; margin-bottom: 100px; } h1 { font-size: 64px; } h2 { font-size: 50px; } h3 { font-size: 42px; } .events { display: flex; flex-direction: column; flex-wrap: wrap; max-height: 400px; max-width: 1200px; margin: auto; justify-content: space-between; font-size: 28px; } .events>p { padding: 0; margin: 7.5px; } .position { font-weight: 600; } footer { position: absolute; text-align: center; bottom: 100px; font-weight: 500; font-size: 30px; left: 400px; } </style> </head> <body> <main> <img src="{{imageSource}}" class="background" /> <div class="container"> <h1 class="title">Certificate of Completion</h1> <h1>FirstName LastName</h1> <h3>successfully completed the Bayanihan Race Challenge</h3> <h2>00:00:00</h2> <div class="events"> <p class="position">Bayanihan Event Place: 1st</p> <p>Recorded Event Distance: 100.12Km</p> </div> </div> <footer> Racing to the virtual finish line together </footer> </main> </body> </html>',
    content: { imageSource: dataURI }
})
    .then(() => console.log('The image was created successfully!'))