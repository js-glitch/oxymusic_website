import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className = "container">
                <div id = "content">
                        <img src="images/hero_image.jpg" alt="hero" className ="hero" /> 
                        <h1 id = "oxymusic">Oxymusic</h1>
                        <p className = "about_oxymusic">
                            The music player app of the future.I'd tell you what the future is like,
                            but i'll let you experience it instead.
               
                        </p>

                        <h1 id = "features">Features</h1>
                        <h3 className = "features_heading">Clean,Simple and Neat Design</h3>
                        <p className = "features_text">
                            Oxymusic's design philosophy is to have to a simple and clean user interface that is 
                            accessible and self-explanatory.You don't need to wonder what this button does,what this
                            tab is for or after I click this then what.Just a simple,clean and neat design.
                        </p>

                        <h3 className = "features_heading">No Ads</h3>
                        <p className = "features_text">
                            Enjoy your music seamlessly.No more ads that 
                            you can't figure out how to dismiss or that make your device freeze  popping in every few minutes.
                        </p>
                        <h3 className = "features_heading">Easy to Use</h3>
                        <p className = "features_text">
                            Oxymusic has been designed with user-experience in mind.The intricacy
                            in the engineering is wrapped up in a painless design  making 
                            it world class and fun to use.
          
                        </p>
                        <a href = "https://play.google.com/store/apps/details?id=com.oxymusic.myaudioplayer" className = "download-link">  
                        <button class = "download_button">Download</button>
                        </a>
                </div>
            </div>
        )
    }
}
