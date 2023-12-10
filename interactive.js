function show_toast(message)
{
    Java.perform(() => {
        Java.scheduleOnMainThread(() => {
                const ToastWidget = Java.use("android.widget.Toast");
                const context = Java.use("android.app.ActivityThread").currentApplication().getApplicationContext();
                const JavaString = Java.use("java.lang.String");

                ToastWidget.makeText(context, JavaString.$new(message), 1).show();
        });
    });
}

function toast_loop(message, interval_ms)
{
    setInterval(show_toast, interval_ms, message);
}
