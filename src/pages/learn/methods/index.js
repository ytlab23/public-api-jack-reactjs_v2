export default () =>
{
    return <>
        <div>
            <h2>API Methods</h2>
            <p>There are several different ways an API can be called from our frontend website or app. They are called Methods.</p>
            <p>We have different ways to connect with a api which do different things.</p>
            <p>Usually There's GET, POST, PUT &amp; DELETE methods to call a API &amp; these are the different ways to either send data to a server or get data from it.</p>
            <h3>GET</h3>
            <p>So this is the most common one and used to <strong>get data</strong> from <strong>a server</strong>. Say you have an API and you want to get data from it, you call the API with GET. </p>
            <p>For Example this api returns a list of JSON objects <a href="https://jsonplaceholder.typicode.com/todos/" target="_blank">https://jsonplaceholder.typicode.com/todos/</a>. Get requests can be opened directly from a browser. </p>
            <p>This is a <strong>read only method</strong>, which means if you have an api you want to be publicly available, this is the best way to do so.</p>
            <p>This is the <strong>R</strong> in CRUD.</p>
            <h3>POST</h3>
            <p>The POST method is usually used send a request to create a new entry in a your database. </p>
            <p>Though you can send some amount of data to a GET method by appending it to the URL. <strong>POST</strong> let's you transfer huge amounts of data and also allows you to transfer the data in different formats if we wanted to.</p>
            <p>This is the <strong>C</strong> in CRUD.</p>
            <p>Usually we send the data in a body parameter to a POST method, this way your data won't be exposed inline GET methods query parameters.</p>
            <h3>PUT</h3>
            <p>This works similar to a POST request, but is contextual, PUT method is usually used when you want to update a existing item in your server.</p>
            <p>This is the <strong>U</strong> in CRUD.</p>
            <h3>DELETE</h3>
            <p>As the name says, this is used for deleting someting in your Database.</p>
            <p>NOTE: It is not necessary that you always have to use PUT to update and DELETE to delete something from your sever, you can even do so with a POST method, use PUT and DELETE is more readable and hence always better to use them. </p>
            <p>Finally the <strong>D</strong> in CRUD.</p>
            <p>Apart from these there is also PATCH method available, which is similar to PUT method but hardly used.</p>
        </div>
    </>
}