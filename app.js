const sendGetRequest = async () => {
try {
    var myHeaders = new Headers({"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NzQ2NzAyNzksInRva2VuIjoidjEwWVwvaWZrSnJXOXVCNElIM2ZaZWZwK0l6UjF5Qk5iMjd4RlR5V25xcGNYb013Z1wvZWRmVWR0bVdZZ0doTnJUbUlDcFVxMUdsS2pCalVNSk5LV3pqU3FIWkZaRGd1MTZwenAyS1doV1wvMldaanBSVXNsaVp3NUMwcHBzWG9YTkVrc2VtbHJWYVhFVUJ0VHlCWXBjWGNVMHNIUW9OdzNMa2VSN2xsdVBlbGI4VjhMazRpSkNMa2ZDY2x3QVkzb2VcL0VKTThwc1ZZRExHUWgrdWtVdnBDTTZGZ2ZjQWdRamlSbG01UHNKZExrNnVUWjBJNVpPaGZQNlg3VTU5WUdhRSt6c0FQdzBkY0txUmFVbVJ6TzNUV2VBPT0iLCJoaWRlWmVyb1N0YXR1cyI6dHJ1ZX0.rHsJW-R7tdAhFrZPSVvRx7nWgTUU3ERhBV3bLPpVHps",
                                "Origin": "https://alltesting.vercel.app",
                                 "Host": "https://demo.btrlexchange.com",
                                });


var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://demo.btrlexchange.com/api/global", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
} catch (error) {
    error && console.log("error by client=>" , error)
}
  };
