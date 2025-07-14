import UpperFooter from "./UpperFooter"

const Footer = () => {
    return (
        <footer className="bg-[#110425]">
            <UpperFooter />
            {/* <ComponentLayout>
                <div className="grid md:grid-cols-3 grid-cols-1  gap-8 py-8 pb-12">
                    <div>
                        <ul className="flex flex-col gap-4">
                            <LinkComponent className="!self-start" href="/">Home</LinkComponent>
                            <LinkComponent className="!self-start" href="/">Review</LinkComponent>
                            <LinkComponent className="!self-start" href="/">Help Center</LinkComponent>
                            <LinkComponent className="!self-start" href="about-us">About us</LinkComponent>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-4">
                            <LinkComponent className="!self-start" href="contact">Contact us</LinkComponent>
                            <LinkComponent className="!self-start" target="_blank" href="https://zeptoapps.com/collections/all">Shopify Services</LinkComponent>
                            <LinkComponent className="!self-start" target="_blank" href="https://zeptoapps.com/pages/custom-ecommerce">Custom Ecommerce</LinkComponent>
                            <LinkComponent className="!self-start" href="/">Privacy Policy</LinkComponent>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <p className="!text-base font-semibold">Find us on</p>
                        <div className="flex flex-row">
                            <a className="opacity-85 hover:opacity-100 transition-all duration-100" href="https://apps.shopify.com/neon-sign-customizer" target="_blank" rel="noopener noreferrer">
                                <img className="w-40" src="./assets/shopify.png" alt="shopify" />
                            </a>
                        </div>
                        <div className="flex flex-row">
                            <a className="opacity-85 hover:opacity-100 transition-all duration-100" href="https://zeptoapps.com/" target="_blank" rel="noopener noreferrer">
                                <img className="w-32" src="./assets/zepto-apps.png" alt="shopify" />
                            </a>
                        </div>
                    </div>
                </div>
            </ComponentLayout> */}
            {/* <div className="mx-auto text-center bg-background/50 py-3">
                <p className="!text-base">© {(new Date()).getFullYear()} Zepto Sign Customizer. All Rights Reserved</p>
            </div> */}
            <div className="text-background relative py-3 px-4 flex md:flex-row-reverse flex-col items-start justify-end gap-4">
                {/* <p className="!text-base">© {(new Date()).getFullYear()} Zepto Sign Customizer. All Rights Reserved</p> */}
                <ul className="list-none flex items-center justify-center gap-4 text-center md:absolute left-0 md:left-1/2 translate-x-0 md:translate-x-[-50%]">
                    <li>
                        <a className="border-b border-background" href="/contact">Contact</a>
                    </li>
                    <li>
                        <a className="border-b border-background" href="/about-us">About Us</a>
                    </li>
                    <li>
                        <a className="border-b border-background" href="/privacy-policy">Privacy Policy</a>
                    </li>
                </ul>
                <a href="https://zeptoapps.com/" target="_blank" rel="noopener noreferrer" className="!text-base !font-oswald font-thin uppercase">
                    <span>© Zepto Apps</span>
                </a>
            </div>
        </footer>
    )
}

export default Footer