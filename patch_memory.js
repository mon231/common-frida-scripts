function write_int(addresses, target_value)
{
    for (var i = 0; i < addresses.length; ++i)
    {
        const address = new NativePointer(addresses[i]);
        address.writeInt(target_value);
    }
}
