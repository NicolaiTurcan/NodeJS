// Напишите программу, которая будет принимать на вход несколько аргументов: дату и время в формате «час-день-месяц-год».
// Задача программы — создавать для каждого аргумента таймер с обратным отсчётом: 
// посекундный вывод в терминал состояния таймеров (сколько осталось).
// По истечении какого-либо таймера, вместо сообщения о том, 
// сколько осталось, требуется показать сообщение о завершении его работы. Важно, чтобы работа программы основывалась на событиях.

// node task_2.js 10.10.10.12.2022

const EventEmitter = require('events');
const emitter = new EventEmitter();

const timeDate = process.argv.slice(2);
const [hour, minute, day, month, year] = timeDate[0].split('.');
const userTime = new Date(`${month} ${day}, ${year} ${hour}:${minute}:00`).getTime();

const timer = (time) =>{
    const timeNow = new Date().getTime();
    let gap = time - timeNow;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const textDays = Math.floor(gap / days);
    const textHour = Math.floor((gap % days) / hours);
    const textMinute = Math.floor((gap % hours) / minutes);
    const textSecond = Math.floor((gap % minutes) / seconds);

    if (gap > 0){
        console.log(`осталось ${textDays} дней, ${textHour} часов, ${textMinute} минут, ${textSecond} секунд`);
    } else{
        console.log("Ваш таймер завершен");
        clearInterval(runInterval);
    };
};

emitter.on("emiterTimer", ()=> timer(userTime));

const runInterval = setInterval(() => emitter.emit("emiterTimer"), 1000);




