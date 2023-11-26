### API Endpoints

**Vote History routes**:\
`POST /v1/vote-history` - create a vote history\
`GET /v1/vote-history` - get all vote history\

** Response create a vote history
```
{
    "status": 201,
    "message": "Create Vote History Success",
    "data": {
        "id": "7e0b5736-e040-45c3-8773-7a15efe2564a",
        "voters": "0xABe58dd62568c882D5f87cfb4F33E60F1CB4f78C",
        "candidate": "Candidate 1",
        "round": 1,
        "timestamp": 1701012287
    }
}
```

**Response Get All History
```
{
    "status": 200,
    "message": "Get Vote History Success",
    "data": [
        {
            "id": "cb78b2aa-db19-4721-948c-fd8947459071",
            "voters": "0x018Fa62a5B05BC8bB14b4Ee7685B45483E40BD6a",
            "candidate": "Candidate 1",
            "round": 2,
            "timestamp": 1701017585
        },
        {
            "id": "2ec158b4-cd85-4311-a805-d78d2d817e1b",
            "voters": "0x018Fa62a5B05BC8bB14b4Ee7685B45483E40BD6a",
            "candidate": "Candidate 2",
            "round": 1,
            "timestamp": 1701014865
        },
        {
            "id": "7e0b5736-e040-45c3-8773-7a15efe2564a",
            "voters": "0xABe58dd62568c882D5f87cfb4F33E60F1CB4f78C",
            "candidate": "Candidate 1",
            "round": 1,
            "timestamp": 1701012287
        }
    ]
}
```

