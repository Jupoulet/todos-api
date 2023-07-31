import postgres from 'postgres'
console.log('PROCESS.ENV', process.env.DATABASE_URL);
const sql = postgres(process.env.DATABASE_URL as string, {
  ssl: 'require'
})

export default sql