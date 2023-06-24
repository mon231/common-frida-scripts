function class_exists(class_name)
{
    return !!Java.classFactory.loader.find(class_name);
}

function get_class_object(class_name)
{
    const classes = Java.enumerateLoadedClassesSync();

    for (const class_object of classes)
    {
        if (class_object.match(class_name))
        {
            return Java.use(class_object);
        }
    }

    throw "Error can't find class " + class_name;
}

function get_class_instances(class_name)
{
    let class_instances = [];
    let enumeration_done = false;

    Java.choose(
        class_name,
        {
            onMatch: (class_instance) => class_instances.push(class_instance),
            onComplete: () => { enumeration_done = true; }
        }
    );

    while (!enumeration_done);
    return class_instances;
}
