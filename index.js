const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/rotar/:value', (req, res) => {

    var rotValue = req.params["value"];

    rotValue = rotValue.toUpperCase();

    console.log("Rotando valor hacia: " + rotValue);

    switch(rotValue){
        case "DERECHA":
        case "0":
        case 0:
            robots.RotateRight(robot, (result) => {
                console.log(robot);
                //return updated robot
                res.send(result);
            });

            break;

        case "IZQUIERDA":
        case "1":
        case 1:
            robots.RotateLeft(robot, (result) => {
                console.log(robot);
                //return updated robot
                res.send(result);
            });

            break;   
        
        default: 
            res.send({code: 403, msg: "Opcion de rotacion inválida"});
            break;
    }


});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))