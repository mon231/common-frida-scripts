function writeStringToFile(filePath, content)
{
    try
    {
        const file = new File(filePath, 'w');
        file.write(content);

        file.close();
        console.log(`String written to file: ${filePath}`);
    }
    catch (error)
    {
        console.error(`Error writing to file: ${error}`);
    }
}

function readStringFromFile(filePath)
{
    try
    {
        const file = new File(filePath, 'r');
        const content = file.read();

        file.close();
        console.log(`String read from file: ${filePath}`);

        return content;
    }
    catch (error)
    {
        console.error(`Error reading from file: ${error}`);
    }
}
