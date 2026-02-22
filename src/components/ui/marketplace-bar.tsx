const ICONS = [
    { name: 'Mercado Livre', src: '/mercado-livre.webp' },
    { name: 'Amazon', src: '/amazonlogo.png' },
    { name: 'Shopee', src: '/shopee.jpeg' },
    { name: 'TikTok Shop', src: '/logo tk.png' },
    { name: 'Tiny', src: '/olist.png' },
    { name: 'Bling', src: '/bl.png' },
];

export function MarketplaceBar() {
    return (
        <div className="w-full flex flex-col items-center justify-center mt-12 mb-4 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-white/40 text-xs sm:text-sm font-medium mb-6 uppercase tracking-widest text-center">
                Integrado com as maiores plataformas:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
                {ICONS.map((icon) => (
                    <img
                        key={icon.name}
                        src={icon.src}
                        alt={icon.name}
                        className="h-6 sm:h-8 md:h-10 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                    />
                ))}
            </div>
        </div>
    );
}
