class Unit {
    constructor(z, type, owner) {

        const unit = this

        unit.z = z
        unit.x = Math.floor(z / mapDimensions)
        unit.y = Math.floor(z % mapDimensions)

        unit.type = type
        unit.owner = owner

        unit.el = document.createElement('img')
        unit.el.classList.add('unit', z)
        unitsEl.appendChild(unit.el)

        unit.el.src = 'materials/images/' + type + owner + '.png'

        unit.el.style.left = unit.x * (gameWidth / mapDimensions) + 'px'
        unit.el.style.top = unit.y * (gameHeight / mapDimensions) + 'px'

        unit.el.style.width = gameWidth / mapDimensions + 'px'
        unit.el.style.height = gameHeight / mapDimensions + 'px'

        game.units[z] = unit
    }
}

Unit.prototype.move = function(z) {

    const unit = this
    console.log(z)
    game.units[z].delete()

    unit.z = z
    unit.x = Math.floor(z / mapDimensions)
    unit.y = Math.floor(z % mapDimensions)

    unit.el.style.left = unit.x * (gameWidth / mapDimensions) + 'px'
    unit.el.style.top = unit.y * (gameHeight / mapDimensions) + 'px'

    game.units[z] = unit
}

Unit.prototype.delete = function() {

    const unit = this

    unit.el.remove()
    delete game.units[unit.z]
}