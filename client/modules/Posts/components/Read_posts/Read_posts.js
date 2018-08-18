import React from 'react';
import ReadHead from './head/read_head.js'
import ReadBody from './body/read_body.js'
import './read_posts.css'

class ReadPosts extends React.Component {
    render(){	
        return (
            <div className='read-posts'>
                <ReadHead data={this.props.data}/>
                <ReadBody data={this.props.data}/>                
            </div>
        )
    }
}

export default ReadPosts;