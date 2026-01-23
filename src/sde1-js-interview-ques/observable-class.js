class Observable {
    constructor() {
        this.subscribers = new Set()
    }

    subscribe(cb) {
        this.subscribers.add(cb)
        return () => this.subscribers.delete(cb) // unsubscribe
    }

    notify(value) {
        this.subscribers.forEach(cb => cb(value))
    }
}

const observable = new Observable()

const unsub1 = observable.subscribe(data =>
    console.log("A:", data)
)

observable.notify("Hello")

unsub1()
observable.notify("World")
