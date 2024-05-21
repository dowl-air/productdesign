"use client";
import { LayoutImage } from "@/types/LayoutImage";
import ReactGridLayout from "react-grid-layout";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const AdminGridLayout = ({ images }: { images: LayoutImage[] }) => {
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
            rowHeight={110}
            width={640}
            isResizable={false}
            isDraggable={false}
            allowOverlap={false}
            containerPadding={[0, 0]}
            margin={[0, 0]}
            useCSSTransforms={false}
            verticalCompact={false}
        >
            {images.map((image) => (
                <div className="relative" key={image.id} data-grid={{ x: image.x, y: image.y, w: image.w, h: image.h }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={image.url} alt={image.description} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
            ))}
        </ReactGridLayout>
    );
};

export default AdminGridLayout;
