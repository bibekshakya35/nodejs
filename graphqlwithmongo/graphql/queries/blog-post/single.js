import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} from 'graphql';
import {Types} from 'mongoose';

import blogPostType from '../../types/blog-post';

import BlogPostModel from '../../../models/blog-post';

export default{
    type: blogPostType,
    args:{
        id:{
            name:'id',
            type:new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params,options){
        return BlogPostModel
        .findById(params.id)
        .exec();
    }
}

