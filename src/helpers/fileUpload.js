import cloudinary from 'cloudinary'
export const uploadFile = async (req) => {
    let imageUrl = ''
    await cloudinary.v2.uploader.upload(req.file.path, async function (err, image) {
        if (err) { console.warn(err); }
        imageUrl = image.url
    });
    return imageUrl
}