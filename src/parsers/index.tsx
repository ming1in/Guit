import axios from 'axios'
import { Zillow } from '../constants/index'


export function LinkParser(link: string) {
  var homeDetails
  var zpid
  const split = link.split('/')
    
  split.forEach((el: string, idx) => {
    if (el === 'homedetails') {
      homeDetails = split[idx + 1]
    }

    if (el.split('_')[1] === 'zpid') {
      zpid = el.split('_')[0]
    }
  })
  
  // fetch(`http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=${Zillow.zwsid}&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA`, {
  //   mode: 'no-cors'
  // })
  //   .then((response) => console.log(response))
  //   .catch((err) => console.log(err))
  

  // axios.get('http://www.zillow.com/webservice/GetSearchResults.htm', {
  //   params: {
  //     'zws-id': Zillow.zwsid,
  //     'address': '2114 Bigelow Ave',
  //     'citystatezip': 'Seattle, WA'
  //   },
  //   headers: {
  //     'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
  //     'accept-encoding': 'gzip, deflate, br',
  //     'accept-language': 'en-US,en;q=0.9',
  //     'sec-fetch-mode': 'navigate',
  //     'sec-fetch-site': 'none',
  //     'upgrade-insecure-requests': '1'
  //   }
  // })
  //   .then((response) => console.log(response))
  //   .catch((err) => console.log(err))


  const request = new XMLHttpRequest()

  request.open('GET', `http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=${Zillow.zwsid}&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA`, true)


  request.setRequestHeader('Access-Control-Allow-Origin', '*')

  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
      
      console.log(request.responseText)
    }
  };

  request.send()
  
}

