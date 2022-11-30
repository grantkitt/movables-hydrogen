import ItemViewer from "../components/ItemViewer.client";
import {useShopQuery, gql, Link} from '@shopify/hydrogen';
import { Layout } from "../components/Layout.client";

export default function Catalog() {
    const {data} = useShopQuery({
        query: QUERY, 
        variables: {
          handle: 'frontpage'
        }
      });
      const products = data.products.edges.map(({node}) => {
        if (node.totalInventory <= 0 ) {
          return false;
        }
        return {
          id: node.id,
          title: node.title,
          description: node.description,
          imageSrc: node.images.edges[0].node.src,
          imageAlt: node.title,
          price: node.variants.edges[0].node.priceV2.amount,
          slug: node.handle,
        }
      }).filter(Boolean)
    return (
      <Layout>
        <ItemViewer name={'Catalog'} products={products} search={true}/>
      </Layout>
    )
}

const QUERY = gql`
query getProductList {
  products(sortKey: PRICE, first: 100, reverse: true) {
    edges {
      node {
        id
        handle
        description
        title
        totalInventory
        variants(first: 5) {
          edges {
            node {
              id
              title
              quantityAvailable
              priceV2 {
                amount
                currencyCode
              }
            }
          }
        }
        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 6) {
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
}`;