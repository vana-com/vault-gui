# Vana Local Secret Store

Vercel has a 4KB limit on all environment variables, so this can be an issue
when storing large secrets such as private keys. We use this local `secrets/`
directory to store encrypted secrets so they can be checked into git, and not
have to come from environment variables.

## Writing secrets

This secret store uses `AES 256` for symmetric encryption, using a key and a
random IV, and then encoded to base64. To encrypt a secret, run the following
command.

```bash
yarn encrypt:secret "test"

Value to encrypt:  test
Encrypted value:  55qP0RoPvKbe0ilG3vFQSw==
```

Update each `secrets/<environment>.json` with the encrypted value:

```json
{
   ...
   "test_value": "55qP0RoPvKbe0ilG3vFQSw=="
}
```

## Reading secrets

Use the util `src/utils/secrets` to read in a secret.

```typescript
import { getSecret } from "src/utils/getSecret";

const secret = getSecret("secret_key");
```

Secrets are decrypted in a same way as it's encrypted, reading in a base64 value
and deciphering using the same key and IV that was used to encrypt the value.
