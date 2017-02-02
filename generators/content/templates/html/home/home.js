(function(){
  'use strict';

  // The initialize function must be run each time a new page is loaded
  Office.initialize = function(reason){
    jQuery(document).ready(function(){
      app.initialize();
      jQuery('#get-data-from-selection').click(getDataFromSelection);
    });
  };

  // Reads data from current document selection and displays a notification
  function getDataFromSelection(){
    if (Office.context.document.getSelectedDataAsync) {
      Office.context.document.getSelectedDataAsync(Office.CoercionType.Text,
        function(result){
          if (result.status === Office.AsyncResultStatus.Succeeded) {
            app.showNotification('The selected text is:', '"' + result.value + '"');
          } else {
            app.showNotification('Error:', result.error.message);
          }
        }
        );
    } else {
      app.showNotification('Error:', 'Reading selection data not supported by host application.');
    }
  }
})();