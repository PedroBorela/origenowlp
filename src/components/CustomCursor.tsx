import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorCircleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorCircle = cursorCircleRef.current;
        if (!cursor || !cursorCircle) return;

        const mouse = { x: -100, y: -100 };
        const pos = { x: 0, y: 0 };
        const speed = 0.4;

        const updateCoordinates = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('mousemove', updateCoordinates);

        function getSqueeze(diffX: number, diffY: number) {
            const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
            const maxSqueeze = 0.15;
            const accelerator = 1500;
            return Math.min(distance / accelerator, maxSqueeze);
        }

        let animationFrameId: number;

        const updateCursor = () => {
            const diffX = Math.round(mouse.x - pos.x);
            const diffY = Math.round(mouse.y - pos.y);

            pos.x += diffX * speed;
            pos.y += diffY * speed;

            const squeeze = getSqueeze(diffX, diffY);

            const scale = `scale(${1 + squeeze}, ${1 - squeeze})`;
            const translate = `translate3d(${pos.x}px, ${pos.y}px, 0)`;

            cursor.style.transform = translate;
            cursorCircle.style.transform = scale;
        };

        function loop() {
            updateCursor();
            animationFrameId = requestAnimationFrame(loop);
        }

        animationFrameId = requestAnimationFrame(loop);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('.cursor-hover')) {
                cursorCircle.style.width = '100px';
                cursorCircle.style.height = '100px';
                cursorCircle.style.color = '#000';
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('.cursor-hover')) {
                cursorCircle.style.width = '16px';
                cursorCircle.style.height = '16px';
                cursorCircle.style.color = 'transparent';
            }
        };

        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            globalThis.removeEventListener('mousemove', updateCoordinates);
            cancelAnimationFrame(animationFrameId);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <div id="cursor" ref={cursorRef}>
            <div className="cursor__circle" ref={cursorCircleRef}></div>
        </div>
    );
}
