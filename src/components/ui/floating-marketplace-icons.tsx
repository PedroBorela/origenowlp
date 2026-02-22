import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Array of representative marketplace URLs/icons to display
const ICONS = [
    { name: 'Mercado Livre', src: '/mlivre.png', scale: 1.1 },
    { name: 'Amazon', src: '/amazon.png', scale: 1.2 },
    { name: 'Shopee', src: '/shopee.png', scale: 1.1 },
    { name: 'TikTok Shop', src: '/tk.png', scale: 1.4 },
    { name: 'Tiny', src: '/tiny.png', scale: 1.8 },
    { name: 'Bling', src: '/bling.png', scale: 1.2 },
];

export function FloatingMarketplaceIcons() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const icons = containerRef.current.querySelectorAll('.floating-icon');

        // Create a GSAP context for cleanup
        const ctx = gsap.context(() => {
            icons.forEach((icon, i) => {
                // Random starting positions
                gsap.set(icon, {
                    x: gsap.utils.random(-200, 200),
                    y: gsap.utils.random(-150, 150),
                    scale: gsap.utils.random(0.5, 1.2),
                    opacity: 0,
                    rotation: gsap.utils.random(-15, 15)
                });

                // Fade in
                gsap.to(icon, {
                    opacity: 1,
                    duration: gsap.utils.random(1.5, 3),
                    delay: i * 0.2
                });

                // Continuous floating animation
                gsap.to(icon, {
                    y: '+=50',
                    x: '+=30',
                    rotation: '+=10',
                    duration: gsap.utils.random(4, 7),
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    delay: i * 0.1
                });

                // Secondary movement for more organic feel
                gsap.to(icon, {
                    x: '-=20',
                    duration: gsap.utils.random(5, 8),
                    repeat: -1,
                    yoyo: true,
                    ease: 'power1.inOut',
                    delay: i * 0.3
                });
            });
        }, containerRef);

        return () => ctx.revert(); // Cleanup GSAP animations on unmount
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 pointer-events-none overflow-hidden z-0"
            style={{
                maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)'
            }}
        >
            {ICONS.map((icon, idx) => (
                <div
                    key={icon.name}
                    className="floating-icon absolute flex items-center justify-center w-24 h-24 rounded-full bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden"
                    style={{
                        // Distribute them roughly in a circle around the center
                        left: `${50 + 35 * Math.cos(idx * (Math.PI * 2 / ICONS.length))}%`,
                        top: `${50 + 30 * Math.sin(idx * (Math.PI * 2 / ICONS.length))}%`,
                    }}
                >
                    <img
                        src={icon.src}
                        alt={icon.name}
                        className="w-full h-full object-cover"
                        style={{ transform: `scale(${icon.scale})` }}
                    />
                </div>
            ))}
        </div>
    );
}
