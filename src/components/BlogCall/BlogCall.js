import React, { Component } from "react";
import Axios from "axios";
import MediumBlog from "../MediumBlog/index";
import {
  BlogCallContainer,
  BlogCallWrapper,
  BlogCallHeader,
} from "./BlogCallElements";



export class BlogCall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        ptitle: "",
        name: "",
        avtar: "",
        profileurl: "",
      },
      item: [],
      isloading: true,
      error: null,
    };
  }
  mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cdbutle";

  componentDidMount() {
    Axios.get(this.mediumURL)

      .then((data) => {
        // console.log(data.data)
        const avatar = data.data.feed.image;
        const profileLink = data.data.feed.link;
        const res = data.data.items; //This is an array with the content. No feed, no info about author etc..
        const posts = res.filter((item) => item.categories.length >= 0);

        const title = data.data.feed.title;

        this.setState(
          (pre) => ({
            profile: {
              ...pre.profile,
              ptitle: title,
              profileurl: profileLink,
              avtar: avatar,
            },
            item: posts,
            isloading: false,
          }),
          () => {
            console.log(this.state);
          }
        );
        console.log(data, res);
        console.log(res)
      })
      ;
  }
  render() {
   
    return (
      <div id="Blog">
        <BlogCallContainer>
          <br></br>
          <br></br>

          <br></br>
          <BlogCallHeader>
            <h1>Blog Posts</h1>
            <br></br>
          </BlogCallHeader>
          <BlogCallWrapper>
            {this.state.item.map((post, index) => (
              <MediumBlog
                key={index}
                {...post}
                {...this.state.profile}
                {...index}
              />
            ))}
          </BlogCallWrapper>
        </BlogCallContainer>
      </div>
    );
  }
}

export default BlogCall;
