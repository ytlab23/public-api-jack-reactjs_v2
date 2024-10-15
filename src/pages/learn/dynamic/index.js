import Learn9 from 'assets/images/learn/9.png'
// 
export default () =>
{
    return <>
        <h2>Dynamic Routes</h2>
        <p>Okay in our previous exercise we learned that we can define routes, but we hardcoded the endpoints like /users and what if we wanted something dynamic on these route endpoints, something like /user/321 321 being the user id. This is exactly what we will do in this chapter.</p>

        <h2>Route Parameters</h2>
        <p>So express api routes have this concept of Route Parameters, where we can send dynamic data inside the url and capture in our code and use it</p>

        <p>321 is our dynamic data, it could be anything and our code needs to use this.</p>

        <p>So let's see a real example of how we will use this.</p>

        <img src={Learn9} />

        <p>So our req.params will be holding the value of user parameter and we can access it like any javascript object req.params.user</p>
    
    </>
}