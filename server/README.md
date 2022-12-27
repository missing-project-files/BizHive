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
- { error: "Password must be of atleast 5 characters" }
- { "userInfo": { "name": "Alex", "authtoken": "eyJhbGciOiJIUzI" }

```
