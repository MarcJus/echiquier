const board = $(".board")

let first_square = "white";
const lettres = ["a", "b", "c", "d", "e", "f", "g", "h"]

for(let i = 0; i < 64; i++){
    let square = $("<div>", {
        class: "square"
    })
    if(i % 8 === 0){ // rows
        square.append($("<div>", {
            text: (64 - i) / 8,
            class: "row"
        }));
    }
    if(i > 55){
        square.append($("<div>", { // column
            text: lettres[i-56],
            class: "column"
        }));
    }
    // square.append($("<div>", {
    //     text: i,
    //     class: "index"
    // }));
    if(first_square === "white"){ // fin de ligne : changement de couleur
        if(i % 2 === 0){ // blanc
            square.removeClass("black").addClass("white")
            board.append(square.prop("outerHTML"))
        } else { // noir
            square.removeClass("white").addClass("black")
            board.append(square.prop("outerHTML"))
        }

        if((i + 1) % 8 === 0){
            first_square = "black";
        }
    } else if(first_square === "black"){
        if(i % 2 === 0){ // noir
            square.removeClass("white").addClass("black")
            board.append(square.prop("outerHTML"))
        } else { // blanc
            square.removeClass("black").addClass("white")
            board.append(square.prop("outerHTML"))
        }
        if((i + 1) % 8 === 0){ // fin de ligne : changement de couleur
            first_square = "white";
        }
    }
}
