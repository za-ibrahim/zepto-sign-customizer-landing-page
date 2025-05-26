const Footer = () => {
    return (
        <div className='bg-background/50'>
            <footer className="py-4">
                <div className="mx-auto text-center">
                    <p className="!text-base">© {(new Date()).getFullYear()} Zepto Sign Customizer. All Rights Reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer