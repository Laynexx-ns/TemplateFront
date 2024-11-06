import { createClient } from '@hey-api/openapi-ts';

createClient({
    client: '@hey-api/client-fetch',
    input: 'path/to/openapi.json',
    output: 'src/client',
});