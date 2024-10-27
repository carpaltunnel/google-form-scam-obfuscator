const axios = require('axios');
const chance = require('chance');
const qs = require('qs');
const Chance = new chance();

let data = qs.stringify({
  'entry.1254089185': Chance.name,
  'entry.37942180': Chance.phone,
  'entry.988342368': Chance.email,
  'entry.871369678': Chance.sentence,
  'entry.640472856': Chance.word,
  'entry.1129095193': Chance.email,
  'entry.1924734218': Chance.word,
  'entry.808198124': Chance.email,
  'fvv': '1',
  'partialResponse': '[null,null,"-7044519208832833368"]',
  'pageHistory': '0',
  'fbzx': '-7044519208832833368',
  'submissionTimestamp': '1729987482802' 
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://docs.google.com/forms/d/e/1FAIpQLSesFQAESA9LJuebdALQmZxWlWqmtoOUDUceffakgR-XvLwChQ/formResponse',
  headers: { 
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7', 
    'accept-language': 'en-US,en;q=0.9', 
    'cache-control': 'max-age=0', 
    'content-type': 'application/x-www-form-urlencoded', 
    'cookie': 'S=spreadsheet_forms=c38IZAsscAjOiIwkeXXNkjkGJjYELv1OtJp8e3159CE; COMPASS=spreadsheet_forms=CjIACWuJV0DIirklNatOWqlh4l1mACPW7a8KXyKUq9mlpj2pkoxG3vtYlLfIV-LOyfQdAxCjova4Bho0AAlriVcNRZQ3P9iT7reI0jVNRDk58PgbO9O5zYpwpPAK5cxWcpZSjO8GENMHyigCKN4LEg==; NID=518=nQpHhFaMspktr23xvjQQU2cW4Mfj1y4pii5pHREZ1W7CQtIWi9VPE29IQGUw_Tpqa3-5AX8OZe_ObHa_Jt5CWktvR9Yfxxax0nI-W5Omuv2CR6PjqhxjMjEaNZ2EYoGX4ofOU-cTDpZWc83ybVqFEJkI6GMVsVWD2yj0UUUEN73iQkIKaP8nQzwDuw', 
    'origin': 'https://docs.google.com', 
    'priority': 'u=0, i', 
    'referer': 'https://docs.google.com/forms/d/e/1FAIpQLSesFQAESA9LJuebdALQmZxWlWqmtoOUDUceffakgR-XvLwChQ/viewform?fbzx=-7044519208832833368', 
    'sec-ch-ua': '"Not;A=Brand";v="24", "Chromium";v="128"', 
    'sec-ch-ua-arch': '"x86"', 
    'sec-ch-ua-bitness': '"64"', 
    'sec-ch-ua-full-version-list': '"Not;A=Brand";v="24.0.0.0", "Chromium";v="128.0.6613.84"', 
    'sec-ch-ua-mobile': '?0', 
    'sec-ch-ua-model': '""', 
    'sec-ch-ua-platform': '"Linux"', 
    'sec-ch-ua-platform-version': '"6.1.0"', 
    'sec-ch-ua-wow64': '?0', 
    'sec-fetch-dest': 'document', 
    'sec-fetch-mode': 'navigate', 
    'sec-fetch-site': 'same-origin', 
    'sec-fetch-user': '?1', 
    'upgrade-insecure-requests': '1', 
    'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', 
    'x-client-data': 'CNfsygE='
  },
  data : data
};






axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
