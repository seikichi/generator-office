/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

'use strict';

(function () {

  // The initialize function must be run each time a new page is loaded
  Office.initialize = function (reason) {
    $(document).ready(function () {
      $('#run').click(run);
    });
  };

  function run() {
    <% if (host === 'Outlook') { %>
    <%# Outlook doesn't expose Outlook.run(), so don't put that in %>
    /**
     * Insert your <%= host %> code here
     */
    <% } else { %>
    return <%= host %>.run(function (context) {
      /**
       * Insert your <%= host %> code here
       */
      return context.sync();
    });
    <% } %>
  }

})();