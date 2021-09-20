import React from 'react'
import art1 from '../Images/art1.jpg'
import art2 from '../Images/art2.jpg'
import art3 from '../Images/art3.jpg'
import art4 from '../Images/art4.jpg'
import art5 from '../Images/art5.jpg'
import art6 from '../Images/art6.jpg'
import visit from '../Images/visit.jpg'



const artPrint = () => {
    return (

        <div>
            <div className="container artPrint">
                <div className="row">
                    <div className="col xs={6} md={4} ">
                        <h1>Art Prints</h1>
                        <a src="#"><u>Shop all by Dowse</u></a>
                    </div>
                    <div className="col xs={6} md={4} ">
                        <div className="hoverpic">
                        <img className="pic art1" src={art1}></img>
                        <img className="pic art4" src={art4}></img>
                        </div>
                        <p>Yellow Aspect print</p>
                        <p className="tk">From &pound;37.50</p>
                    </div>
                    <div className="col xs={6} md={4} ">
                    <div className="hoverpic">
                        <img className="pic art2" src={art2}></img>
                        <img className="pic art5" src={art5}></img>
                        </div>
                        <p>Yellow Aspect print</p>
                        <p className="tk">From &pound;37.50</p>
                    </div>
                    <div className="col xs={6} md={4}">
                    <div className="hoverpic">
                        <img className="pic art3" src={art3}></img>
                        <img className="pic art6" src={art6}></img>
                        </div>
                        <p>Yellow Aspect print</p>
                        <p className="tk">From &pound;37.50</p>
                    </div>
                </div>

                <div className="container new">
                    <div className="row">
                        <div className="col xs={6} md={4} ">
                            <h1>Sign up to our <br /> newsletter</h1>
                        </div>
                        <div className="col xs={6} md={4} ">
                            <p>Receive special offers and first look at new <br /> products.</p>
                        </div>

                        <div className="col xs={6} md={4} form">
                            <form>
                                <label>
                                    <input type="text" placeholder="Enter Email" />
                                </label>
                                <button type="button" class="btn btn-dark">Subscribe</button>
                            </form>

                        </div>

                    </div>

                </div>

                <div className="container visit">
                    <div className="row">
                        <div className="col-3 xs={6} md={4} ">
                            <h1>Visit Us</h1><br />
                            <p>37 GARDNER STREET <br /> BRIGHTON <br /> Open Every Day 11am - 5pm</p><br /><br /><br />
                            <a href="https://www.google.com/maps" target="_blank"><u>View on Google maps</u></a>
                        </div>
                        <div className="col-9 xs={6} md={4} ">
                            <img src={visit}></img>
                        </div>

                    </div>

                </div>




            </div>

        </div>
    )
}

export default artPrint
