### Use postman to check that endpoints available (returns server current time)

```sh
GET http://brett.com/api/auth/servertime
```

### Edit your etc/hosts

```sh
127.0.0.1   brett.com
```

### After editing /etc/hosts, clear the cached entry

```sh
dscacheutil -flushcache
```

### Create .env.dev

```
root
├── .idea
├── .vscode
├── CODEOWNERS.md
├── .gitignore
├── frontend
└── server
    └── .env.dev <-- !!!
```

### .env.dev content

```
MONGO_URL=
JWT_SECRET=
PORT=80
```

## Endpoints

```
POST http://brett.com/api/auth/register
Request body: { name: 'test', email: 'test@test.com', password: 'test' }
Response:
- { error: "Password must be at least 8 characters long and contain at least one letter, one number, and one special character" }
- { "userInfo": { "name": "Alex", "authtoken": "eyJhbGciOiJIUzI" }

```

```
POST http://brett.com/api/auth/login
Request body: { email: 'test@test.com', password: 'test' }
```
