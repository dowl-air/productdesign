"use client";

import { LayoutImage } from "@/types/LayoutImage";
import AdminGridLayout from "./AdminGridlayout";
import { FormEvent, useState } from "react";

export const ImagesChanger = ({ loadedImages }: { loadedImages: LayoutImage[] }) => {
    const [images, setImages] = useState<LayoutImage[]>(loadedImages);

    const uploadImage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const file = formData.get("file") as File;

        const reader = new FileReader();
        reader.onload = () => {
            setImages((prevImages) => [
                ...prevImages,
                {
                    id: Math.random().toString(12).substr(2, 9),
                    x: 0,
                    y: images.reduce((acc, img) => (img.y > acc ? img.y : acc), 0) + 1,
                    w: 1,
                    h: 1,
                    url: reader.result as string,
                    description: "",
                },
            ]);
        };
        reader.readAsDataURL(file);
        e.currentTarget.reset();
    };

    const updateImage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const id = formData.get("id") as string;
        const x = parseInt(formData.get("x") as string);
        const y = parseInt(formData.get("y") as string);
        const w = parseInt(formData.get("width") as string);
        const h = parseInt(formData.get("height") as string);
        const description = formData.get("description") as string;

        setImages((prevImages) =>
            prevImages.map((image) => {
                if (image.id === id) {
                    return { ...image, x, y, w, h, description };
                }
                return image;
            })
        );
    };

    const removeImage = (id: string) => {
        setImages((prevImages) => prevImages.filter((image) => image.id !== id));
    };

    return (
        <div className="max-w-7xl w-full mx-auto flex flex-col items-center mt-24">
            <form className="flex gap-3 my-5" onSubmit={uploadImage}>
                <input type="file" name="file" className="file-input bg-white text-black file-input-bordered file-input-accent max-w-xs" />
                <button type="submit" className="btn btn-accent">
                    Upload New Item
                </button>
            </form>

            <h2 className="text-black font-bold text-xl my-5">Items</h2>

            <div className="flex flex-col gap-4">
                {images.map((image) => {
                    return (
                        <form key={image.id} className="flex gap-2 items-center" onSubmit={updateImage}>
                            <input type="hidden" name="id" value={image.id} />
                            {/*eslint-disable-next-line @next/next/no-img-element */}
                            <img src={image.url} alt={image.description} className="w-20 h-20 object-cover rounded-md" />
                            <div className="relative">
                                <div className="label p-0 pb-1 pl-1 absolute -top-[17px]">
                                    <span className="label-text-alt">X</span>
                                </div>
                                <input type="number" name="x" max={3} min={0} className="input bg-white text-black max-w-14" defaultValue={image.x} />
                            </div>
                            <div className="relative">
                                <div className="label p-0 pb-1 pl-1 absolute -top-[17px]">
                                    <span className="label-text-alt">Y</span>
                                </div>
                                <input type="number" name="y" min={0} className="input bg-white text-black max-w-14" defaultValue={image.y} />
                            </div>
                            <div className="relative">
                                <div className="label p-0 pb-1 pl-1 absolute -top-[17px]">
                                    <span className="label-text-alt">Width</span>
                                </div>
                                <input
                                    type="number"
                                    name="width"
                                    min={1}
                                    max={4}
                                    className="input bg-white text-black max-w-14"
                                    defaultValue={image.w}
                                />
                            </div>
                            <div className="relative">
                                <div className="label p-0 pb-1 pl-1 absolute -top-[17px]">
                                    <span className="label-text-alt">Height</span>
                                </div>
                                <input type="number" name="height" min={1} className="input bg-white text-black max-w-14" defaultValue={image.h} />
                            </div>
                            <div className="relative">
                                <div className="label p-0 pb-1 pl-1 absolute -top-[17px]">
                                    <span className="label-text-alt">Description</span>
                                </div>
                                <input
                                    type="text"
                                    name="description"
                                    className="input bg-white text-black"
                                    defaultValue={image.description}
                                    placeholder="Description"
                                />
                            </div>
                            <button className="btn btn-accent" type="submit">
                                Update
                            </button>
                            <div className="btn btn-error" onClick={() => removeImage(image.id)}>
                                Delete
                            </div>
                        </form>
                    );
                })}
            </div>

            <h2 className="text-black font-bold text-xl my-5">Preview</h2>
            <div className="w-[640px] mx-auto">
                <AdminGridLayout images={images} />
            </div>
            <button className="btn btn-primary btn-wide mt-5 mb-20">Save Layout</button>
        </div>
    );
};
