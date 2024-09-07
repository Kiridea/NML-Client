import './About.css'

function About() {
    return(
        <section className="about">
            <div className="about-info">
                <h1>About !MissingLink</h1>
                    <p>!MissingLink is your ultimate solution for organizing and managing all your social and web links in one place. 
                Whether you're a content creator, business owner, or everyday user, !MissingLink offers a streamlined platform 
                to collect, save, and access all your important links effortlessly.</p>
                    <p>Say goodbye to scattered profiles and bookmarks. With !MissingLink, you can create a personalized, shareable hub 
                that neatly displays your social media accounts, websites, and other web pages. Perfect for building your digital 
                identity, the app simplifies your online presence by allowing you to organize and update your links as you grow.</p>
                    <p>Designed with ease of use and flexibility in mind, !MissingLink ensures that your online connections are always a 
                click away, empowering you to manage your web footprint without hassle.</p>

                <h5>Why is it called !MissingLink?</h5>
                    <p>The name !MissingLink is a clever play on words, blending coding logic with everyday language. In many programming 
                languages, the symbol ! is used as a logical operator called NOT, which inverts the value of whatever follows it. 
                For example, if something is true, !true would mean false, and vice versa. This is where the play on words begins.</p>
                    <p>The term "missing link" is commonly used to describe something that is absent or incomplete, like a crucial piece
                of information or connection. In everyday context, a missing link refers to something that ties everything together, 
                but is not yet found.</p>
                    <p>By putting these two concepts together —! (NOT) and "Missing Link"— !MissingLink essentially means "Not a Missing Link", 
                or the opposite of something absent. In the context of the app, it signifies that your links, whether they be 
                social media profiles, webpages, or other URLs, are no longer lost or scattered. Instead, they are collected in 
                one place, tying all your digital connections together.</p>
                    <p>Thus, !MissingLink embodies the idea of bridging the gap, completing any missing information, while also 
                incorporating the technical logic of making sure your links are always available and easy to access. 
                It essentially turns the concept of a "missing link" upside down.</p>

                <h5>Why did I call it this way and not just FoundLink?</h5>
                    <p>Well, that's simply because I personally like word plays that combine and connect different kinds of fields of 
                knowledge.</p>
            </div>
            <div className="kofi">
                <h6>Would you like to support the developer behind !MissingLink?</h6>
                <a className="kofi-btn" target="_blank" href="https://ko-fi.com/kiridea">Buy me a coffee!</a>
            </div>
        </section>
    )
}

export default About