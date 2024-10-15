import Learn4 from 'assets/images/learn/4.png'
import Learn5 from 'assets/images/learn/5.png'
// 
export default () =>
{
    return <>
        <h2>Call third-party API</h2>
        <p>Let's make another route and this time we will call a third party api - https://jsonplaceholder.typicode.com/todos, which will send us a list of 200 mock todos back to us and we will respond back the same.</p>

        <p>In this second endpoint we will accept a query parameter and use it inside our route code.</p>

        <p>Some things we will explore and solve</p>

        <p>Our code should wait till the third party api responds us with its data, once we receive it, we will then resume executing our own code. We will using the concept of async javascript to acheive this.</p>
        <p>We will accept a parameter called limit where will limit the no of objects we return in our code</p>
        <p>We will use axios, a popular third party library to make http requests.</p>
        <p>First install axios dependancy with this command.</p>

        <img src={Learn4} />
    
        <p>Let's write our second route code and dig into what it is doing</p>

        <img src={Learn5} />

        <p>The code seems similar to the previous route but you see some things in this. </p>

        <p>-{'>'} The async part means that you are implying you compiler to expect some code that will pause the execution until told.</p>

        <p>-{'>'} Remember when we said the express routes will be expecting two parameters usually, the first parameter will be always containing the request data. So here we are interested in the req.query data, which will be having all of our query parameters.</p>

        <p>So, if we make the API call like this http://localhost:4000/tasks?limit=2</p>

        <p>In this case we are capturing the query parameter called limit and saving it in a variable called limit.</p>

        <p>-{'>'} We are using axios to make a third-party API request, a GET request to be specific, to this api - https://jsonplaceholder.typicode.com/todos.</p>

        <p>Go ahead and open it in your browser and you will see it returns us 200 dummy todos in a array. The await keyword before axios.get means you want to wait till the api return us data.</p>

        <p>-{'>'} We then check if we our api endpoint had a limit parameter, if it did we are slicing the array so that we respond back limited results as requested or just respond back all the results.</p>

        <p>-{'>'} the status(400) means we are sending the api request along with a HTTP Status Code 400 which will learn more about further in this course.</p>

        <p>So there we go, we learned how to use third-party APIs, capture query parameters, and use them in our code, we also made use of ES6 concepts like async/await. You can add this route in your project code and run it try.</p>

        <p>In the meantime let's also host this on glitch.com so that we will be having a live API that we can call from anywhere.</p>

        <h2>Hosting on Glitch</h2>
        
        <p>Open up <a href='https://www.glitch.com'>glitch.com</a> and sign up and click on New project, since we are making apis with express, select hello-express option.</p>


    </>
}