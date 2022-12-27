// index.js 
// const Emiiter = require('events'); const emiiter = new Emiiter(); emiiter.on('save', ({ date }) => { console.log(' *** Event fired ***', date); }); setInterval(() => { emiiter.emit('save', { date: Date.now() }) }, 1000);

// events.js 
function Emiiter() { 
    this.events = {}; 
}; 

// escuchar el evento
Emiiter.prototype.on = function (type, listener){  
    this.events[type] = this.events[type] || []; 
    this.events[type].push(listener);
};

// Emitir evento
Emiiter.prototype.emit = function (type, opts) { 
    if (this.events[type]) { 
        this.events[type].forEach(listener => listener(opts)) 
    } 
}; 

module.exports = Emiiter;