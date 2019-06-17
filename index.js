var SerialPort = require('serialport'),
    portName = '/dev/cu.usbmodem14101',
    sp = new SerialPort(portName),
    sensorVal = 0;
var moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

var cron = require('node-cron');


var curHour = moment().format('HH');
var numHour = Number(curHour);
console.debug( curHour + "시 입니다 ");
if (parseInt(7) <= parseInt(numHour)) {
    sp.write('t');
    console.debug( curHour + "화장실 불을 켭니다 ");
} if (parseInt(14) <= parseInt(numHour)) {
    sp.write('f');
    console.debug( curHour + "화장실 불을 끕니다 ");
}

// second minute hour day-of-month month day-of-week
cron.schedule('*/30 * * * *', function () {
    var curHour = moment().format('HH');
    var numHour = Number(curHour);
    console.debug( curHour + "시 입니다 ");
    if (parseInt(7) <= parseInt(numHour)) {
        sp.write('t');
        console.debug( curHour + "화장실 불을 켭니다 ");
    } if (parseInt(14) <= parseInt(numHour)) {
        sp.write('f');
        console.debug( curHour + "화장실 불을 끕니다 ");
    }
});