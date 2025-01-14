const { Client } = require('ssh2');

const conn = new Client();
conn.on('ready', () => {
    console.log('Client :: ready');
    conn.exec('show running-config', (err, stream) => {
        if (err) throw err;
        stream.on('close', (code, signal) => {
            console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
            conn.end();
        }).on('data', (data) => {
            console.log('STDOUT: ' + data);
        }).stderr.on('data', (data) => {
            console.log('STDERR: ' + data);
        });
    });
}).connect({
    host: 'IP',
    port: 22,
    username: 'USUARIO',
    password: 'SENHA'
});
