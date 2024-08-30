import 'dotenv/config'
import {drizzle} from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'
import { DATABASE_URL } from '@src/config/constants'


const client = postgres(DATABASE_URL as string, {max:1})
export const db = drizzle(client, {schema, logger:true})
