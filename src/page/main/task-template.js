import React from 'react';
import { checkIframe } from 'page/main';

function TaskTemplate(props) {
  if (checkIframe()) return <>task template</>;
  return null;
}

export default TaskTemplate;