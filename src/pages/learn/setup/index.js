export default () =>
{
    return <>
      <div>
        <h2>Making an API with Express</h2>
            <p>Enough theory, let's jump in and make a api with Express and Node.js. We will do this from scratch and I want you to follow along with this exercise, we will be explaining this and keep it as simple as possible.</p>
            <blockquote>
            <p>Make sure you have the latest version of node.js installed in your system before we begin.</p>
            </blockquote>
            <h3>Initialising a node project &amp; installing Express</h3>
            <p>Let's go to our file manager in our computer and create a new folder for our fresh new project. Open this folder in our terminal</p>
            <p>Once done, type <code  >npm init</code> in your terminal and run the command. This will open the Node project CLI which initializes a project for us. Add in some information like your project name, description author. You can leave the test command, git repository &amp; keywords blank.</p>
            <p><span>
                {/* <a href="/web/20201024084707/https://public-apis.io/static/000a65a0b4ab3113169cd1d1f7111b9a/0ffd9/npm-init.png" target="_blank" rel="noopener">
                <span></span>
            <img alt="npm init" title="npm init" src="/web/20201024084707im_/https://public-apis.io/static/000a65a0b4ab3113169cd1d1f7111b9a/321ea/npm-init.png" srcset="/web/20201024084707im_/https://public-apis.io/static/000a65a0b4ab3113169cd1d1f7111b9a/1c154/npm-init.png 197w, /web/20201024084707im_/https://public-apis.io/static/000a65a0b4ab3113169cd1d1f7111b9a/d72ec/npm-init.png 393w, /web/20201024084707im_/https://public-apis.io/static/000a65a0b4ab3113169cd1d1f7111b9a/321ea/npm-init.png 786w, /web/20201024084707im_/https://public-apis.io/static/000a65a0b4ab3113169cd1d1f7111b9a/60b3a/npm-init.png 1179w, /web/20201024084707im_/https://public-apis.io/static/000a65a0b4ab3113169cd1d1f7111b9a/5df5d/npm-init.png 1572w, /web/20201024084707im_/https://public-apis.io/static/000a65a0b4ab3113169cd1d1f7111b9a/0ffd9/npm-init.png 2558w" sizes="(max-width: 786px) 100vw, 786px" loading="lazy" />
            </a> */}
                </span></p>
            <p>Enter yes and this will quickly initialise your project. You will notice that a <code  >package.json</code> file is generated in your project folder.</p>
            <p>The <code  >package.json</code> is like a identity card of your project, it contains all the metadata and also has a list of dependencies of your projects. </p>
            <p>Let's install some dependencies into our project. We will be needing <a href="https://expressjs.com/">Express</a>, a Node framework which is used to make apis mostly &amp; we will also use <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cors</a>. </p>
            <p>So, first of all go to your project folder and run the following command.</p>
            <div data-language="text"><pre><code  >npm install --save express cors</code><span aria-hidden="true"><span></span></span></pre></div>
            <p>This will take some time and a folder called <code  >node_modules</code> where all the installed dependencies are stored.</p>
            <p>Now that our express is installed, let's create a file called <code  >index.js</code> which will be the entry point of our project. </p>
            <p><strong>Tip</strong>: run command <code  >touch index.js</code> in your terminal to create a new file.</p>
        </div>
    </>
}