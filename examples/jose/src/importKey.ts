/// <reference types="vite/client" />

import { importPKCS8 } from 'jose'


const key = await importPKCS8('-----BEGIN PRIVATE KEY-----...', 'ES256')

console.log(key)