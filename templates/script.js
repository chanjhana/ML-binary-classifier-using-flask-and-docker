document.getElementById('upload-form').addEventListener('submit', function(event) {
    const fileInput = document.getElementById('file-input');
    const loadingDiv = document.getElementById('loading');

    if (!fileInput.files.length) {
        event.preventDefault();
        alert('Please select an image file.');
        return;
    }

    loadingDiv.style.display = 'block';
});
