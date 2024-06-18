function logAnchorIds() {
    const anchorElements = document.querySelectorAll('.fase a');  // Select all anchors within elements with class "fase"
  
    anchorElements.forEach(anchor => {
      anchor.addEventListener('click', function() {
        console.log(`This is chapter ${anchor.id[0]} and phase ${anchor.id[1]}`);
        console.log(Number(anchor.id[0])+Number(anchor.id[1]));
      })
    });
  }
  
  // Call the function after the elements are potentially loaded
  
setTimeout(logAnchorIds, 1000); // Add a slight delay to ensure elements are loaded