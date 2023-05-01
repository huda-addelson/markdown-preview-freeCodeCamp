import { useState } from 'react';
import Editor from './Components/Editor';
import Preview from './Components/Preview';
import './index.css';

const placeholderText =
  "# Welcome to My Markdown Editor\n\n## Made with React \n\n [Markdown Syntax](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)\n\nUse backticks to write inline code like so `<div></div>`\n\nAs the nerds always said: \n\n> read the tutorial, dont ask me you dumb b*tch\n\n You can make text bold **with two asterisks**\n\n ```\n\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n\nif (firstLine == '```' && lastLine == '```') {\n\nreturn multiLineCode;}}\n\n```\n\n1. Read this tutorial\n\n2. Delete this text\n\n3. Write your own code\n\n![car shaped game piece on board](https://i.ibb.co/r5QMy35/rsz-gray-car-die-cast-model-1249650.jpg)\n\n***Let's Begin!***";

function App() {
  const [teks, setTeks] = useState(placeholderText);
  return (
    <div className='wrapper'>
      <Editor teks={teks} setTeksValue={setTeks} />
      <Preview teks={teks} />
    </div>
  );
}

export default App;
