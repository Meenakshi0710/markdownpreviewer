import React, { useState } from 'react'
import { marked } from "marked";

const Home = () => {
    const defaultInput = "Markdown syntax typed into the first pane will be automatically converted to HTML and rendered in the second pane. Go ahead, give it a try!  \n\n#### Headings:  \n# Heading 1\n## Heading 2\n### Heading 3\n---\n#### Hyperlink:   \n[Google](https://google.com)  \n\n---\n#### Inline code:\nFrom the console, run `console.log('Hello world!');` to see the output.    \n\n---\n\n#### Code block:\n```javascript\nfunction sayHello() {\n  return 'Hello world!';\n}\n```\n---\n\n#### List items:\n1. Ordered list item 1  \n2. Ordered list item 2  \n\n\n- Unordered list item  \n- Unordered list item  \n\n---\n\n#### Blockquote:  \n> Part of the inhumanity of the computer is that, once it is competently programmed and working smoothly, it is completely honest. -Isaac Asimov \n\n---\n#### Image:  \n![alt text](https://avatars2.githubusercontent.com/u/9892522?s=100&v=4 'freeCodeCamp Avatar')  \n\n---\n#### Formatted text:\nAs **bolded** or *emphasized* text.  ";
    const [markdown, setMarkdown] = useState(defaultInput)
    const updateMarkdown = (markdown)=>{
        setMarkdown(markdown);
    }
    const clearInput = ()=>{
        setMarkdown("");
    }
  return (
    <div className='container'>
        <h2><span className="badge bg-secondary mt-4">Markdown Previewer</span></h2>
        
        <div className="row mt-4">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                    Editor<span class="badge bg-secondary float-end" style ={{cursor:"pointer"}} onClick={clearInput}>Clear</span>
                    </div>
                    </div>
                    <div className="input-group" style={{height:"400px"}}>
                    <textarea className="form-control" id='editor' aria-label="With textarea" value= {markdown} onChange={(e)=>{updateMarkdown(e.target.value)}} >{console.log(markdown)}</textarea>

                    </div>
                    
            </div>

            <div className="col-md-6">
                <div className="card mb-4 bg-dark-subtle">
                    <div className="card-header">
                    Previewer
                    </div>
                    <div className="card-body"  style={{height:"400px", overflow: "auto"}} id='preview' dangerouslySetInnerHTML={{
                  __html: marked(markdown)}}>
                    
                    </div>
                </div>
            </div>
</div>
        </div>
  )
}

export default Home