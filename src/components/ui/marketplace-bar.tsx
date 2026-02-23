const ICONS = [
    { name: 'Mercado Livre', src: '/mlivre.png', customScale: '' },
    { name: 'Amazon', src: '/amazon.png', customScale: 'scale-[1.2]' },
    { name: 'Shopee', src: '/shopee.png', customScale: 'scale-[1.2]' },
    { name: 'TikTok Shop', src: '/tk.png', customScale: 'scale-[1.1]' },
    { name: 'Tiny', src: '/tiny.png', customScale: 'scale-[1.25]' },
    { name: 'Bling', src: '/bling.png', customScale: '' },
];

export function MarketplaceBar() {
    return (
        <div className="w-full flex flex-col items-center justify-center mt-12 mb-4 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-white/60 text-[12px] md:text-[14px] font-medium mb-6 uppercase tracking-[0.2em] md:tracking-[0.25em] text-center drop-shadow-sm">
                Integrado com as maiores plataformas:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
                {ICONS.map((icon) => (
                    <div
                        key={icon.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex items-center justify-center cursor-pointer group"
                    >
                        <img
                            src={icon.src}
                            alt={icon.name}
                            className={`${icon.customScale || ''} w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
