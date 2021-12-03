// Напишите программу для вывода в консоль простых чисел, чтобы они попадали в указанный диапазон включительно. При этом числа должны окрашиваться в цвета по принципу светофора:
// первое число выводится зелёным цветом;
// второе — жёлтым;
// третье — красным.
// Диапазон, куда попадут числа, указывается при запуске программы.
// Если простых чисел в диапазоне нет, нужно, чтобы программа сообщила об этом в терминале красным цветом.
// Если аргумент, переданный при запуске, не считается числом — сообщите об этом ошибкой и завершите программу.

const colors = require('colors');
const [ min, max] = process.argv.slice(2);

const distributor = (resultArray) =>{
    let green = 0;
    let yellow = 0;
    let red = 0;
    resultArray.forEach((element) =>{
        if (green == yellow && green == red) {
            console.log(colors.green(element));
            green++;
        } else if (green > yellow && yellow == red){
            console.log(colors.yellow(element));
            yellow++;
        }   else {
            console.log(colors.red(element));
            red++;
        }
    });
};

const getPrime = (i, n) => {
    let result =[];
    for (i; i <= n; i++) {
        let flag = 1;
        if (i > 2 && i % 2 != 0){
            for (let j = 3; j*j <= i ; j=j+2){
                if (i%j==0){
                    flag=0;
                    break;
                }
            }
        }   else if (i != 2) flag = 0;
        if (flag==1) {result.push(i)};
    } return result;
};

if (Number.isInteger(+min) && Number.isInteger(+max)){
    let result = getPrime(+min,+max);
    if (result.length < 1){
        console.log(colors.red("Простых чисел в данном диапазоне нет"));
    } else {
        distributor(result);
    }
}   else { 
    console.log(colors.red("Аргумент, переданный при запуске программы, не является числом"));
};




