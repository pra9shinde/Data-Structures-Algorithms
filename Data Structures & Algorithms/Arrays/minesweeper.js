 const minefield = [
     ['*','*','' , ''],
     ['*','*','' , ''],
     ['' ,'' ,'*', ''],
     ['' ,'' ,'' , '']
 ];

 //Output should print
 //**20
 //**30
 //23*1
 //0111

 function minesweeper(minefield){
    function getCell(row,col){
        if(row < 0 || col < 0) return 0;
        if(row >= minefield.length) return 0;
        if(col >= minefield[row].length) return 0;

        if(minefield[row][col] === "*") return 1;
        return 0;
    }


     for(let row = 0; row < minefield.length; row++){
        let line = ''; //just for printing and viewing
        for(let col = 0; col < minefield[row].length; col++){
            if(getCell(row,col) === 1){
                //current cell itself is a bomb
                line += '*';
            }
            else{
                let bombs = 0;
                bombs += getCell(row - 1,col - 1);//top left
                bombs += getCell(row - 1,col + 1);//top right value 
                bombs += getCell(row - 1,col);//top

                bombs += getCell(row,col - 1);//left
                bombs += getCell(row,col + 1);//right

                bombs += getCell(row + 1, col - 1);//bottom left
                bombs += getCell(row + 1, col + 1);//bottom right
                bombs += getCell(row,col +1);//bottom

                line += bombs;
            }
        }

        console.log(line);
     }
 }