const board = $(".board")
board.on("contextmenu", e => {
    e.preventDefault();
})
let move = $("input[name=move]:checked").val()
let first_square = "white";
const lettres = ["a", "b", "c", "d", "e", "f", "g", "h"]

draw_chessboard(move)

$("form input").on("change", () => {
    move = $("input[name=move]:checked").val()
    console.log(move);
    board.empty();
    draw_chessboard(move);
})

function draw_chessboard(color){

    for(let i = 0; i < 64; i++){
        const row = color === "white" ? Math.ceil((64 - i) / 8) : Math.floor((i + 8) / 8);
        const column = color === "white" ? lettres[i % 8] : lettres[7 - (i % 8)];
        let square = $("<div>", {
            class: "square"
        })
        square.append($("<div>", {
            text: "C",
            class: "piece"
        }))
        if(i % 8 === 0){ // rows
            square.append($("<div>", {
                // text: color === "white" ? (64 - i) / 8 : (8+i) / 8,
                text: row,
                class: "row"
            }));
        }
        if(i > 55){
            square.append($("<div>", { // column
                text: column,
                class: "column"
            }));
        }
        let square_name = "";
        square_name += column;
        square_name += row;
        // square.append($("<div>", {
        //     text: square_name,
        //     class: "index"
        // }));
        if(first_square === "white"){ // fin de ligne : changement de couleur
            if(i % 2 === 0){ // blanc
                square.addClass("white").addClass("black-text")
                board.append(square.prop("outerHTML"))
            } else { // noir
                square.addClass("black").addClass("white-text")
                board.append(square.prop("outerHTML"))
            }

            if((i + 1) % 8 === 0){
                first_square = "black";
            }
        } else if(first_square === "black"){
            if(i % 2 === 0){ // noir
                square.addClass("black").addClass("white-text")
                board.append(square.prop("outerHTML"))
            } else { // blanc
                square.addClass("white").addClass("black-text")
                board.append(square.prop("outerHTML"))
            }
            if((i + 1) % 8 === 0){ // fin de ligne : changement de couleur
                first_square = "white";
            }
        }
    }
}


