import React from 'react';
import Card from '../Card/card.js';
import './List_posts.css';

/*display component for cards, loop for post cards*/
class List_posts extends React.Component {
    render(){	
        const data = this.props.data;
        const listCards = data.map((d) =>
            <Card data={d} key={d.user.id.toString()}/>
        )
        return (
            <div className='list-post-case'>
                {listCards}
            </div>
        )
    }
}

export default List_posts;