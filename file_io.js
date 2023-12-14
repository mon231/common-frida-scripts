function file_write_string(file_path, content)
{
    const file = new File(file_path, 'w');

    file.write(content);
    file.close();
}

function file_read_bytes(file_path)
{
    const URI = Java.use("java.net.URI");
    const Files = Java.use("java.nio.file.Files");
    const Paths = Java.use("java.nio.file.Paths");

    return Files.readAllBytes(Paths.get(URI.create(`file://${file_path}`)));
}

function file_read_string(file_path)
{
    const fileBytes = file_read_bytes(file_path);
    return String.fromCharCode(...JSON.parse(JSON.stringify(fileBytes)));
}

function file_write_serializable(serializable, file_path)
{
    const File = Java.use("java.io.File");
    const FileOutputStream = Java.use("java.io.FileOutputStream");
    const ObjectOutputStream = Java.use("java.io.ObjectOutputStream");

    let file = File.$new(file_path);
    let fileOutputStream = FileOutputStream.$new(file);
    let objectOutputStream = ObjectOutputStream.$new(fileOutputStream);

    objectOutputStream.writeObject(serializable);
    objectOutputStream.close();
}

function file_read_serializable(file_path)
{
    const File = Java.use("java.io.File");
    const FileInputStream = Java.use("java.io.FileInputStream");
    const ObjectInputStream = Java.use("java.io.ObjectInputStream");

    let file = File.$new(file_path);
    let fileInputStream = FileInputStream.$new(file);
    let objectInputStream = ObjectInputStream.$new(fileInputStream);

    let obj = objectInputStream.readObject();
    objectInputStream.close();

    return obj;
}
