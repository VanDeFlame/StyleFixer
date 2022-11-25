const app = document.querySelector('#app');

// Initializer
const callback = (mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.target?.firstChild?.lastChild?.className?.includes('two')) { 
      let onSizeChange = main()
      window.addEventListener('resize', onSizeChange);
      onSizeChange({ target: { innerWidth: window.innerWidth }})
      observer.disconnect();
    }
  }
}

const observer = new MutationObserver(callback);
observer.observe(app, { attributes: false, childList: true, subtree: true });

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

    if (currentWidth <= 748 && !smallView) {
      useSmallView()
    } else if (currentWidth > 748 && smallView) {
      useNormalView()
    }
  }

  return onSizeChange;
}