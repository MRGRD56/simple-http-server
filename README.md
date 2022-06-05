# Simple HTTP Server

### Usage

```shell
node ./index.js <port> <host> <responseBody> <responseStatus>
```

> All the arguments are optional

| Argument       | Description                            | Default value |
|----------------|----------------------------------------|---------------|
| port           | The port of the server                 | 9999          |
| host           | The host of the server                 | 0.0.0.0       |
| responseBody   | The content returned by the server     | Hello, world! |
| responseStatus | The status code returned by the server | 200           |

### Examples

```shell
node ./index.js 80 localhost "Lorem ipsum" 403

node ./index.js 8080 192.168.0.123

node ./index.js 81
```
