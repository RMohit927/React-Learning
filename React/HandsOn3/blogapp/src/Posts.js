import React from "react";
import Post from './Post';

class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: []
        };
    }
    loadPosts = async () => {
        // console.log("loadPosts method calls");
        const url = "https://jsonplaceholder.typicode.com/posts/";
        const response = await fetch(url);
        const json = await response.json(); 
        // console.log(json);
        const postMock = [];
        json.forEach(element => {
            postMock.push(new Post(element.id, element.title, element.body));
        });
        console.log(postMock);
        // const filtered_post = [
        // {json.map((post) => {
        //     new Post(post)
        // })}
        // ]

        this.setState({posts: postMock});
    }
    componentDidMount(){
        // console.log("Component Did Mount Call");
        if(this.state.posts.length === 0){
            // console.log('mount it!');
            this.loadPosts();
        }
        
        // console.log(posts);
        // this.setState({posts: posts});
    }
    render(){
        // console.log("Render lifecycle");
        return (
            <>
                {this.state.posts.map((Post) => (
                    <article className="blog" key={Post.id}>
                        <div key={Post.id} className="postContainer">
                            <div className="postId">
                                <span>{Post.id}</span>
                            </div>
                            <div className="postInfo">
                                <div className="postTitle"><b>Title:</b> {Post.title}</div>
                                <div className="postBody"><b>Body:</b> {Post.body}</div>
                            </div>
                        </div>
                    </article>
                ))}
            </>
        );
    }
    componentDidCatch(error, info) {
        console.log(error);
    }
}

export default Posts;