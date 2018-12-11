export class Cell {
    clicked;
    mine;
    adjacentMines;
    neighbors;
    flagged;
    constructor(public x : number, public y : number){
        this.clicked = false
        this.mine = false
        this.adjacentMines = 0
        this.x = x
        this.y = y
        this.neighbors = []
        this.flagged = false
    }
}