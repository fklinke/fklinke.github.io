import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import Zoomable from '@site/src/components/Zoomable';

type Props = {
    lightSrc: string;
    darkSrc: string;
    alt: string;
    className?: string;
};

export default function ThemedZoomableImage({
    lightSrc,
    darkSrc,
    alt,
    className,
}: Props) {
    const { colorMode } = useColorMode();

    const src = colorMode === 'dark' ? darkSrc : lightSrc;

    return (
        <Zoomable>
            <img src={src} alt={alt} className={className} />
        </Zoomable>
    );
}
