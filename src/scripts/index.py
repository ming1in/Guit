import requests
from fake_useragent import UserAgent
from xml.etree import ElementTree

def fetch_zillow_listings():
  response = requests.get('http://www.zillow.com/webservice/GetSearchResults.htm',
    params={
      'zws-id': 'X1-ZWz1hkkltuo8wb_8tgid',
      'address': "72 Park Ave APT 6D",
      'citystatezip': "Hoboken NJ 07030"
    },
    headers={
      'user-agent': 'Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1667.0 Safari/537.36',
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'none',
      'upgrade-insecure-requests': '1'
    }
  )


  if (response.status_code != 200):
    print('failed to obtain listings from zillow:')
    print(response.content)
    sys.exit(2)
  else:
    print(response.content)
    tree = ElementTree.fromstring(response.content)

    print(tree)

    with open('/home/ming/Guit/src/scripts/data.xml', 'w') as f:
      f.write(str(response.content))


  return  

fetch_zillow_listings()
