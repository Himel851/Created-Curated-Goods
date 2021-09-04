import React from 'react'
import pic1 from '../Images/1.jpg'
import pic2 from '../Images/2.jpg'
import pic3 from '../Images/3.png'
import pic4 from '../Images/4.jpg'
import pic5 from '../Images/5.jpg'
import pic6 from '../Images/6.jpg'
import pic7 from '../Images/7.jpg'
import pic8 from '../Images/8.jpg'
import send from '../Images/sendCard.jpg'
import studio from '../Images/Studio.jpg'


const Body = () => {
    return (

        <div>
            <div className="container">
                <div className="row">
                    <div className="col xs={6} md={4} pic1">
                        <img className="img-fluid"  src={pic1}></img>
                        <div className="pic1-text">ART PRINT</div>
                    </div>
                    <div className="col xs={6} md={4} pic2">
                        <img src={pic2}></img>
                        <div className="pic2-text">HOMEWARES</div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col xs={6} md={4} pic3">
                        <img src={pic3}></img>
                        <div className="pic3-text">Ceramics &amp; Glass</div>
                    </div>
                    <div className="col xs={6} md={4} pic4">
                        <img src={pic4}></img>
                        <div className="pic4-text">Jewellery</div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col xs={6} md={4} pic5">
                        <img src={pic5}></img>
                        <div className="pic5-text">Accessories</div>
                    </div>
                    <div className="col xs={6} md={4} pic6">
                        <img src={pic6}></img>
                        <div className="pic6-text">Textile</div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col xs={6} md={4} pic7">
                        <img src={pic7}></img>
                        <div className="pic7-text">Fragrance &amp; Grooming</div>
                    </div>
                    <div className="col xs={6} md={4} pic8">
                        <img src={pic8}></img>
                        <div className="pic8-text">Paper Goods</div>
                    </div>
                </div>
            </div>

            <div className="container">
                
                    <div className="send" xs={6} md={4}>
                        <img className="img-fluid" src={send}></img>
                        <div className="send-text ">

                            <h3>Send a Card</h3>
                            <p>
                            Choose a greeting card, tell us what message you'd like <br/> written in it, we'll pop a stamp on it and send it for you.
                            </p>
                            <a src="#"><u>Shop Now</u></a>

                        </div>
                    </div>
            </div>

            <div className="container">
                
                    <div className="studio" xs={6} md={4}>
                        <img className="img-fluid" src={studio}></img>
                        <div className="studio-text ">

                            <h3 >Studio Arhoj</h3>
                            <a src="#"><u>Shop Now</u></a>

                        </div>
                    </div>
            </div>



            
            

            </div>
            





            );
}

            export default Body
