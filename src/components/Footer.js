import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white text-white  pb-4 mt-5 footer">
            <div className="container text-center text-mf-left">
                <div className="row text-left text-mf-left text-black">
                    <div className="col-md-3 col-lg-3 col-xl-3 mt-3 first">
                        <p>
                            Receive special offers and first look at new products.
                        </p>
                        <form>
                                <label>
                                    <input type="text" placeholder="Enter Email" />
                                </label> <br/><br/>
                                <button type="button" class="btn btn-dark">Subscribe</button>
                            </form>
                        

                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 ">
                    
                        <p >
                        D O W S E  Studio &amp; Shop<br/> 37 Gardner Street <br/>Brighton<br/> BN1 1UN <br/><br/>TELEPHONE: 01273 253933<br/><br/> hello@dowsedesign.co.uk
                        </p>

                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <p>
                            <a href="#" className="text-black" style={{ textDecoration: 'none' }}>MAIN</a>
                        </p>
                        <p>
                            <a href="#" className="text-black" style={{ textDecoration: 'none' }} >ART PRINTS</a>
                        </p>
                        <p>
                            <a href="#" className="text-black" style={{ textDecoration: 'none' }}>GIFTS FOR UNDER <br/> &pound;20</a>
                        </p>
                        <p>
                            <a href="#" className="text-black" style={{ textDecoration: 'none' }}>HOMEWARE</a>
                        </p>
                        <p>
                            <a href="#" className="text-black" style={{ textDecoration: 'none' }}>JEWELLERY</a>
                        </p>
                        <p>
                            <a href="#" className="text-black" style={{ textDecoration: 'none' }}>PAPER GOODS</a>
                        </p>
                        <p>
                            <a href="#" className="text-black" style={{ textDecoration: 'none' }}>ACCESSORIES</a>
                        </p>
                        <p>
                            <a href="#" className="text-black" style={{ textDecoration: 'none' }}>INFO</a>
                        </p>
                        <p>
                            <a href="#" className="text-black" style={{ textDecoration: 'none' }}>BLOG</a>
                        </p>
                        <p>
                            <a href="#" className="text-black" style={{ textDecoration: 'none' }}>ABOUT US</a>
                        </p>

                    </div >
                   

                </div>

            </div>

        </footer>

    )
}

export default Footer
