import { GraphQLClient, gql } from "graphql-request";
import { NextRequest, NextResponse } from "next/server";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;


const comments = async (req: NextRequest, res: NextResponse) => {
   try{
       const data = await req.json();
       const name = data.name;
       const email = data.email;
       const comment = data.comment;
       const slug = data.slug;
       // console.log(res.params);
   
       const graphQLClient = new GraphQLClient(graphqlAPI, {
           headers: {
               authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`
           }
       })
   
       const query = gql `
       mutation{
           createComment(data: {name: "${name}", email: "${email}", comment: "${comment}", post: {connect: { slug: "${slug}" }}}){ id }
       }
       `
       const result = await graphQLClient.request (query, data);
       return NextResponse.json(result);
   } catch(err){
        console.log(err);
   }
}

export {comments as POST, comments as GET}
