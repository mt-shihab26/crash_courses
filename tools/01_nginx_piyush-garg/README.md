# Nginx

## Definition

- NGINX is a powerful web server and uses a non-threaded, event-driven architecture.
- It can also do other important this, such as `load balancing`, and `HTTP caching`, or be used as a `reverse proxy`

## Commends

- `nginx -s reload`
- `nginx -t`

## Serve static content

```nginx.conf
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
