import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import blogPostType from '../../types/blog-post';
import getProjection from '../../get-projection';
import BlogPostModel from '../../../models/blog-post';

export default {
    type: blogPostType,
    args: {
        _id: {
            name: "_id",
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    async resolve(root, params, options) {
        const projection = getProjection(options.fieldASTs[0]);
        const removeBlogPost = await BlogPostModel.findByIdAndRemove(params._id,
            { select: projection })
            .exec();
        if (!removeBlogPost) {
            throw new Error("Error Removing Blog post");
        }
        return removeBlogPost;
    }
}