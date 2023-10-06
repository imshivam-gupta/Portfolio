---
title: "File Upload in Node.js"
subtitle: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine."
date: "2019-12-01"
---

File uploading means a user from client machine requests to upload file to the server. For example, users can upload images, videos, etc on Facebook, Instagram, etc. File can be uploaded to the server using Multer module. Multer is a node.js middleware which is used for handling multipart/form-data, which is mostly used library for uploading files.  Multer will process only those form which are multipart (multipart/form-data). So whenever you use multer, make sure you put multipart in form.

## Install Multer

```bash
npm install --save multer
```


## Initialize Multer

```javascript
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
```

## Multer Options

- **storage**: Destination folder to store uploaded files. If you do not provide destination folder, you need to create it manually.
- **fileFilter**: Function to control which files are accepted
- **limits**: Limits of the uploaded data
- **preservePath**: Keep the full path of files instead of just the base name

## Storage Engines in Multer

There are two storage engines available for multer: DiskStorage and MemoryStorage.

##### DiskStorage: 

The disk storage engine gives you full control on storing files to disk. There are two options available, destination and filename. They are both functions that determine where the file should be stored. 

destination is used to determine within which folder the uploaded files should be stored. This can also be given as a string (e.g. '/tmp/uploads'). If no destination is given, the operating system's default directory for temporary files is used.

filename is used to determine what the file should be named inside the folder. If no filename is given, each file will be given a random name that doesn't include any file extension. Multer will not append any file extension for you, your function should return a filename complete with an file extension.



```javascript
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })
```


##### MemoryStorage:

The memory storage engine stores the files in memory as Buffer objects. It doesn't have any options. When using memory storage, the file info will contain a field called buffer that contains the entire file. Processing large files with this engine can cause your application to run out of memory.

```javascript
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
```


## File filter in Multer

Set this to a function to control which files should be uploaded and which should be skipped. The function should look like this:

```javascript
function fileFilter (req, file, cb) {

  // The function should call `cb` with a boolean
  // to indicate if the file should be accepted

  // To reject this file pass `false`, like so:
  cb(null, false)

  // To accept the file pass `true`, like so:
  cb(null, true)

  // You can always pass an error if something goes wrong:
  cb(new Error('I don\'t have a clue!'))

}
```


## Example of File Upload on Cloudinary using Multer


```javascript
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const sharp = require('sharp');
const { Readable } = require("stream");

const multerStrorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb(new AppError('Not an image! Please upload only images.', 400), false);
    }
};


const upload = multer({
    storage: multerStrorage,
    fileFilter: multerFilter
});

const uploadUserPhoto = upload.single('photo');

async function uploadStream(file) {
    return new Promise((res, rej) => {
        const theTransformStream = cloudinary.uploader.upload_stream(
            {
                resource_type: "auto",
                public_id: file.filename,
            },(err, result) => {
                if (err) return rej(err);
                res(result);
            }
        );
        Readable.from(file.buffer).pipe(theTransformStream);
  });
}

exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
    if(!req.file) return next();

    req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

    await sharp(req.file.buffer)
            .resize(500, 500)
            .toFormat('jpeg')
            .jpeg({ quality: 90 })

    const temp = await uploadStream(req);
    req.fileurl = temp.secure_url;
    next();
});
```