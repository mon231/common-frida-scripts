function print_exception_stack_trace()
{
    let log_utils_cls = Java.use("android.util.Log");
    let exception_cls = Java.use("java.lang.Exception");

    let stack_trace_str = log_utils_cls.getStackTraceString(exception_cls.$new());
    console.log(stack_trace_str);
}

function print_throwable_stack_trace()
{
    let PrintWriter = Java.use('java.io.PrintWriter');
    let StringWriter = Java.use('java.io.StringWriter');
    let throwable = Java.use('java.lang.Throwable').$new();

    let sw = StringWriter.$new();
    let pw = PrintWriter.$new(sw);

    throwable.printStackTrace(pw);
    console.log(sw.toString());
}

function print_thread_stack_trace()
{
    let Thread = Java.use('java.lang.Thread');

    let currentThread = Thread.currentThread();
    let stackTrace = currentThread.getStackTrace();

    stackTrace.forEach(function(stackTraceElement) {
        let fileName = stackTraceElement.getFileName();
        let className = stackTraceElement.getClassName();
        let methodName = stackTraceElement.getMethodName();
        let lineNumber = stackTraceElement.getLineNumber();

        console.log(`${className}.${methodName} at ${fileName}:${lineNumber}`);
    });
}
