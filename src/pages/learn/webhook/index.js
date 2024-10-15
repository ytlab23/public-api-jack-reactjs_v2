export default () =>
{
    return <>
    
        <h2>APIs vs Webhooks</h2>
        <p>So we got a brief idea of what an api is in the previous chapter, we even made one and send data and we sent query parameters.</p>

        <p>Which means you might have a brief idea about what an API does, used to request or send data over the internet.</p>

        <p>Now we have something else called Webhooks as well. I will have to explain this with a realtime example I faced. We have this payment provider called Razorpy in India, they are very similar to Stripe.</p>

        <p>So I had a request from a client that whenever someone paid on their ecommerce site, they wanted to send a SMS & Email to their internal teams. Razorpay does provide a api to get transactions on your account, So your initial thought might be, I will call their API and send the email and sms to their APIs. This is good when you voluntarily request Razorpay's API endpoint get the transactions and do whatever you want with the data.</p>

        <p>There are several issues with this, like you need to keep checking the api, you dont know what frequency you need to check api on & it's simply not feasible.</p>

        <p>So Introduce webhooks, webhooks are kind of reverse apis (not really though). What webhooks do are they call your api and pass the data instead of you calling them and checking for data, and the best part is they call your data only when they have to as in only when a transaction happened in the above example.</p>

        <p>And this is a very common use case, which could come in very handy and I am sure you will use them somrtime in the future</p>
    
    </>
}