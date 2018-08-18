/**All components used as scenecs by the router location */
import React from 'react';
import Posts from './modules/Posts/components/List_posts/List_posts.js';
import Article from './modules/Posts/components/Read_posts/Read_posts.js';

const scenes = {
    FEEDS: <Posts />,
    TEST_ARTICLE: <Article />
}


export default scenes;