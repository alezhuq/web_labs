document.getElementById('default_input').addEventListener('mouseover', ()=>{
    document.getElementById('information').textContent = "Додаткова інформація"
})
document.getElementById('default_input').addEventListener('mouseout', ()=>{
    document.getElementById('information').textContent = ""
})

document.getElementById('button').addEventListener('click', ()=>{
    const section = parseInt(document.getElementById('section').value)
    const floor = parseInt(document.getElementById('floor').value)
    const flat = parseInt(document.getElementById('flat').value)
    if(isNaN(section) || isNaN(floor) || isNaN(flat)){
        document.getElementById('result').innerHTML = '<h1>Введені некоректні дані</h1>'
        return
    }
    if(section < 1 || section > 3 || floor > 9 || floor < 1 || flat < 1 || flat > 108){
        document.getElementById('result').innerHTML = '<h1>Введені неправильні дані</h1>'
        return
    }
    const maxApartmentNumber = (section-1) * 36 + floor * 4
    if(flat <= maxApartmentNumber && flat > maxApartmentNumber - 4){
        document.getElementById('result').innerHTML = '<h1>Така квартира існує</h1>'
        return
    }
    document.getElementById('result').innerHTML = '<h1>Такої квартири не існує</h1>'
})