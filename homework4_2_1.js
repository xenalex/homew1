// Task 2*** Реализуйте считывание JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании

const jsonData= require('C:/Users/Карина/Desktop/Новая папка/task2.json'); 

for (let j=0;j<jsonData.length;j++){
    for (let i=0;i<jsonData.length;i++){
        if(i==j){
            continue;
        }
        else if(jsonData[i].name==jsonData[j].name)
        {
            // console.log(i + ' '+ j)
            jsonData.splice(j,1);
        }
    }
}
console.log(jsonData)