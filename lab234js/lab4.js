class Computer {
    constructor(model, manufacturer, price){
        this.model = model
        this.manufacturer = manufacturer
        this.price = price
    }
    get model(){
        return this._model
    }
    set model(newModel){
        this._model = newModel
    }
    get manufacturer(){
        return this._manufacturer
    }
    set manufacturer(newManufacturer){
        this._manufacturer = newManufacturer
    }
    get price(){
        return this._price
    }
    set price(newPrice){
        this._price = newPrice
    }

    render(){
        return `<tr><td>${this.model}</td><td>${this.manufacturer}</td><td>${this.price}</td></tr>`
    }

}

document.getElementById('button').addEventListener('click', ()=>{
    let arr = [new Computer('macbook pro 13','Apple','1300'), new Computer('macbook air 11','Apple','1100'), new Computer('acer Nitro 5','Acer','1200')]

    arr = arr.map((elem)=>{
        return elem.render()
    })

    document.getElementById('result').innerHTML = `<table><tr><td>Модель</td><td>Виробник</td><td>Ціна</td></tr>${arr.join('')}</table>`
})
