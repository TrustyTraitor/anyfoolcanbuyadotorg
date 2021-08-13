import CustomJumbotron from "../components/CustomJumbotron";
import '../Styles/Home.scss';

function Home() {

    return (
        <div className="Home">
            <div className="container">
                <CustomJumbotron header="So Whats the problem?">
                    <p>
                        Over the last couple years it has become increasingly apparent that many people don't know how to find reliable sources.
                        Sometimes getting information wrong can be a litte embarassing, but sometimes it can result in people getting hurt.
                        We were all told as kids to not trust everything we read on the internet and that is true now more than ever.
                        The internet is an amazing resource to use when trying to learn but there are some guidelines you should use to verify a source.
                    </p>
                </CustomJumbotron>
                <CustomJumbotron header="Whats the solution?">
                    <h5> Lets first start by clearning some misconceptions. </h5>
                    <p className="qa">Q: Are '.org' websites more trustworthy than .com or .net?</p>
                    <p><span className="qa">A:</span> No, absoluteley not. This website is proof of that. I first bought this webdomain when I was 17 and it costs me just $12 a year.
                    .com .net and .org are all examples of what are known as "<a href="https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains" target="_blank" rel="noreferrer">Top Level Domains.</a>" 
                    There are hundreds of TLD and most of them are unrestricted to who can use them. Some examples of restricted TLD's are .gov and .edu.
                    Websites such as <a rel="noreferrer" href="https://domains.google.com/" target="_blank">
                    Google Domains</a> makes it very easy to buy a web domain. This is how I purchased anyfoolcanbuya.org.
                    </p>
                
                    <p className="qa">Q: Is .com .net or any other domain trustworthy?</p>
                    <p><span className="qa">A:</span> Many people make the mistake of believing 
                    .com and .net is inhrently not trustworthy, this is not necessarily true. 
                    Of course there are plenty of unreliable .com and .net but we will be getting 
                    into how to know if a source is trustworthy.</p>
                
                    <p className="qa">Q: Is wikipedia reliable?</p>
                    <p><span className="qa">A:</span> No, probably not. Wikipedia is a great starting point but it should never be sited as a source. 
                    The best way to use Wikipedia is to go to the sources at the bottom of the page. The issue with Wikipedia is that it is 
                    another layer removed from the source. This will introduce bias into the writing intentional or not. You also know nothing about 
                    who edited that page, and Wikipedia pages are notorious for being edited by internet trolls. A great way to think about Wikipedia 
                    is like a game of telephone. Each person passes along what they think the other person said but it will be distorted and lose accuracy along the way.</p>
                
                    <p className="qa">Q: Does having a degree automatically make someone right?</p>
                    <p><span className="qa">A:</span> No, it does not. There are many people who have degrees who are still incredibly wrong.
                    When verifying information from any source, you should always find multiple sources that agree. It is also important to 
                    remember that there can be multiple academics with similar incorrect views. It is best to find what the consensus is among the 
                    larger scientific community and find out why the smaller group holds an opposing view.</p>

                    <hr/>
                
                    <h5>So, we've covered some common misconceptions, now onto what you should be doing. </h5>
                    <p className="qa">Always find primary sources.</p>
                    <p>
                        Like mentioned in the Wikipedia question, every degree of seperation information 
                        has from its source will introduce bias. The best information you can get is from the source.
                        Primary information should have the least amount of bias because it has not been edited 
                        by dozens of people unaffiliated with the original information.
                    </p>
                    <p className="qa">Always question an authors biases.</p>
                    <p>
                        While a primary source is always best, everyone has bias. Most research papers 
                        will include a section about the researchers biases and what steps they took to 
                        remove them from the research. This is an invaluable tool when finding a reliable source.
                    </p>

                    <p className="qa">Find papers through scholarly databases and journals</p>
                    <p>A great place to do research is sites such as <a rel="noreferrer" href="https://scholar.google.com" target="_blank">Google Scholar</a> (more below) 
                    These sites have thousands of articles or links to other accredited journals. Most of these papers on these sites will be peer reviewed but still 
                    be cautious as some non-peer reviewed papers can slip through the cracks.
                     Many research journals do require payment to access but most colleges will give their students access.
                    If you do not have access to an article that is behind a paywall, email the author 
                    of the paper and ask if they could send it to you. Most authors do not get paid for each sale of their 
                    research so they will be more than happy to pass it along for free.</p>
                </CustomJumbotron>
                <CustomJumbotron header="Scholarly databases and Journals">

                </CustomJumbotron>
            </div>
        </div>
    );
}




export default Home;