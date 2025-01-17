let targetNumber;
        let maxNum;
        
        function startGame() {
            maxNum = parseInt(document.getElementById('maxNumber').value);
            
            if (!maxNum || maxNum < 1) {
                alert('Please enter a valid maximum number greater than 0');
                return;
            }
            
            targetNumber = Math.floor(Math.random() * (maxNum + 1));
            document.querySelector('.setup-screen').style.display = 'none';
            document.querySelector('.game-screen').style.display = 'block';
            document.getElementById('maxRange').textContent = maxNum;
            clearMessages();
        }
        
        function checkGuess() {
            const userGuess = parseInt(document.getElementById('userGuess').value);
            const messageDiv = document.getElementById('message');
            const hintDiv = document.getElementById('hint');
            
            if (isNaN(userGuess)) {
                messageDiv.className = 'message error';
                messageDiv.textContent = 'Please enter a valid number!';
                return;
            }
            
            if (userGuess < 0 || userGuess > maxNum) {
                messageDiv.className = 'message error';
                messageDiv.textContent = `Please enter a number between 0 and ${maxNum}!`;
                return;
            }
            
            if (userGuess === targetNumber) {
                messageDiv.className = 'message success';
                messageDiv.textContent = 'Congratulations! You guessed it right! 🎉';
                hintDiv.textContent = '';
            } else {
                messageDiv.className = 'message error';
                messageDiv.textContent = 'Wrong guess, try again!';
                hintDiv.textContent = userGuess > targetNumber ? 
                    'Hint: Try a lower number' : 'Hint: Try a higher number';
            }
            
            document.getElementById('userGuess').value = '';
        }
        
        function resetGame() {
            document.querySelector('.setup-screen').style.display = 'block';
            document.querySelector('.game-screen').style.display = 'none';
            document.getElementById('maxNumber').value = '';
            clearMessages();
        }
        
        function clearMessages() {
            document.getElementById('message').textContent = '';
            document.getElementById('hint').textContent = '';
            document.getElementById('userGuess').value = '';
        }