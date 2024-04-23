const express = require('express');
const app = express();
const {developers, marketing, QAs, ventas, usersData} = require("./usuarios");

app.get('/', (req, res) => {
    
    res.send(
        
        `
                <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Main</title>
            </head>
            <body>
                <h1>Página principal</h1>
                <h2>Número de personas: ${usersData.length}</h2>
                <h3>Usuarios</h3>
                    <ul id="lista">
                    <li>${usersData[0].id}, ${usersData[0].name}, ${usersData[0].age}, ${usersData[0].specialty}</li>
                    <li>${usersData[1].id}, ${usersData[1].name}, ${usersData[1].age}, ${usersData[1].specialty}</li>
                    <li>${usersData[2].id}, ${usersData[2].name}, ${usersData[2].age}, ${usersData[2].specialty}</li>
                    <li>${usersData[3].id}, ${usersData[3].name}, ${usersData[3].age}, ${usersData[3].specialty}</li>
                    <li>${usersData[4].id}, ${usersData[4].name}, ${usersData[4].age}, ${usersData[4].specialty}</li>
                    <li>${usersData[5].id}, ${usersData[5].name}, ${usersData[5].age}, ${usersData[5].specialty}</li>
                    <li>${usersData[6].id}, ${usersData[6].name}, ${usersData[6].age}, ${usersData[6].specialty}</li>
                    <li>${usersData[7].id}, ${usersData[7].name}, ${usersData[7].age}, ${usersData[7].specialty}</li>
                    <li>${usersData[8].id}, ${usersData[8].name}, ${usersData[8].age}, ${usersData[8].specialty}</li>
                    <li>${usersData[9].id}, ${usersData[9].name}, ${usersData[9].age}, ${usersData[9].specialty}</li>
                    <li>${usersData[10].id}, ${usersData[10].name}, ${usersData[10].age}, ${usersData[10].specialty}</li>
                    <li>${usersData[11].id}, ${usersData[11].name}, ${usersData[11].age}, ${usersData[11].specialty}</li>
                    <li>${usersData[12].id}, ${usersData[12].name}, ${usersData[12].age}, ${usersData[12].specialty}</li>
                    <li>${usersData[13].id}, ${usersData[13].name}, ${usersData[13].age}, ${usersData[13].specialty}</li>
                    <li>${usersData[14].id}, ${usersData[14].name}, ${usersData[14].age}, ${usersData[14].specialty}</li>
                    <li>${usersData[15].id}, ${usersData[15].name}, ${usersData[15].age}, ${usersData[15].specialty}</li>
                    <li>${usersData[16].id}, ${usersData[16].name}, ${usersData[16].age}, ${usersData[16].specialty}</li>
                    <li>${usersData[17].id}, ${usersData[17].name}, ${usersData[17].age}, ${usersData[17].specialty}</li>
                    <li>${usersData[18].id}, ${usersData[18].name}, ${usersData[18].age}, ${usersData[18].specialty}</li>
                    <li>${usersData[19].id}, ${usersData[19].name}, ${usersData[19].age}, ${usersData[19].specialty}</li>
                    <li>${usersData[20].id}, ${usersData[20].name}, ${usersData[20].age}, ${usersData[20].specialty}</li>
                    <li>${usersData[21].id}, ${usersData[21].name}, ${usersData[21].age}, ${usersData[21].specialty}</li>
                    <li>${usersData[22].id}, ${usersData[22].name}, ${usersData[22].age}, ${usersData[22].specialty}</li>
                    <li>${usersData[23].id}, ${usersData[23].name}, ${usersData[23].age}, ${usersData[23].specialty}</li>
                    <li>${usersData[24].id}, ${usersData[24].name}, ${usersData[24].age}, ${usersData[24].specialty}</li>
                    <li>${usersData[25].id}, ${usersData[25].name}, ${usersData[25].age}, ${usersData[25].specialty}</li>
                    <li>${usersData[26].id}, ${usersData[26].name}, ${usersData[26].age}, ${usersData[26].specialty}</li>
                    <li>${usersData[27].id}, ${usersData[27].name}, ${usersData[27].age}, ${usersData[27].specialty}</li>
                    <li>${usersData[28].id}, ${usersData[28].name}, ${usersData[28].age}, ${usersData[28].specialty}</li>
                    <li>${usersData[29].id}, ${usersData[29].name}, ${usersData[29].age}, ${usersData[29].specialty}</li>
                    </ul>

                    <a href="/marketing">Marketing</a>
                    <a href="/developers">Developers</a>
                    <a href="/ventas">Ventas</a>
                    <a href="/qas">QAs</a>
            </body>
            </html>`
        )
});

