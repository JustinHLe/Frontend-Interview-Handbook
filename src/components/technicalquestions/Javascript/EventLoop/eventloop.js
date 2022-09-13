/*
    The event loop is how Javascript processes code.

    Every line of code is added to the event looped and process in sequential order. If javascript encounters code that is asychronuous javascript will push 
    the task to the callback queue and then continue executing from the main call stack. Once all jobs are completed in the main call stack. Javascript will execute
    remaining tasks in the callback queue. 

    The callback queue is made up of the 
    microtask queue - microtask queue consists of promise callbacks

    The microtask will run all its task before checking the macrotask queue


    macrotask queue - macro task queue consists of setTimeout
*/