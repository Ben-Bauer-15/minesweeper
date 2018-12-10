export class Cell {
    clicked;
    mine;
    adjacent;
    constructor(){
        this.clicked = false
        this.mine = false
        this.adjacent = 0
    }
}