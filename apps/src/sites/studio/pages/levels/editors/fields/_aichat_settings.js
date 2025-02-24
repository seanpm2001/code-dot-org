import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import getScriptData from '@cdo/apps/util/getScriptData';
import EditAichatSettings from '@cdo/apps/lab2/levelEditors/aichatSettings/EditAichatSettings';

$(document).ready(function () {
  const initialSettings = getScriptData('aichatsettings');

  ReactDOM.render(
    <EditAichatSettings initialSettings={initialSettings} />,
    document.getElementById('aichat-settings-container')
  );
});
