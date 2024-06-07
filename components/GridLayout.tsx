"use client";
import { LayoutImage } from "@/types/LayoutImage";
import ReactGridLayout from "react-grid-layout";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const GridLayout = ({ items }: { items: LayoutImage[] }) => {
    return (
        <ReactGridLayout
            className="layout"
            layout={items.map((img) => ({
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
            verticalCompact={false}
            autoSize
        >
            {items.map((image) => (
                <div className="group relative" key={image.id} data-grid={{ x: image.x, y: image.y, w: image.w, h: image.h }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={image.url}
                        alt={image.description}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        className="hover:scale-110"
                    />
                    {image.description && (
                        <div className="absolute opacity-0 bottom-0 w-full bg-black text-white backdrop-blur-sm bg-opacity-50 justify-center py-6 px-6 group-hover:opacity-100 transition-opacity">
                            {image.description}
                        </div>
                    )}
                </div>
            ))}
        </ReactGridLayout>
    );
};

export default GridLayout;
