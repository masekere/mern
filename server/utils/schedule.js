let schedule = require('node-schedule');
let rule = new schedule.RecurrenceRule();

/* 
rule.dayOfWeek = [0, new schedule.Range(4, 6)];
*/

// your timezone
rule.tz = 'Africa/Maputo';

// runs at 15:00:00
rule.second = new schedule.Range(0, 30);
// rule.minute = 26;
// rule.hour = 15;

// schedule
schedule.scheduleJob(rule, function () {
  console.log('Hello World!');
});