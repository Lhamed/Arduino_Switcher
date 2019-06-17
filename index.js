var SerialPort = requir('serialport'),
    portName = 'dev/cu.usbmodem14101',
    sp = new SerialPort(portName),
    sensorVal = 0;
var moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

var cron = require('node-cron');




// second minute hour day-of-month month day-of-week
cron.schedule('*/30 * * * *', function () {
    var curHour = moment().format('HH');
    var numHour = Number(curHour);
    if (parseInt(7) <= parse(numHour)) {
        sp.write('t');
        console.debug( curHour + "화장실 불을 켭니다 ");
    } if (parseInt(14) <= parse(numHour)) {
        sp.write('f');
        console.debug( curHour + "화장실 불을 끕니다 ");
    }
});