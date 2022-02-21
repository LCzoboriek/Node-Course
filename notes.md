What real life useage is there for buffers within js?

Seems low level handling of binary data, maybe adding things to an image?

IO Streams
------------
# Objects that let you read data from a source or write data to a destination in continuous fashion.

# Readable
# writeable
# duplex (both read and write)
# Transform

Each type of stream throws events at different points in their life cycle

- Data , there is data available to read
- End, there is no more data
- Error, error receiveing
- Finish

You can add other compression methods using npm install, check them out