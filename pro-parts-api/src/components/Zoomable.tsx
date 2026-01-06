import React, { useEffect, useRef } from 'react';
import mediumZoom from 'medium-zoom';

type Props = {
    children: React.ReactNode;
};

export default function Zoomable({ children }: Props) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const img = ref.current.querySelector('img');
        if (!img) return;

        const zoom = mediumZoom(img, {
            margin: 24,
            background: 'rgba(0,0,0,0.9)',
            scrollOffset: Infinity,
        });

        return () => zoom.detach();
    }, []);

    return <div ref={ref}>{children}</div>;
}
