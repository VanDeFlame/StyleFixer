setTimeout(() => {
  let onSizeChange = main()
  window.addEventListener('resize', onSizeChange);
  onSizeChange({ target: { innerWidth: window.innerWidth }})
}, 5000)

function main () {
  let smallView;

  const wppHeader = document.querySelector('header.g0rxnol2.ercejckq.cm280p3y.p357zi0d');
  const wppSearchBar = document.querySelector('.uwk68');
  const wppSide = document.querySelector('#side');

  // Modify the DOM in small width
  function useSmallView() {
    smallView = true;
    
    // Move the searchbar to the header
    wppHeader.firstChild.appendChild(wppSearchBar);
  }

  // Revert the changes in normal width
  function useNormalView() {
    smallView = false;

    // Move the searchbar to the panelside
    wppSide.prepend(wppSearchBar);
  }
  
  function onSizeChange(event) {  
    const currentWidth = event.target.innerWidth;

    if (currentWidth <= 640 && !smallView) {
      useSmallView()
    } else if (currentWidth > 640 && smallView) {
      useNormalView()
    }
  }

  return onSizeChange;
}