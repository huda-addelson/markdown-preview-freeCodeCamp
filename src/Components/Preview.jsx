import React from 'react';
import { marked } from 'marked';
import './style.css';

export default function Preview({ teks }) {
  marked.setOptions({
    breaks: true,
  });
  return (
    <div className='wrapper-preview'>
      <div className='title-teks'>Preview</div>
      <div
        className='preview-teks'
        id='preview'
        dangerouslySetInnerHTML={{ __html: marked(teks) }}
      />
    </div>
  );
}
