import { gql, useRouteParams, useShopQuery } from "@shopify/hydrogen";
import { Layout } from "../../components/Layout.client";
import ProductDisplay from "../../components/productDisplay.client";

export default function Product() {
    const { handle } = useRouteParams();
    const {data} = useShopQuery({
        query: QUERY, 
        variables: {
            handle: handle
        }
    });
    const productImages = data.productByHandle.images.edges.map(({node}) => {
        return {
            src: node.src,
            alt: node.altText
        }
    })
    const product = {
        id: data.productByHandle.id,
        variantid: data.productByHandle.variants.edges[0].node.id,
        handle: handle,
        title: data.productByHandle.title,
        description: data.productByHandle.description,
        price: data.productByHandle.variants.edges[0].node.priceV2.amount,
        images: productImages,
        stock: data.productByHandle.variants.edges[0].node.quantityAvailable
    }
    // const {datad} = useShopQuery({
    //   query: QUERYD, 
    //   variables: {
    //     handle: 'frontpage'
    //   }
    // });
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
          <ProductDisplay product={product} products={products}/>
        </Layout>
      );
}

const QUERY = gql`
query getProductIdFromHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      description
      variants(first: 1) {
        edges {
          node {
            id
            quantityAvailable
            priceV2 {
              amount
              currencyCode
            }
          }
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
  }
`;

