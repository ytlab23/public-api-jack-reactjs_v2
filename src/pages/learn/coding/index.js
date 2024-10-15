import Learn1 from 'assets/images/learn/1.png'
import Learn2 from 'assets/images/learn/2.png'
import Learn3 from 'assets/images/learn/3.png'
// 
export default () =>
{
    return <>
        <h2>Coding API</h2>
        <p>Now that we have our project setup. Let's write some code. We will do this step by step so that you will be able to understand the context of it.</p>

        <p>We will use vscode as it the most popular code editor, you can use any other editor if your choice as well.</p>

        <p>Now, open the index.js in vscode and we will begin coding.</p>

        <p>We will be making an api which responds back a list of tasks and users.</p>

        <h2>1. Import and initialise dependencies</h2>
        <p>Import express and cors like below</p>

        <img src={Learn1} />

        <p>Line 1 & 2 are importing express and cors which we had installed earlier. Line 3 is initialising to a variable called app. The last line means the app will be using cors, cors is a express middleware, which you can learn more about here.</p>

        <h2>2. Making a route</h2>
        <p>Express has the concept of routes (which we learned in chapter 2). Since we are creating two different api endpoints which return a list of tasks and users. Let' begin making them</p>

        <img src={Learn2} />

        <p>Let's break down the above code. the first line app.get('/users', function (req, res) is a route, a GET route to be specific.</p>

        <p>The /users is the route which means when you call the api url ending with /users the below code will be executed.</p>

        <p>A express route usually accepts two parameters the first one is used for accesing the request data and the second parameter is used for responding back, in the above code we have named as req and res.</p>

        <p>We have variable called users which has an array of objects & we are sending it back as json to whoever is requesting the data by calling our route endpoint.</p>

        <p>The res.send(users) method is used to send back data.</p>

        <h2>3. Run API server</h2>
        <p>Okay so when ever you write a node script and you try to run it, the file is just executed only once, but since this is an api you want it to always listen, so that whenever someone call the API it will always execute and return data.</p>

        <p>So express has way to do that by adding a listener to a port of our choice. So, adding listener in the last.</p>

        <p>Complete code:</p>

        <img src={Learn3} />

        <p>Add this at the end of your code and now you have yourself a working api.</p>

        <p>In order to run this code, open the terminal again in the project folder and run command node index.js</p>

        <p>This will open up the port and you see a message printed saying API running at http://localhost:4000</p>

        <p>If you open the endpoint URL http://localhost:4000/users in your browser. You will be able to see the users lists printed in json format.</p>

        <p>Now that we made our first endpoint.</p>
    </>
}