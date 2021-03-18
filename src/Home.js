import React from 'react';
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
             <div className="home">
            <div className="home__container">
                <img className="home__image"
                 src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
                />
                <div className="home__row">
                    <Product
                    id ="1"
                      title="The eyes on nature"    
                      price={19.99}
                       image="images/drone.jpg" 
                        rating={5}/>
                    <Product 
                    id ="2"
                    title= "Sony headphone for summer" 
                    price= {200}
                     image= "images/headphone.jpg"
                      rating={4}/>
                    
                    
                    {/*Product*/}
                    {/*Product*/}
                </div>
                <div className="home__row">
                    <Product 
                    id ="3"
                    title="Michael jorden summer vibe" 
                    price={180}
                     image="images/shoes.jpg" 
                      rating={5}/>
                    <Product 
                    id ="4"
                    title="Rayban sunglass for all" 
                    price={80}
                     image="images/sunglass.jpg" 
                      rating={4}/>
                    <Product 
                    id ="5"
                    title="Vinta laptop carry bag" 
                    price={70}
                     image="images/bag.jpg" 
                      rating={4}/>
                    {/*Product*/}
                    {/*Product*/}
                    {/*Product*/}
                </div>
                <div className="home__row">
                    <Product
                    id ="6"
                    title=" Apple smart watch" 
                    price={500}
                     image="images/hand watch.jpg" 
                      rating={5}/>
                    {/*Product*/}
                </div>
            </div>
        </div>
    )
}

export default Home
