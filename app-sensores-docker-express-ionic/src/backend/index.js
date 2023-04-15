var PORT    = 3000;

var express = require('express');
var app     = express();
var utils   = require('./mysql-connector');
const cors = require('cors');

app.use(express.json()); 
app.use(express.static('/home/node/app/static/'));

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
// to enable cors
app.use(cors(corsOptions));

//Dar un listado de dispositivos
app.get('/devices/', function(req, res, next) {
    utils.query('SELECT * FROM Dispositivos', function(err, rta, field) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(JSON.stringify(rta)).status(200);
    }); 
});

//traer la info completa de un dispositivo
app.get('/devices/:id', function(req, res, next) {
    utils.query('SELECT * FROM Dispositivos WHERE dispositivoId = ?',req.params.id,
        function(err, rta, field) {
            if (err) {
                res.send(err).status(400);
                return;
            }
            res.send(JSON.stringify(rta)).status(200);
        }
    );
});

//último valor de medición por sensor en el gráfico
app.get('/lastmessure/:deviceid', function(req, res, next) {
    utils.query('SELECT * FROM Mediciones m WHERE m.medicionId = (SELECT MAX(medicionId) FROM Mediciones WHERE dispositivoId = ?)',req.params.deviceid,
        function(err, rta, field) {
            if (err) {
                res.send(err).status(400);
                return;
            }
            res.send(JSON.stringify(rta)).status(200);
        }
    );
});

//insertar un registro en la tabla de Log_Riegos
app.post('/logriegos/', function(req, res, next) {
    utils.query('INSERT INTO `Log_Riegos` (`apertura`, `fecha`, `electrovalvulaId`) VALUES (?, ?, ?)',
        [req.body.apertura, req.body.fecha, req.body.electrovalvulaId],
        function(err, rta, field) {
            if (err) {
                res.send(err).status(400);
                return;
            }
            res.send({ 'id': rta.insertId }).status(201);
        }
    );
});

//insert sobre la tabla de mediciones para crear un nuevo registro con el nuevo valor solamente
// si se cierra la electroválvula
app.post('/messures/', function(req, res, next) {
    utils.query('INSERT INTO `Mediciones` (`fecha`, `valor`, `dispositivoId`) VALUES (?, ?, ?)',
        [req.body.fecha, req.body.valor, req.body.dispositivoId],
        function(err, rta, field) {
            if (err) {
                res.send(err).status(400);
                return;
            }
            res.send({ 'id': rta.insertId }).status(201);
        }
    );
});

//todas las mediciones de un sensor
app.get('/devices/:id/messures/', function(req, res, next) {
    utils.query('SELECT * FROM Mediciones WHERE dispositivoId = ?',req.params.id,
        function(err, rta, field) {
            if (err) {
                res.send(err).status(400);
                return;
            }
            res.send(JSON.stringify(rta)).status(200);
        }
    );
});

//log de los riegos para una electroválvula
app.get('/logriegos/:electrovalvulaId/', function(req, res, next) {
    utils.query('SELECT * FROM Log_Riegos WHERE electrovalvulaId = ?',req.params.electrovalvulaId,
        function(err, rta, field) {
            if (err) {
                res.send(err).status(400);
                return;
            }
            res.send(JSON.stringify(rta)).status(200);
        }
    );
});

app.listen(PORT, function(req, res) {
    console.log("NodeJS API running correctly");
});
