class News{
    constructor(titleUser, textUser, tagsUser, dateUser){
        this.title = titleUser;
        this.text = textUser;
        this.tags = tagsUser;
        this.date = new Date(dateUser);
    }
    print(){
        let htags = '';
        let today = new Date();
        let dateToWrite = '';
        let msecInDay = 24 * 60 * 60 * 1000; // 86400000
        let mscInWeek = 7 * msecInDay; // 604800000;
        today = new Date(today.getFullYear(), today.getMonth(), today.getDate());

        for(let i = 0; i < this.tags.length; i++){
            htags += `<a href="#">${this.tags[i]}</a>\t`;
        }
        if(this.date.getTime() == today.getTime()){
            dateToWrite = `today`;
        }
        else if(today.getTime() - this.date.getTime() < mscInWeek){
            let differenceInDays = (today.getTime() - this.date.getTime()) / msecInDay;
            differenceInDays = Math.floor(differenceInDays);
            dateToWrite = `${differenceInDays} days ago`;
        }
        if(today.getTime() - this.date.getTime() >= mscInWeek){
            let mnth;
            if(this.date.getMonth() < 9){
                mnth = '0'+`${this.date.getMonth()+1}`
            }
            else{
                mnth = `${this.date.getMonth()+1}`
            }
            dateToWrite = `${this.date.getDate()}.${mnth}.${this.date.getFullYear()}`;
        }
        document.write(
            `<h1>${this.title}</h1>`+
            `<p>${dateToWrite}</p>`+
            `<p>${this.text}</p>`+
            `<div class="hashtags">${htags}</div>`
        )
    }
}


let myObject = {
    arrayNews: [
        new News(
            'Zagolovok',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quisquam laudantium atque. Nemo deserunt consectetur tempora voluptatum dolore, voluptas beatae, recusandae quasi voluptatem neque, doloribus unde cupiditate dignissimos possimus tempore.',
            ['#lorem', '#ipsum', '#dolor'],
            '06/25/2023'
        ),
        new News(
            'Zagolovok2',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ipsam soluta praesentium nostrum, corporis porro optio provident, a architecto quos accusantium necessitatibus. Ea commodi sequi maiores. Iure non doloremque saepe.',
            ['#ipsum', '#dolor', '#lorem'],
            '06/21/2022'
        )
    ],
    fullPrint(){
        for(let i = 0; i < this.arrayNews.length; i++){
            this.arrayNews[i].print();
        }
    },
    delete(delnumber) {
        this.arrayNews.splice(delnumber - 1, 1);
    },
    search(inputString) {
        for(let i = 0; i < this.arrayNews.length; i++){
            if (inputString == this.arrayNews[i].title){
                return i;
            }
        }
        return -1;
    }
}

myObject.fullPrint();
console.log(myObject.search(prompt(`Укажите заголовок для поиска:`)));
myObject.delete(+prompt(`Укажите номер новости для удаления:`));
document.write('<br><br><br><br><br>');
myObject.fullPrint();