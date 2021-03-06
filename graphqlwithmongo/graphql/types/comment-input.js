import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
} from 'graphql';
export default new GraphQLInputObjectType({
    name: "CommentInput",
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        postId: {
            type: new GraphQLNonNull(GraphQLString)
        },
        text: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
});