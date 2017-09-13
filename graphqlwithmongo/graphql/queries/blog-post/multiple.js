import {GraphQLList} from 'graphql'

import blogPostType from '../../types/blog-post';
import BlogPostModel from '../../../models/blog-post';

export default{
    type:new GraphQLList(blogPostType),
    args:{},
    resolve(root,params,options){
        //console.log(options.fieldASTs[0]);
        //const projection =
        //getProjection(options.fieldASTs[0]);
        return BlogPostModel
        .find({})
        .exec();
    }
};