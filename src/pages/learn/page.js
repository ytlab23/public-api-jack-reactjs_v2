import { Outlet } from "react-router-dom"

export default () =>
{
    return <div>
        <div className='xl:w-[1400px] m-auto'>
            <div className="grid grid-cols-12">
                <div className="col-span-4">
                    <>
                        <h2>About this course.</h2>
                        <p>We will guide you through making your own APIs, using best practices &amp; deploying them. You will learn the basics of REST Apis, making routes, executing asynchronous tasks. This course is free and you designed with begginers in mind and is not overwhelming and intimidating. We believe in <strong>learning by making things.</strong> </p>
                        <p>This is an interactive course, which means every concept we explain will be actually executed showcased with demos, powered by glitch(.)com embeds. You can even edit our examples and play with them to learn better. </p>

                        <p>This course is brought to you by <a href="https://web.archive.org/web/20201024092431/https://twitter.com/mddanishyusuf" target="_blank">Mohd Danish</a> &amp; <a href="https://web.archive.org/web/20201024092431/https://twitter.com/fayazara" target="_blank">Fayaz Ahmed</a>.</p>
                    </>
                </div>
                <div className='col-span-8'>
                    <Outlet />
                </div>
            </div>
        </div>
    </div>
}