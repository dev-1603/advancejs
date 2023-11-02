# indepth javascript

### event executoin in javascript

Javascript executes code in 3 steps [youtube](https://www.youtube.com/watch?v=BeHj9UOuUZ0)

callstack= []
taskqueue = []
microtaskqueue=[]

the order of execution goes in following steps

1. callstack i.e direct operation
2. microtaskqueue i.e dependent operations such as promises
3. taskqueue: tasks that are queued to be excuted after certain time or condition such as **setTimeout** and **nextTick**
