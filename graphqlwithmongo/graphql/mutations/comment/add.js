import {
    GraphQLNonNull,
    GraphQLBoolean
} from 'graphql';

import commentType from '../../types/comment-input';
import CommentModel from '../../../models/comment';

export default{
    type:GraphQLBoolean,
    args:{
        data:{
            name:'data',
            type:new GraphQLNonNull(commentType)
        }
    },
    async resolve(root,params,options){
        const commentModel = new CommentModel(params.data);
        const newComment =await commentModel.save();
        if(!newComment){
            throw new Error('Error adding new Comment');
        }
        return true;
    }
}
