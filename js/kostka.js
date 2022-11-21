var player1 = "Player 1";
    var player2 = "Player 2";


    document.getElementById('game').addEventListener('click',
    function(){
        hod();
        vysledky();
     
    }
);

document.getElementById('names').addEventListener('click',
function(){
   editNames();
 
}
);
    
    function editNames() {
        player1 = prompt("Change Player1 name");
        player2 = prompt("Change player2 name");
  
        document.querySelector("p.Player1").innerHTML = player1;
        document.querySelector("p.Player2").innerHTML = player2;
    }

    function suma(cisla) {
        var sum = 0;
        cisla.forEach(function(value,index){
            sum += value;
        })
        return sum;
    }



    
  
    
    function hod() {
        
            var jedna = Math.ceil(Math.random() * 6) ;
            document.getElementById('img1').src='img/kostka' + jedna + '.png';




            var dva = Math.ceil(Math.random() * 6) ;
            document.getElementById('img2').src='img/kostka' + dva + '.png';




  
            if (jedna === dva) {
                document.querySelector("h1").innerHTML = "Draw!";
            }
  
            else if (jedna < dva) {
                document.querySelector("h1").innerHTML
                                = (player2 + " WINS!");
            }
  
            else {
                document.querySelector("h1").innerHTML
                                = (player1 + " WINS!");
            }
        }


        function vysledky(){
            document.getElementById('result').innerHTML += 
        '<p>Součet hodů: ' + suma() + '</p>';
        document.getElementById('result2').innerHTML += 
        '<p>Součet hodů: ' + suma() + '</p>';


        }
    