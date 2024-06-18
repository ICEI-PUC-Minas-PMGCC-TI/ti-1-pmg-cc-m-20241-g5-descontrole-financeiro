



function logAnchorIds() {
    const anchorElements = document.querySelectorAll('.fase a');  // Select all anchors within elements with class "fase"
  
    anchorElements.forEach(anchor => {
      anchor.addEventListener('click', function() {
        console.log(`This is chapter ${anchor.id[0]} and phase ${anchor.id[1]}`);
        const url = `../questao.html?chapter=${anchor.id[0]}&phase=${anchor.id[1]}`;
            // Redirect to the URL
        window.location.href = url;
      })
    });
  }
  
  // Call the function after the elements are potentially loaded

setTimeout(logAnchorIds, 1000); 
