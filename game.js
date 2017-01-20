

function Target(name,health,hits,items) {
    this.name = name; 
    this.health = health;
    this.hits = hits;
    this.items = [items];
}

function Item(name,value) {
    this.name = name;
    this.value = value;
}

function slap(target) {
    target.health = target.health - 1 * addMods(target)
    hit(target)
    update(target);
}

function punch(target) {
    target.health = target.health - 5 * addMods(target)
    hit(target)
    update(target);
    
}

function kick(target) {
    target.health = (target.health - 10 * addMods(target)).toFixed(3)
    hit(target)
    update(target);
    
}

function hit(target){
    target.hits = target.hits + 1
}



function update(target) {
    knockOut(target)
    document.getElementById('hits').innerText = target.hits
    document.getElementById('health').innerText = target.health
}

function knockOut(target){
    if(target.health < 0){
        target.health = 0
    }
}

function addMods(target){
    var combo = 0
    for(i = 0; i < target.items.length; i++){
        combo += target.items[i].value
    }
    return combo
}




var items = {
    shield: new Item('Shield', 0.3),
    sword: new Item('Battle Bikini', 5),
    potion: new Item('Uni-brow', 1)
}


var dummy = new Target('strawman',95,0,items.shield);