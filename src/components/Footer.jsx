import ComponentLayout from "../layouts/ComponentLayout"
import { LinkComponent } from "./NavBar"

const Footer = () => {
    return (
        <footer className="bg-background/50 pt-4">
            <ComponentLayout>
                <div className="grid md:grid-cols-3 grid-cols-1  gap-8 py-8">
                    <div>
                        <ul className="flex flex-col gap-2">
                            <LinkComponent className="!self-start" href="/">Home</LinkComponent>
                            <LinkComponent className="!self-start" href="/">Review</LinkComponent>
                            <LinkComponent className="!self-start" href="/">Help Center</LinkComponent>
                            <LinkComponent className="!self-start" href="/">About us</LinkComponent>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-2">
                            <LinkComponent className="!self-start" href="/">Contact us</LinkComponent>
                            <LinkComponent className="!self-start" href="/">Shopify Services</LinkComponent>
                            <LinkComponent className="!self-start" href="/">Custom Ecommerce</LinkComponent>
                            <LinkComponent className="!self-start" href="/">Privacy Policy</LinkComponent>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <p className="!text-base font-semibold">Find us on</p>
                        <a href="https://apps.shopify.com/neon-sign-customizer" target="_blank" rel="noopener noreferrer">
                            <img className="w-40" src="./assets/shopify.png" alt="shopify" />
                        </a>
                        <a href="https://zeptoapps.com/" target="_blank" rel="noopener noreferrer">
                            <img className="w-32" src="./assets/zepto-apps.png" alt="shopify" />
                        </a>
                    </div>
                </div>
            </ComponentLayout>
            <div className="mx-auto text-center bg-background/50 py-3">
                <p className="!text-base">© {(new Date()).getFullYear()} Zepto Sign Customizer. All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer