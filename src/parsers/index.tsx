import rp from 'request-promise'
import cheerio from 'cheerio'
// import { RequestError } from 'request-promise/errors';

// const getAddress = (url: string) => {
//   const splitUrl = url.split('/')[4]
//   const splitAddress = splitUrl.split('-')
//   const splitAddressLength = splitAddress.length

//   return {
//     state: splitAddress[splitAddressLength - 2],
//     zip: splitAddress[splitAddressLength - 1],
//     city: splitAddress[splitAddressLength - 3],
//     address: splitAddress.slice(0, splitAddressLength - 3).join('-')
//   }
// }

// interface Listing{
//   url: string,
//   price: number,
//   bedroom: number,
//   sqft: number,
//   state: string,
//   zip: number,
//   city: string,
//   address: string
// }

export const LinkParser = (url: string) => {

  const params = {
    uri: url,
    transform: function (body: any) {
      return cheerio.load(body);
    }
  }

  rp(params).then((html) => {
    console.log(html)
  }).catch((error: any) =>{
    console.log(error)
  })



      // var home = {
      //   url: url,
      //   price: $('h4.Text-c11n-8-18-0__aiai24-0.StyledHeading-c11n-8-18-0__ktujwe-0.gcaUyc.sc-qZtCU.kijwKF', html)[0].children[0].children[0].children[0].data,
      //   bedroom: $('h3.ds-bed-bath-living-area-container', html)[0].children[0].children[0].children[0].data,
      //   bathroom: $('h3.ds-bed-bath-living-area-container', html)[0].children[2].children[0].children[0].children[0].data,
      //   sqft: $('h3.ds-bed-bath-living-area-container', html)[0].children[4].children[0].children[0].data,
      //   ...getAddress(url)
      // }


}
