<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## For everyone

```bash
💦 http://localhost:1410/auth/register
Method: POST
@Body
-> fullName: Your name
-> phoneNumber: 1234567890
-> email: example@gmail.com
-> address: Your address
-> password: Your password

💦 http://localhost:1410/auth/login
Method: POST
@Body
-> email: example@gmail.com
-> password: Your password

💦 http://localhost:1410/profile
Method: GET
@Headers
-> Authorization: Bearer access_token

💦 http://localhost:1410/profile/edit
Method: PATCH
@Body
-> fullName?: Your name
-> phoneNumber?: 1234567890
-> email?: example@gmail.com
-> address?: Your address
-> password?: Your password

@Headers
-> Authorization: Bearer access_token
```


## For users

```bash
💦 http://localhost:1410/product
Method: GET - Get all information of all products

💦 http://localhost:1410/product/:id
Method: GET - Get product information of any product

💦 http://localhost:1410/cart
Method: GET - Check out your own shopping cart

@Headers
-> Authorization: Bearer access_token

💦 http://localhost:1410/cart
Method: POST - Add your order
-> productId: ...
-> productQuantity: ...

@Headers
-> Authorization: Bearer access_token

```
## For the owner

```bash
💦 http://localhost:1410/product
Method: POST - Add any product
@Body
-> productName: ...
-> productFiles: Any Photo or Video
-> productDescription?: ...
-> productPrice: ...
-> productDiscount?: ...
-> productType: ...

@Headers
-> Authorization: Bearer access_token

💦 http://localhost:1410/product/:id
Method: PATCH - Edit any product
@Body
-> productName?: ...
-> productFiles?: Any Photo or Video
-> productDescription?: ...
-> productPrice?: ...
-> productDiscount?: ...
-> productType?: ...

@Headers
-> Authorization: Bearer access_token

💦 http://localhost:1410/product/:id
Method: DELETE - Delete any product

@Headers
-> Authorization: Bearer access_token

💦 http://localhost:1410/product
Method: DELETE - Delete all products

@Headers
-> Authorization: Bearer access_token
```

## Stay in touch

- Facebook - [Khanh Nguyen](https://www.facebook.com/KWalkerNNK)