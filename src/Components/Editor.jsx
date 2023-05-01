import React from 'react';
import './style.css';

export default function Editor({ teks, setTeksValue }) {
  return (
    <div className='wrapper-editor'>
      <div className='title-teks'>Editor</div>
      <textarea
        value={teks}
        name=''
        id='editor'
        rows='30'
        onChange={(e) => setTeksValue(e.target.value)}
        className='editor-input'></textarea>
    </div>
  );
}
