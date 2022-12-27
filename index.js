const {EventEmitter} = require('events');

const emiiter = new EventEmitter();
emiiter.on('save',({date})=>{
    console.log('*** Event Fired ***',date)
});

setInterval(()=>{
    emiiter.emit('save',{date: Date.now()});
},1000);