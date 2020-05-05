import marked from 'marked';
import hljs from 'highlight.js';
import Tocify from './tocify.tsx';

const MdResolve = (md) => {
  const tocify = new Tocify();
  const renderer = new marked.Renderer();

  renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
  }

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    }
  });

  return {
    md: marked(md),
    tocify
  };
}

export default MdResolve;