chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'check_element') {
      let element = document.querySelector('.modal.fade');
      console.log('Element exists: ', !!element);
      sendResponse({elementExists: !!element});
  }
});
