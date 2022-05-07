import React from "react";

class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: []
        };
    }
    loadPosts = async () => {
        console.log("loadPosts method calls");
        const url = "https://jsonplaceholder.typicode.com/posts/";
        const response = await fetch(url);
        const json = await response.json(); 
        console.log(json);
        this.setState({posts: json});
    }
    componentDidMount(){
        // console.log("Component Did Mount Call");
        if(this.state.posts.length === 0){
            console.log('mount it!');
            this.loadPosts();
        }
        
        // console.log(posts);
        // this.setState({posts: posts});
    }
    render(){
        console.log("Render lifecycle");
        return (
            <>
                {this.state.posts.map((post) => (
                    <article className="blog" key={post.id}>
                        <div key={post.id} className="postContainer">
                            <div className="postId">
                                <span>{post.id}</span>
                            </div>
                            <div className="postInfo">
                                <div className="postTitle"><b>Title:</b> {post.title}</div>
                                <div className="postBody"><b>Body:</b> {post.body}</div>
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