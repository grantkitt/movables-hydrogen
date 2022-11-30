import { Layout } from "../components/Layout.client";
import QueryClient from "../components/query.client";
export default function Query() {
    // function getQueryVariable(variable) {
    //     var query = window.location.search.substring(1);
    //     var vars = query.split("?");
      
    //     for (var i=0;i<vars.length;i++) {
    //       var pair = vars[i].split("=");
    //       if (pair[0] == variable) {
    //         return pair[1];
    //       }
    //     } 
    //     console.log('Query Variable ' + variable + ' not found');
    //   }
    // var myData = getQueryVariable("variable");
    // if(myData){
    //     console.log(myData);//to verify it
    //   }
    return (
        <Layout>
            <QueryClient/>
        </Layout>
    )
}