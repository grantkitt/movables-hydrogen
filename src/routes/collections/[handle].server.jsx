import { gql, useRouteParams, useShopQuery } from "@shopify/hydrogen";
import { Layout } from "../../components/Layout.client";
import ItemViewer from "../../components/ItemViewer.client";

export default function Collection() {
    const { handle } = useRouteParams();
    const {data} = useShopQuery({
        query: QUERY, 
        variables: {
            handle: handle
        }
    });
    const collectionName = data.collectionByHandle.title;
    const products = data.collectionByHandle.products.edges.map(({node}) => {
        if (node.totalInventory <= 0 ) {
          return false;
        }
        return {
          title: node.title,
          imageSrc: node.images.edges[0].node.src,
          imageAlt: node.title,
          price: parseInt(node.variants.edges[0].node.priceV2.amount, 0),
          slug: node.handle,
        }
      }).filter(Boolean)
    return (
        <Layout>
            <ItemViewer name={collectionName} products={products} search={true}/>
        </Layout>
    );
}
// ccs: chairs-couches-seating

// const QUERY = gql`
// query {
//     collections(first: 10) {
//       edges {
//         node {
//           id
//           title
//           handle
//         }
//       }
//     }
//   }
//   `

const QUERY = gql`
query getCollectionByHandle($handle: String!) {
    collectionByHandle(handle: $handle) {
        title
        products(first: 100) {
            edges {
            node {
              handle
              title
              totalInventory
              variants(first: 1) {
                edges {
                    node {
                        priceV2{
                            amount
                        }
                    }
                }
              }
              images(first: 1) {
                edges {
                  node {
                    src
                    altText
                  }
                }
              }
            }
          }
        }
    }
  }`