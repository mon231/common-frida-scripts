function writeStringToFile(filePath, content) {
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
