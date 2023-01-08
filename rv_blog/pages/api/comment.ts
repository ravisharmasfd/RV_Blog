// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI:string = process.env.NEXT_API_URL as string
type Data = {
  msg: string
}

export default async function comment(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) 
{
  try {
    const graphQLClient: GraphQLClient = new GraphQLClient((graphqlAPI), {
      headers: {
        authorization: `Bearer ${process.env.NEXT_API_TOKEN}`,
      },
    });
    const query:string = gql`
      mutation CreateComment($name: String!, $email: String!, $message: String!, $postSlug: String!) {
        createComment(data: {name: $name, email: $email, message: $message,postSlug:$postSlug }){
          name
          email
          message
          postSlug
        }
      }
    `;
  
    const result = await graphQLClient.request(query, {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      postSlug: req.body.postSlug,
    })
    res.status(200).json({msg:"Task complete"})
  } catch (error) {
    console.log("🚀 ~ file: comment.ts:35 ~ error", error)
    
  }


}
