module.exports = {
    apps : [
    {
      name: 'I-task API Gateway',
      script: 'app.js', 
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G', 
    }  
    
    ]
};