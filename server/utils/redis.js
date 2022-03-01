import pkg from 'ioredis';
const Redis = pkg;

const redis = new Redis({
    host:process.env.REDIS_HOST,
    port:process.env.REDIS_PORT,
    password:""
})

export default redis;