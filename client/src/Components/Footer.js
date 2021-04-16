import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div className = "footer">

                <h2 className = "contact_developer">Contact developer</h2>
                <a href ="https://twitter.com/_john_ngala"><img src = "images/twitter.png"  alt = "Twitter" className = "social-icons"/></a>
                <a href ="https://www.instagram.com/_john_ng.a.la/"><img src = "images/instagram.png" alt = "Instagram" className = "social-icons" /></a>
                <a href ="https://wa.me/254722882815"><img src = "images/whatsapp.png" alt = "Whatsapp" className = "social-icons" /></a>
                <h3 className = "developer">@john ngala 2021</h3>
            </div>
        )
    }
}

export default Footer


