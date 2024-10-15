export default () =>
{
    return <div>
        <h2>Prerequisite &amp; terminologies</h2>
        <p>In this chapter will guide throught Node.js installation for MacOS, Windows, and Linux. if you already installed Node.js then you can skip this part.</p>
        <h3>Install Node.js</h3>
        <p><strong>Mac OS</strong></p>
        <p>You can install Node directly by downloading it from <a href="https://nodejs.org/en/">https://nodejs.org/en/</a> and installing it from finder.</p>
        <p>If you want to download it from your terminal, homebrew process is very straightforward.</p>
        <ol>
            <li>Open your terminal and type <code >brew update</code></li>
            <li>Run command <code >brew install node</code></li>
        </ol>
        <p><strong>Windows</strong></p>
        <p>The easiest way to install Node in windows is, downloading the <code >exe</code> package from node website <a href="https://nodejs.org/en/">https://nodejs.org/en/</a> &amp; installing it.</p>
        <p><strong>Linux</strong></p>
        <p>You can install node in Linux via the official apt packages</p>
        <ol>
        <li>Run command <code >sudo apt update</code> this will update your apt list internally.</li>
        <li>Install node with <code >sudo apt install nodejs</code> command.</li>
        </ol>
        <p>This will install the latest Node version in your Linux systems.</p>
        <p>Once done you can verify its installation by running <code >node -v</code> command in your terminal or command prompt. It will print your Node.js version, indicating you've succesfully installed node.js</p>
        <h3>Prerequisites &amp; the ingredients &amp; Third party tools we are using in this course.</h3>
        <p>This course assumes you know</p>
        <ol>
        <li>Fundamentels of web development.</li>
        <li>Basics of Javascript.</li>
        <li>What's Node.js</li>
        </ol>
        <p>We will be building our APIs with Express.js a Node Framework. We will also use Mongo DB Atlas, a online database service to build a Notes API.</p>
        <p>We will also be using <a href="http://glitch.com/">glitch.com</a> a free API hosting service.</p>
        <h3>Common Terminologies</h3>
        <p>Some common Terminologies associated with APIs will come in next chapters.</p>
        <p><strong>Endpoint</strong></p>
        <p>Endpoints mean the different kinds of urls in your api ends with. They are associated with the <code >GET</code>, <code >POST</code>, <code >PUT</code>, <code >DELETE</code> methods of your APIs.</p>
        <p><span class="gatsby-resp-image-wrapper" >
            <a class="gatsby-resp-image-link" href="https://public-apis.io" target="_blank" rel="noopener">
            <span class="gatsby-resp-image-background-image"></span>
        {/* <img alt="Endpoint" title="Endpoint" src="https://public-apis.io/static/948da6cf2aed90ec9e7ad54d7174b924/01267/endpoint.png" srcset="https://public-apis.io/static/948da6cf2aed90ec9e7ad54d7174b924/1c154/endpoint.png 197w, /web/20201024081551im_/https://public-apis.io/static/948da6cf2aed90ec9e7ad54d7174b924/d72ec/endpoint.png 393w, /web/20201024081551im_/https://public-apis.io/static/948da6cf2aed90ec9e7ad54d7174b924/01267/endpoint.png 713w" sizes="(max-width: 713px) 100vw, 713px"   loading="lazy" /> */}
        </a>
            </span></p>
        <p><strong>Routes</strong></p>
        <p>These mean the paths of your API endpoint.</p>
        <p><span class="gatsby-resp-image-wrapper" >
            {/* <a class="gatsby-resp-image-link" href="https://public-apis.io/static/2b81ca9902929dc794adefc18a9afb04/02cd5/routes.png"   target="_blank" rel="noopener">
            <span class="gatsby-resp-image-background-image"></span>
        <img alt="Routes" title="Routes" src="/web/20201024081551im_/https://public-apis.io/static/2b81ca9902929dc794adefc18a9afb04/321ea/routes.png" srcset="/web/20201024081551im_/https://public-apis.io/static/2b81ca9902929dc794adefc18a9afb04/1c154/routes.png 197w, /web/20201024081551im_/https://public-apis.io/static/2b81ca9902929dc794adefc18a9afb04/d72ec/routes.png 393w, /web/20201024081551im_/https://public-apis.io/static/2b81ca9902929dc794adefc18a9afb04/321ea/routes.png 786w, /web/20201024081551im_/https://public-apis.io/static/2b81ca9902929dc794adefc18a9afb04/02cd5/routes.png 821w" sizes="(max-width: 786px) 100vw, 786px"   loading="lazy" />
        </a> */}
            </span></p>
        <p><strong>CRUD</strong></p>
        <p>CRUD simply means Create, Read, Update &amp; Delete. The most common use cases of an API.</p>
        <p><strong>Query Params</strong></p>
        <p>The parameters in that are appended to your endpoint with a <strong>?</strong> in the url. Its a way to send simple data to your api.</p>
        <p><span class="gatsby-resp-image-wrapper" >
            {/* <a class="gatsby-resp-image-link" href="/web/20201024081551/https://public-apis.io/static/5f0f1bf30a256e6a9a53490e072edaf2/ad12c/queryparam.png"   target="_blank" rel="noopener">
            <span class="gatsby-resp-image-background-image"></span>
        <img alt="Query Param" title="Query Param" src="/web/20201024081551im_/https://public-apis.io/static/5f0f1bf30a256e6a9a53490e072edaf2/321ea/queryparam.png" srcset="/web/20201024081551im_/https://public-apis.io/static/5f0f1bf30a256e6a9a53490e072edaf2/1c154/queryparam.png 197w, /web/20201024081551im_/https://public-apis.io/static/5f0f1bf30a256e6a9a53490e072edaf2/d72ec/queryparam.png 393w, /web/20201024081551im_/https://public-apis.io/static/5f0f1bf30a256e6a9a53490e072edaf2/321ea/queryparam.png 786w, /web/20201024081551im_/https://public-apis.io/static/5f0f1bf30a256e6a9a53490e072edaf2/ad12c/queryparam.png 856w" sizes="(max-width: 786px) 100vw, 786px"   loading="lazy" />
        </a> */}
            </span></p>
        <p>Here <code >sort</code> is the query parameter and it's value is <code >name</code></p>
        <p><strong>REST</strong></p>
        <p>It stands for Representational State Transfer. The modern standard for making APIs. <strong>Most people confuse this as a technology, but actually this is more of a concept, a standard set of best practices to make APIs.</strong></p>
        <p><strong>JAMStack</strong></p>
        <p>This means a frontend tech stack, which uses JavaScript, APIs &amp; Markup, where usually the backend &amp; frontend are isolated from each other and the only way to <strong>communicate with them is via APIs</strong>.</p>
        <p><strong>URL Encoded</strong></p>
        <p>Sometimes you need to pass some things in your API query params which could create some issues like spaces, forward slashes etc. You need to <strong>encode these special characters</strong> so that they can be sent over the internet. You can find a reference of these characters on <a href="https://www.w3schools.com/tags/ref_urlencode.ASP">w3schools</a>.</p>
    </div>
}