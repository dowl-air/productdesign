export const checkFileType = (file: File): "photo" | "video" | null => {
    const photoMimeTypes = ["image/jpeg", "image/png", "image/gif", "image/webp", "image/bmp", "image/tiff"];
    const videoMimeTypes = ["video/mp4", "video/quicktime", "video/x-msvideo", "video/x-matroska", "video/webm", "video/mpeg"];

    if (photoMimeTypes.includes(file.type)) {
        return "photo";
    } else if (videoMimeTypes.includes(file.type)) {
        return "video";
    } else {
        return null;
    }
};
