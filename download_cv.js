document.addEventListener("DOMContentLoaded", function() {
  const downloadButton = document.getElementById('download-cv');

  downloadButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior

      // Check if the CV file is available
      fetch(downloadButton.href)
          .then(response => {
              if (!response.ok) {
                  throw new Error('File not available');
              }
              return response.blob();
          })
          .then(blob => {
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.style.display = 'none';
              a.href = url;
              a.download = 'ALVAN-Cv.pdf';
              document.body.appendChild(a);
              a.click();
              window.URL.revokeObjectURL(url);
              alert('Your CV is being downloaded...');
          })
          .catch(error => {
              alert('Maaf, CV belum tersedia untuk di download.');
          });
  });
});
