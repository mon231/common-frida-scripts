function writeStringToFile(filePath, content)
{
    const file = new File(filePath, 'w');

    file.write(content);
    file.close();
}

function readStringFromFile(filePath)
{
    const URI = Java.use("java.net.URI");
    const Files = Java.use("java.nio.file.Files");
    const Paths = Java.use("java.nio.file.Paths");

    const fileBytes = Files.readAllBytes(Paths.get(URI.create(`file://${filePath}`)));
    return String.fromCharCode(...JSON.parse(JSON.stringify(fileBytes)));
}
