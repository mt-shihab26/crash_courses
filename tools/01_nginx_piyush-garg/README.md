# Nginx

## Links

- https://gist.github.com/piyushgarg-dev/8b14c87c8ff4d626ecbc747b6b9fc57f

## Definition

- NGINX is a powerful web server and uses a non-threaded, event-driven architecture.
- It can also do other important this, such as `load balancing`, and `HTTP caching`, or be used as a `reverse proxy`

## Commends

- `nginx -s reload`
- `nginx -t`

## Serve static content

```nginx
events {

}

http {
    server {
	listen 80;
	server_name _;
	
	#location / {
	#       return 200 "Hello from Nginx";
	#}
	
	root /app;
    }
	
    include /etc/nginx/mime.types;
}
```
