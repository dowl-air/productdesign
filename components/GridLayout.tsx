"use client";
import { LayoutImage } from "@/types/LayoutImage";
import ReactGridLayout from "react-grid-layout";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const GridLayout = () => {
    const images: LayoutImage[] = [
        { id: "1", x: 0, y: 0, w: 1, h: 1, url: "https://via.placeholder.com/300", description: "Image 1" },
        { id: "2", x: 1, y: 0, w: 1, h: 1, url: "https://via.placeholder.com/300", description: "Image 2" },
        { id: "3", x: 2, y: 0, w: 1, h: 1, url: "https://via.placeholder.com/300", description: "Image 3" },
        { id: "4", x: 3, y: 0, w: 1, h: 1, url: "https://via.placeholder.com/300", description: "Image 4" },
        { id: "5", x: 0, y: 1, w: 2, h: 2, url: "https://via.placeholder.com/600", description: "Image 5" },
    ];

    return (
        <ReactGridLayout
            className="layout"
            layout={images.map((img, index) => ({
                i: img.id,
                x: img.x,
                y: img.y,
                w: img.w,
                h: img.h,
            }))}
            cols={4}
            rowHeight={220}
            width={1280}
            isResizable={false}
            isDraggable={false}
            allowOverlap={false}
            containerPadding={[0, 0]}
            margin={[0, 0]}
            useCSSTransforms={false}
        >
            {images.map((image) => (
                <div className="relative" key={image.id} data-grid={{ x: image.x, y: image.y, w: image.w, h: image.h }}>
                    <img src={image.url} alt={image.description} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div className="absolute bottom-0 w-full bg-black backdrop-blur-sm bg-opacity-50 flex justify-center py-6 px-6">
                        {image.description}
                    </div>
                </div>
            ))}
        </ReactGridLayout>
    );
};

export default GridLayout;
