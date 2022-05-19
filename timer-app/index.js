const EventEmitter = require('events')

class Timer extends EventEmitter {
    constructor(total,interval){
        super();
        this.total = total
        this.interval = interval
        this.ticks = 0
    }

    start(){
        this.intervalId = setInterval(()=> this._tick(), this.interval)
        this.emit('start')

    }

    _tick(){
        this.ticks += 1;
        if (this.ticks <= this.total) {
            this.emit('tick', this.ticks)
        } else {
            this.end();
        }
        
    }

    end(){
        clearInterval( this.intervalId )
        this.emit('end')
        
    }
}

const timer = new Timer(10, 500)

timer.once('start', () => console.log('Start!'))
timer.on('tick', tick => console.log(tick))
timer.on('end', () => console.log('End!'))


timer.start()