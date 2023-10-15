---
title: "IO Stream"
subtitle: "Random Subtitle"
date: "2023-01-01"
---

Java treat flow of data as stream. Java strams are classified into two types- InputStream and OutputStream. The java.io package contains large number of stream classes to support streams.

Java provides java.io package which contains large number of stream classes to process all types of data -

- Byte Stream Classes: Support for handling input and output of bytes.
- Character Stream Classes: Support for handling input and output of characters.


## Input Stream Classes

It is used to read 8-bit bytes and support number of input related methods.
- Reading bytes
- Closing stream
- Marking position in stream
- Skipping ahead in stream
- Finding number of bytes available

Mostly used methods are:

| Method | Description |
| ------ | ----------- |
| int read() | Reads byte from input stream |
| int read(byte[] b) | Reads bytes from input stream into array b |
| int read(byte[] b, int n, int m) | Reads m bytes from input stream into array b starting at offset n |
| int available() | Returns number of bytes available for reading |
| long skip(long n) | Skips n bytes of input stream |
| void reset() | Goes back to beginning of input stream |
| void close() | Closes input stream |
| void mark(int limit) | Marks position in input stream |


## Output Stream Classes

It is used to write 8-bit bytes and support number of output related methods.
- Writing bytes
- Closing stream
- Flushing stream


Mostly used methods are:

| Method | Description |
| ------ | ----------- |
| void write(int b) | Writes byte to output stream |
| void write(byte[] b) | Writes bytes from array b to output stream |
| void write(byte[] b, int n, int m) | Writes m bytes from array b to output stream starting at offset n |
| void flush() | Flushes output stream |
| void close() | Closes output stream |


## Character Stream Classes

It is used to read and write 16-bit characters and support number of input and output related methods.

Reader stream classes
- To read characters from file
- Identical to input stream classes

Writer stream classes
- To write characters to file
- Identical to output stream classes


Examples -

```java
import java.io.*;

public class Input {
   public static void main(String args[]) {
	   float principalAmount = 0;
	   float rateofinterest = 0;
	   int noy =0;
	   
	   DataInputStream in = new DataInputStream(System.in);
	   
	   System.out.print("Enter Principal Amount: ");
	   System.out.flush();
	   try {
	    	principalAmount = Float.valueOf(in.readLine());
	   } catch (NumberFormatException e) {
			e.printStackTrace();
	   } catch (IOException e) {
			e.printStackTrace();
		}
	   
	   System.out.print("Enter Rate of Interest: ");
	   System.out.flush();
	   try {
		   rateofinterest = Float.valueOf(in.readLine());
	   } catch (NumberFormatException e) {
			e.printStackTrace();
	   } catch (IOException e) {
			e.printStackTrace();
		}
	   
	   
	   System.out.print("Enter Number of Years: ");
	   System.out.flush();
	   try {
		   noy = Integer.parseInt(in.readLine());
	   } catch (NumberFormatException e) {
			e.printStackTrace();
	   } catch (IOException e) {
			e.printStackTrace();
		}
	   
	   
	   int total = (int) (principalAmount*noy*rateofinterest);
	   System.out.println(total);
   }
}
```


## Java File I/O

Java provides java.io package which includes numerous class definitions and methods to manipulate files and flow of data (called File I/O). 

There are 4 classes in java.io package to handle files:
- File
- FileInputStream
- FileOutputStream
- RandomAccessFile


### File Class

The File class is an abstract representation of file and directory pathname. A pathname can be either absolute or relative. The File class have several methods for working with directories and files such as creating new directories or files, deleting and renaming directories or files, listing the contents of a directory etc.

Constructors:

| Constructor | Description |
| ----------- | ----------- |
| File(String pathname) | It creates a new File instance by converting the given pathname string into an abstract pathname. |
| File(String parent, String child) | It creates a new File instance from a parent pathname string and a child pathname string. |
| File(File parent, String child) | It creates a new File instance from a parent abstract pathname and a child pathname string. |
| File(URI uri) | It creates a new File instance by converting the given file: URI into an abstract pathname. |


Methods:

| Modifier | Method | Description |
| -------- | ------ | ----------- |
| String| 	getName() |	Returns the name of the file or directory denoted by this abstract pathname. |
| String |	getParent() | Returns the pathname string of this abstract pathname's parent, or null if this pathname does not name a parent directory. |
| String	| getPath() | Converts this abstract pathname into a pathname string.| 
|String	|getAbsolutePath() |Returns the absolute pathname string of this abstract pathname.|
|boolean|	renameTo(File dest) |Renames the file denoted by this abstract pathname.|
| boolean	| exists() | Tests whether the file or directory denoted by this abstract pathname exists.| 
| boolean	| canExecute() | Tests whether the application can execute the file denoted by this  abstract pathname. |
| boolean	| canRead() | Tests whether the application can read the file denoted by this abstract pathname.| 
| boolean	| canWrite() | Tests whether the application can modify the file denoted by this abstract pathname.| 
| boolean	| isAbsolute() | Tests whether this abstract pathname is absolute.| 
| boolean	| isDirectory() | Tests whether the file denoted by this abstract pathname is a directory.| 
| boolean	| isFile() | Tests whether the file denoted by this abstract pathname is a normal file.| 
| boolean	| isHidden() | Tests whether the file named by this abstract pathname is a hidden file.| 
| long| 	lastModified() | Returns the time that the file denoted by this abstract pathname was last modified.| 
| long| 	length() | Returns the length of the file denoted by this abstract pathname.| 
| boolean	| delete() | Deletes the file or directory denoted by this abstract pathname.| 
| boolean	| mkdir() | Creates the directory named by this abstract pathname.| 
boolean	| mkdirs()|  Creates the directory named by this abstract pathname, including any necessary but nonexistent parent directories.| 
| String[]| 	list()|  Returns an array of strings naming the files and directories in the directory denoted by this abstract pathname.| 
| String[]| 	list(FilenameFilter filter)|  Returns an array of strings naming the files and directories in the directory denoted by this abstract pathname that satisfy the specified filter.| 


Example 1:

```java

```

Example 2:

```java

```

Example 3:

```java

```

Example 4:

```java

```

Example 5:

```java

```


### RandomAccessFile Class

public class RandomAccessFile
extends Object
implements DataOutput, DataInput, Closeable

It allows to handle file randomly in contrast to sequential access which is done by other file handling classes. It allows to move the file pointer randomly. It allows read or write or read and write both operations.

Example 1:

```java

```

Example 2:

```java

```

Example 3:

```java

```