    function drag(event) {
            event.dataTransfer.setData("text", event.target.id);
        }

        function drop(event) {
            event.preventDefault();
            var data = event.dataTransfer.getData("text");
            event.target.appendChild(document.getElementById(data));
            checkWin();
        }

        function alldrop(event) {
            event.preventDefault();
        }

        function checkWin() {
            var dropboxes = document.querySelectorAll('.dropbox');

            var winningCombos = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
                [0, 4, 8], [2, 4, 6] // Diagonals
            ];

            for (var i = 0; i < winningCombos.length; i++) {
                var combo = winningCombos[i];
                var box1 = dropboxes[combo[0]].firstElementChild;
                var box2 = dropboxes[combo[1]].firstElementChild;
                var box3 = dropboxes[combo[2]].firstElementChild;

                if (box1 && box2 && box3 && box1.className === box2.className && 
                    box2.className === box3.className) {
                    displayWinMessage(box1.className);
                    return;
                }
            }
        }

        function displayWinMessage(symbol) {
            var winMessage = "Congratulations! " + symbol + " wins!";
            alert(winMessage);
        }
