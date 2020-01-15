# power-ts-axios
rebuild axios by TypeScript

## 使用方法
The power-ts-axios method is the same as axios, it can only be used on the client and not on the node backend.

## install 
```js
npm i power-ts-axios --save
```

```js
    import axios from "power-ts-axios"

    axios({
      method: 'post',
      url: '/base/post',
      responseType: 'json',
      data: {
        a: 1,
        b: 2
      }
    }).then((res) => {
      console.log(res);
    });
```