app.get('/marketing', (req, res) => {
    res.send( `
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marketing</title>
</head>
<body>
    <h1>Marketing</h1>
    <h2>Número de personas: ${marketing.length}</h2>
    <h3>Usuarios</h3>
        <ul id="lista">
        <li>${marketing[0].id}, ${marketing[0].name}, ${marketing[0].age}</li>
        <li>${marketing[1].id}, ${marketing[1].name}, ${marketing[1].age}</li>
        <li>${marketing[2].id}, ${marketing[2].name}, ${marketing[2].age}</li>
        <li>${marketing[3].id}, ${marketing[3].name}, ${marketing[3].age}</li>
        <li>${marketing[4].id}, ${marketing[4].name}, ${marketing[4].age}</li>
        <li>${marketing[5].id}, ${marketing[5].name}, ${marketing[5].age}</li>
        <li>${marketing[6].id}, ${marketing[6].name}, ${marketing[6].age}</li>
        <li>${marketing[7].id}, ${marketing[7].name}, ${marketing[7].age}</li>
        </ul>

        <a href="/">Main</a>
        <a href="/developers">Developers</a>
        <a href="/ventas">Ventas</a>
        <a href="/qas">QAs</a>
</body>
</html>`)
});

app.get('/developers', (req, res) => {
    res.send( `
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Developers</title>
</head>
<body>
    <h1>Developers</h1>
    <h2>Número de personas: ${developers.length}</h2>
    <h3>Developers</h3>
        <ul id="lista">
            <li>${developers[0].id}, ${developers[0].name}, ${developers[0].age}</li>
            <li>${developers[1].id}, ${developers[1].name}, ${developers[1].age}</li>
            <li>${developers[2].id}, ${developers[2].name}, ${developers[2].age}</li>
            <li>${developers[3].id}, ${developers[3].name}, ${developers[3].age}</li>
            <li>${developers[4].id}, ${developers[4].name}, ${developers[4].age}</li>
            <li>${developers[5].id}, ${developers[5].name}, ${developers[5].age}</li>
            <li>${developers[6].id}, ${developers[6].name}, ${developers[6].age}</li>
            <li>${developers[7].id}, ${developers[7].name}, ${developers[7].age}</li>
        </ul>

        <a href="/">Main</a>
        <a href="/marketing">Marketing</a>
        <a href="/ventas">Ventas</a>
        <a href="/qas">QAs</a>
</body>
</html>`)
});

app.get('/ventas', (req, res) => {
    res.send( `
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ventas</title>
</head>
<body>
    <h1>Ventas</h1>
    <h2>Número de personas: ${ventas.length}</h2>
    <h3>Ventas</h3>
        <ul id="lista">
            <li>${ventas[0].id}, ${ventas[0].name}, ${ventas[0].age}</li>
            <li>${ventas[1].id}, ${ventas[1].name}, ${ventas[1].age}</li>
            <li>${ventas[2].id}, ${ventas[2].name}, ${ventas[2].age}</li>
            <li>${ventas[3].id}, ${ventas[3].name}, ${ventas[3].age}</li>
            <li>${ventas[4].id}, ${ventas[4].name}, ${ventas[4].age}</li>
            <li>${ventas[5].id}, ${ventas[5].name}, ${ventas[5].age}</li>
            <li>${ventas[6].id}, ${ventas[6].name}, ${ventas[6].age}</li>
        </ul>

        <a href="/">Main</a>
        <a href="/developers">Developers</a>
        <a href="/marketing">Marketing</a>
        <a href="/qas">QAs</a>
</body>
</html>`)
});

app.get('/QAs', (req, res) => {
    res.send( `
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QAs</title>
</head>
<body>
    <h1>QAs</h1>
    <h2>Número de personas: ${QAs.length}</h2>
    <h3>QAs</h3>
        <ul id="lista">
            <li>${QAs[0].id}, ${QAs[0].name}, ${QAs[0].age}</li>
            <li>${QAs[1].id}, ${QAs[1].name}, ${QAs[1].age}</li>
            <li>${QAs[2].id}, ${QAs[2].name}, ${QAs[2].age}</li>
            <li>${QAs[3].id}, ${QAs[3].name}, ${QAs[3].age}</li>
            <li>${QAs[4].id}, ${QAs[4].name}, ${QAs[4].age}</li>
            <li>${QAs[5].id}, ${QAs[5].name}, ${QAs[5].age}</li>
            <li>${QAs[6].id}, ${QAs[6].name}, ${QAs[6].age}</li>
        </ul>

        <a href="/">Main</a>
        <a href="/developers">Developers</a>
        <a href="/marketing">Marketing</a>
        <a href="/ventas">Ventas</a>
</body>
</html>`)
});

app.use((req, res) => {
    res.status(404).send('<h1>Error 404</h1>')
});

app.listen(3000, () => {
    console.log('Servidor en puerto 3000')
});