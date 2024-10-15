import Learn6 from 'assets/images/learn/6.png'
import Learn7 from 'assets/images/learn/7.png'
import Learn8 from 'assets/images/learn/8.png'
// 
export default () =>
{
    return <>
        <h2>HTTP status codes</h2>
        <p>So sometimes, you might want to send something else apart from data, like the status of your response.</p>

        <p>Say the response has failed and you want to send back why it failed, so the request was to get a user named XYZ and our server searched and did not find a user named XYZ, the api will send some response that user XYZ was not found and you can attach a HTTP status code 404, which means the something was not found. There are multiple others contexts which you can use. You can refer the image below which has a list of all the HTTP status codes.</p>

        <p>Let's see how we can send HTTP status codes in express js, there are two ways, let's see both of them.</p>

        <p>Using the send() method</p>

        <img src={Learn6} />

        <p>Using the sendStatus() method</p>

        <img src={Learn7} />

        <p>The sendStatus() method is usually used less, because it is just used to send the status code and no additional data with it.</p>

        <p>Another way to send the status code, which also happens to be my favourite, this is just chaining methods, so your code is shorter.</p>

        <img src={Learn8} />

        <p>Now you may be thinking, this is just a fancy thing of attaching some extra data to your API responses, well they do a lot more than just informing. Imagine that you are accepting/consuming a api and without a error code, you might have to add manual checks where the response was success of failure.</p>

        <p>An example showcasing why you need http status codes.</p>
    </>
}