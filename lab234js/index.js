const button = document.getElementById('button');
const concerts = [
    {
        name: "Шило Павло",
        birthDate: "19.11",
        phone: ""
    },
    {
        name: "Нікіта Коркунда",
        birthDate: "22.11",
        phone: "0674351673"
    },
    {
        name: "Ярмола Максим",
        birthDate: "27.11",
        phone: "0679997625"
    },
    {
        name: "Кирил Жуков",
        birthDate: "28.11",
        phone: "0672359381"
    },
    {
        name: "Станіслав Каращук",
        birthDate: "30.11",
        phone: "0675356456"
    },
]

button.addEventListener('click', ()=>{
    const currentDate = new Date();

    const res = concerts.map((elem, index)=>{
        const [day, month] = elem.birthDate.split('.')
        const date = new Date(currentDate.getFullYear(), month - 1, day);
        const utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
        const utc2 = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
        const timeDiff = Math.floor((utc1 - utc2) /(1000 * 60 * 60 * 24));
        if(timeDiff === 3){
            return (`<h3>Потрібно відправити вітальну листівку для ${elem.name}</h3>`)
        }
        if(timeDiff === 0){
            return (elem.phone === '' 
            ? `<h3>У ${elem.name} сьогодні День народження, необхідно подзвонити і привітати. Номер телефону не вказаний</р>` 
            : `<h3>У ${elem.name} сьогодні День народження, необхідно подзвонити по телефону ${elem.phone} і привітати</h3>`)
        }
        return ''
    })
    
    const html = `${res.join('')}`;

    document.getElementById('result').innerHTML = html
})