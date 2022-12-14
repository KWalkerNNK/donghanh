<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## For everyone

```bash
ð¦ http://localhost:1410/auth/register
Method: POST
@Body
-> fullName: Your name
-> phoneNumber: 1234567890
-> email: example@gmail.com
-> address: Your address
-> password: Your password

ð¦ http://localhost:1410/auth/login
Method: POST
@Body
-> email: example@gmail.com
-> password: Your password

ð¦ http://localhost:1410/recover?toemail=email
Method: GET - If you forgot your password, we will send a code to your Email to make sure it is you
@Query
-> toemail: example@gmail.com

ð¦ http://localhost:1410/recover
Method: POST - Enter the verification code we send you
@POST
-> verificationCode: Your verification code

ð¦ http://localhost:1410/profile
Method: GET
@Headers
-> Authorization: Bearer access_token

ð¦ http://localhost:1410/profile/edit
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
ð¦ http://localhost:1410/product
Method: GET - Get all information of all products

ð¦ http://localhost:1410/product/:id
Method: GET - Get product information of any product by Id

ð¦http://localhost:1410/product/query?name=productName
Method: GET - Get product information of any product by name
@Query

ð¦ http://localhost:1410/cart
Method: GET - Check out your own shopping cart

@Headers
-> Authorization: Bearer access_token

ð¦ http://localhost:1410/cart
Method: POST - Add your order
@Body
-> productId: ...
-> productQuantity: ...

@Headers
-> Authorization: Bearer access_token

ð¦ http://localhost:1410/cart
Method: PATCH - Update your order
@Body
-> productId: ...
-> productQuantity: ...

@Headers
-> Authorization: Bearer access_token

ð¦ http://localhost:1410/cart/:id
Method: DELETE - Delete your order
@Params

@Headers
-> Authorization: Bearer access_token

ð¦ http://localhost:1410/cart
Method: DELETE - Delete your cart

@Headers
-> Authorization: Bearer access_token

ð¦http://localhost:1410/cart/purchase?id=id
Method: GET - Buy product
@Params

@Headers
-> Authorization: Bearer access_token
```
## For the owner

```bash
ð¦ http://localhost:1410/product
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

ð¦ http://localhost:1410/product/:id
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

ð¦ http://localhost:1410/product/:id
Method: DELETE - Delete any product
@Params

@Headers
-> Authorization: Bearer access_token

ð¦ http://localhost:1410/product
Method: DELETE - Delete all products

@Headers
-> Authorization: Bearer access_token

ð¦http://localhost:1410/statistic
Method: GET - Order statistics

@Headers
-> Authorization: Bearer access_token

ð¦http://localhost:1410/statistic/:id
Method: PATCH - Update order status
@Body
-> status?: Done...

@Headers
-> Authorization: Bearer access_token

ð¦http://localhost:1410/statistic/cart?id=id
Method: GET - Search for orders by Id
@Params

@Headers
-> Authorization: Bearer access_token

ð¦http://localhost:1410/statistic/delete-all
Method: DELETE - Clean up stats

@Headers
-> Authorization: Bearer access_token

ð¦http://localhost:1410/statistic/:id
Method: DELETE - Delete orders with Id =:id from the system

@Headers
-> Authorization: Bearer access_token
```

## Stay in touch

- Facebook - [Khanh Nguyen](https://www.facebook.com/KWalkerNNK)