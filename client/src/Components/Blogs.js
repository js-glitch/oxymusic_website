import React, { Component } from 'react'

export class Blogs extends Component {
    render() {
        return (
            <div>
                <img src = "images/blogs.jpg" alt = "Blogs" id = "blogs_image" />
                <h1 id = "blogs_heading">Blogs</h1>
                <p id ="about_blogs">
                    In case you were wondering 'but why Oxymusic?' this is for you.
                    For a long time now,music players
                    have been largely over-engineered with a lot of features we don't need and
                    lacking those that we wish to have.
                    Oxymusic distills down to only the most essential features with more to be
                    added on  users' request and/or necessity dictating.That's it.That's all there is
                    to it.
                </p>
            </div>
        )
    }
}

export default Blogs
