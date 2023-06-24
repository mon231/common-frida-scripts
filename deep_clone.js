function clone_clonable(obj)
{
    return obj.clone();
}

function clone_serializable(obj)
{
    let objectInputStreamClass = Java.use("java.io.ObjectInputStream");
    let objectOutputStreamClass = Java.use("java.io.ObjectOutputStream");

    let byteArrayInputStreamClass = Java.use("java.io.ByteArrayInputStream");
    let byteArrayOutputStreamClass = Java.use("java.io.ByteArrayOutputStream");

    let byteArrayOutputStream = byteArrayOutputStreamClass.$new();
    let objectOutputStream = objectOutputStreamClass.$new(byteArrayOutputStream);

    objectOutputStream.writeObject(obj);
    objectOutputStream.flush();

    let serializedBytes = byteArrayOutputStream.toByteArray();
    let byteArrayInputStream = byteArrayInputStreamClass.$new(serializedBytes);

    let objectInputStream = objectInputStreamClass.$new(byteArrayInputStream);
    return objectInputStream.readObject();
}

function serialize_parcelable(obj)
{
    let parcel = Java.use('android.os.Parcel').obtain();
    obj.writeToParcel(parcel, 0);

    let data = parcel.marshall();
    parcel.recycle();

    return data;
}

function parse_parcelable(data, class_name)
{
    let parcel = Java.use('android.os.Parcel').obtain();

    let original_cls = Java.use(class_name);
    let creator = original_cls.CREATOR;

    parcel.unmarshall(data, 0, data.length);
    parcel.setDataPosition(0);

    let obj = creator.value.createFromParcel(parcel);
    parcel.recycle();

    return Java.cast(obj, original_cls);
}

function clone_parcelable(obj)
{
    let class_name = obj.getClass().getName();
    let obj_data = serialize_parcelable(obj);

    return parse_parcelable(obj_data, class_name);
}
