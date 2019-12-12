// Copy link
document.getElementById('btncode').addEventListener('click', function(e){

  const linkforbtncopy = document.getElementById('resultlink');

  copyToClipboard(`[maxbutton id="4" url="${linkforbtncopy.innerHTML}" text="View on Air BnB"]`);

  linkforbtncopy.innerHTML = '';


  e.preventDefault();
});

document.getElementById('msg').style.display = 'none';
document.getElementById('airbnb-button').addEventListener('click', function(e){

    const link = document.getElementById('airbnb');
    const msgdiv = document.getElementById('msg');
    const linkforbtn = document.getElementById('resultlink');

    if(link.value === ''){
        msgdiv.style.display = 'block';
        msgdiv.innerHTML = 'Please Enter Link!!';
        setTimeout(() => {
            msgdiv.style.display = 'none';
            msgdiv.innerHTML = '';
        }, 6000);
    } else{
        copyToClipboard(`http://airbnb.pvxt.net/c/1956590/264339/4273?u=${link.value}`)
        msgdiv.style.display = 'block';
        msgdiv.innerHTML = 'Link Has Been Generated and Copied Succfullly!';
        linkforbtn.innerHTML = `http://airbnb.pvxt.net/c/1956590/264339/4273?u=${link.value}`;
        link.value = '';
        setTimeout(() => {
            msgdiv.style.display = 'none';
            msgdiv.innerHTML = '';
        }, 6000);
    }

    e.preventDefault();
})


const copyToClipboard = str => {
  const el = document.createElement('textarea');  // Create a <textarea> element
  el.value = str;                                 // Set its value to the string that you want copied
  el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
  el.style.position = 'absolute';                 
  el.style.left = '-9999px';                      // Move outside the screen to make it invisible
  document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
  const selected =            
    document.getSelection().rangeCount > 0        // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0)     // Store selection if found
      : false;                                    // Mark as false to know no selection existed before
  el.select();                                    // Select the <textarea> content
  document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el);                  // Remove the <textarea> element
  if (selected) {                                 // If a selection existed before copying
    document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
    document.getSelection().addRange(selected);   // Restore the original selection
  }
};