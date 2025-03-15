function saveLetter() {
    const letterText = document.getElementById('loveLetter').value;
    const savedLetterDiv = document.getElementById('savedLetter');
    
    if (letterText.trim() !== '') {
        savedLetterDiv.textContent = letterText;
        savedLetterDiv.style.display = 'block';
        document.getElementById('loveLetter').value = '';
    }
}
