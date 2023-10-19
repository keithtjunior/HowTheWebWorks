/*
In your own terms, define the following terms:

- What is HTTP?

    Hypertext Transfer Protocol is a protocol used for exchanging information over the internet.

- What is a URL?

    A Uniform Resource Locator is a unique name / reference name used to find a website or resource on the net.

- What is DNS?

    Domain Name System is used to map a host name to a specific IP address.

- What is a query string?

    A query string is used at the end of a URL to send or request additional information.

- What are two HTTP verbs and how are they different?

    The GET method is used to retrieve data/information, and the POST method is usually used to send data/information that changes or updates what's on the intended server. 

- What is an HTTP request?

    A request from a client to access data/information on a server using HTTP.  

- What is an HTTP response?

    A response from a server, after a request is made from the client, that uses status codes to indicate if a request was successful or not.   

- What is an HTTP header? Give a couple examples of request and response headers you have seen.

    A HTTP header is a list of value pairs that contian required information and additional metadata sent with a request or response. 

    Ex.

    req
    Request URL: https://www.ign.com/
    Request Method: GET
    Status Code: 200 OK
    Remote Address: 151.101.129.135:443
    Referrer Policy: unsafe-url

    res
    Access-Control-Allow-Methods: GET, POST, PUT
    Access-Control-Allow-Origin: *
    Age: 25
    Cache-Control: max-age=10
    Content-Encoding: gzip
    Content-Length: 65612
    Content-Type: text/html; charset=utf-8
    Date: Thu, 19 Oct 2023 19:10:40 GMT
    Strict-Transport-Security:max-age=300
    Vary: Accept-Encoding


- What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?

    - The URL is converted into a IP address, by either the client's computer cache, their Internet Service Provider, their router, or by a DNS Server.
    - The IP address is used to locate the server hosting the intended domain, and is usually accessed on a specific (or default) port.
    - HTTP protocol is used to request a specific resource or page; ie. some/page.html from that server from the client.
    - The server sends a response back to the client. If successful, the response will contain the requested resource or page the client's browser can render. 

*/