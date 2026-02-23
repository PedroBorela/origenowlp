/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			surface: {
  				'50': '#F8F9FA',
  				'100': '#F1F3F5',
  				'200': '#E9ECEF',
  				'300': '#DEE2E6',
  				'400': '#CED4DA',
  				'800': '#343A40',
  				'900': '#212529',
  				DEFAULT: '#FFFFFF'
  			},
  			neon: {
  				green: '#741EA8',
  				'green-light': '#9333D0',
  				'green-dark': '#561680',
  				purple: '#741EA8',
  				'purple-light': '#9333D0',
  				'purple-glow': '#741EA880',
  				cyan: '#06D6E0'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				light: '#CBD5E1',
  				dark: '#64748B',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Cobe',
  				'Outfit',
  				'sans-serif'
  			],
  			heading: [
  				'Cobe',
  				'Syne',
  				'sans-serif'
  			]
  		},
  		transitionTimingFunction: {
  			'custom-bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  		},
  		backgroundImage: {
  			'gradient-glow': 'radial-gradient(ellipse at 50% 0%, rgba(116,30,168,0.15) 0%, transparent 60%)',
  			'gradient-glow-green': 'radial-gradient(ellipse at 50% 50%, rgba(116,30,168,0.08) 0%, transparent 60%)',
  			'gradient-card': 'linear-gradient(135deg, rgba(116,30,168,0.08) 0%, rgba(147,51,208,0.05) 100%)',
  			'gradient-hero': 'radial-gradient(ellipse at 30% 20%, rgba(116,30,168,0.2) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(147,51,208,0.1) 0%, transparent 50%)',
  			noise: 'url(\\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\\")'
  		},
  		borderRadius: {
  			'2xl': '1rem',
  			'3xl': '1.5rem',
  			'4xl': '2rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  			'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  			'slide-up-delay-1': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards',
  			'slide-up-delay-2': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
  			'slide-up-delay-3': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards',
  			'slide-in-left': 'slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  			'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  			float: 'float 4s ease-in-out infinite',
  			'float-delayed': 'float 4s ease-in-out 2s infinite',
  			marquee: 'marquee 25s linear infinite',
  			'marquee-reverse': 'marquee 25s linear infinite reverse',
  			'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
  			'spin-slow': 'spin 12s linear infinite',
  			'border-glow': 'borderGlow 4s ease-in-out infinite'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideUp: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(40px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			slideInLeft: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateX(-40px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			slideInRight: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateX(40px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-12px)'
  				}
  			},
  			marquee: {
  				'0%': {
  					transform: 'translateX(0%)'
  				},
  				'100%': {
  					transform: 'translateX(-50%)'
  				}
  			},
  			pulseGlow: {
  				'0%, 100%': {
  					boxShadow: '0 0 20px rgba(116,30,168,0.3)'
  				},
  				'50%': {
  					boxShadow: '0 0 40px rgba(116,30,168,0.6), 0 0 80px rgba(116,30,168,0.2)'
  				}
  			},
  			borderGlow: {
  				'0%, 100%': {
  					borderColor: 'rgba(116,30,168,0.2)'
  				},
  				'50%': {
  					borderColor: 'rgba(147,51,208,0.4)'
  				}
  			}
  		},
  		boxShadow: {
  			'glow-purple': '0 0 30px rgba(116,30,168,0.3), 0 0 60px rgba(116,30,168,0.1)',
  			'glow-green': '0 0 30px rgba(116,30,168,0.3), 0 0 60px rgba(116,30,168,0.1)',
  			'glow-sm': '0 0 15px rgba(116,30,168,0.2)',
  			card: '0 4px 30px rgba(0,0,0,0.1)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
