const PageNotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background/30 to-background/90 pb-24">
            <div className="text-center">
                <h1 className="text-8xl font-extrabold mb-4 drop-shadow-lg font-hero" style={{
                    background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary), var(--color-accent))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                }}>404</h1>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">Page Not Found</h2>
                <p className="text-lg text-gray-500 dark:text-gray-300 mb-8">Sorry, the page you are looking for does not exist or has been moved.</p>
                <a href="/" className="tryBtn inline-block px-6 py-3 font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-200">Go Home</a>
            </div>
            <div className="mt-12 opacity-80 float">
                <svg width="300" height="120" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="150" cy="60" rx="120" ry="30" fill="url(#paint0_radial)" />
                    <defs>
                        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(150 60) scale(120 30)" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#a5b4fc" stopOpacity="0.4" />
                            <stop offset="1" stopColor="#818cf8" stopOpacity="0.1" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default PageNotFound