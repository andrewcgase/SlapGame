function GameService() {

    var target = new Target('strawman', 100, 1, 5, 10);
    var items = {
        none: new Item('None', 1),
        shield: new Item('Shield', 0.3),
        weakness: new Item('T-shirt', 5),
        armor: new Item('Chain-mail', 0.5)
    }

    function Target(name, health, slap, punch, kick) {
        this.name = name;
        this.health = health;
        this.attacks = {
            'slap': slap,
            'punch': punch,
            'kick': kick
        };
        this.item = []
        this.hits = 0
    };

    this.getHealth = function () {
        return target.health
    }

    this.getHits = function () {
        return target.hits
    }

    this.giveItem = function (type) {
        target.item.push(items[type])
    }

    function Item(name, modifier) {
        this.name = name;
        this.modifier = modifier;
    };

    this.attack = function (type) {
        target.health -= target.attacks[type] * this.addMods()
        target.hits += 1
        this.knockOut()
    }

    this.knockOut = function () {
        if (target.health < 0) {
            target.health = 0
        }
    }

    this.addMods = function () {
        var combo = 1
                console.log(target.item)
        if (target.item.length == 0) {
            return 1
        } else if (target.item.length > 0) {
            for (i = 0; i < target.item.length; i++) {
                combo *= target.item[i].modifier
            }
        }
        return combo

    }
}

function GameController() {
    var dataStore = new GameService()

    this.attack = function (type) {
        dataStore.attack(type)
        update()
    }

    this.giveItem = function (type) {
        dataStore.giveItem(type)
        update()
    }

    function update() {

        document.getElementById('health').innerText = dataStore.getHealth().toFixed(1)
        document.getElementById('hits').innerText = dataStore.getHits().toFixed(1)
    }


}

var ctrl = new GameController()







