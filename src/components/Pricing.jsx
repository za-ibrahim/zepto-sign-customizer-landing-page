import { useEffect, useRef, useState } from 'react';
import Heading from './Heading'
import ComponentLayout from '../layouts/ComponentLayout'

const Pricing = () => {
    useEffect(() => {
        // Disable animation on mobile devices
        if (window.innerWidth <= 768) return;
        gsap.fromTo(
            '.pricing-card',
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '#pricing',
                    scroller: "body",
                    start: 'top 55%',
                    end: 'to 30%',
                    scrub: 2,
                },
            }
        );
    }, []);

    return (
        <div id='pricing' className='py-15 bg-background/50 pb-24'>
            <Heading subHeading="Smart plans for every step of your growth">Simple, Transparent Monthly Plans</Heading>
            <ComponentLayout>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
                    {/* <PackageCard
                        title="Free version"
                        price="0"
                        features={[
                            "30 days",
                            "unlimited fonts",
                            "1 configuration",
                            "1 simple material",
                            "5 color, 5 sizes for material",
                            "2 possible sign shapes",
                            "3 sign fixing methods",
                            "Add text to configurator",
                        ]}
                    /> */}
                    <PackageCard
                        title="Essential"
                        price="14.99"
                        features={[
                            "Up to 5 attributed orders per month",
                            "Unlimited customizers",
                            "All Features Included",
                        ]}
                    />
                    <PackageCard
                        title="Growth"
                        price="29.99"
                        features={[
                            "Up to 15 attributed orders per month",
                            "Unlimited customizers",
                            "All Features Included",
                        ]}
                    />
                    <PackageCard
                        title="Unlimited"
                        price="149.99"
                        features={[
                            "Unlimited orders per month",
                            "Unlimited customizers",
                            "All Features Included",
                        ]}
                    />
                </div>
            </ComponentLayout>
        </div>
    );
}

const PackageCard = ({ title, price, features }) => {
    const priceRef = useRef(null);
    const [trigger, setTrigger] = useState(0);

    useEffect(() => {
        // Disable animation on mobile devices
        if (window.innerWidth <= 768) return;
        if (!window.gsap || !window.SplitText) return;
        const gsap = window.gsap;
        const SplitText = window.SplitText;
        if (document.fonts && document.fonts.status !== 'loaded') {
            document.fonts.ready.then(() => setTrigger(prev => prev + 1));
            return;
        }
        // Split the price text into chars
        let _mySplitText = new SplitText(priceRef.current, {
            type: 'chars',
            charsClass: 'char',
            position: 'relative',
        });
        let chars = priceRef.current.querySelectorAll('.char');
        let charH = priceRef.current.offsetHeight;
        const weightInit = 600;
        const weightTarget = 400;
        const weightDiff = weightInit - weightTarget;
        const stretchInit = 150;
        const stretchTarget = 80;
        const stretchDiff = stretchInit - stretchTarget;
        const maxYScale = 2.5;
        let numChars = chars.length;
        let isMouseDown = false;
        let mouseInitialY = 0;
        let mouseFinalY = 0;
        let distY = 0;
        let charIndexSelected = 0;
        let elasticDropOff = 0.8;
        let dragYScale = 0;

        function animInTxt() {
            let elem = chars[0];
            let rect = elem.getBoundingClientRect();
            gsap.from(chars, {
                // y: () => -1 * (rect.y + charH + 500),
                fontWeight: weightTarget * 2,
                fontStretch: stretchTarget,
                scaleY: 0.005,
                ease: 'elastic(0.2, 0.1)',
                duration: 1.5,
                delay: 0.5,
                stagger: {
                    each: 0.05,
                    from: 'random',
                },
                onComplete: initEvents,
            });
        }

        function calcDist() {
            let maxYDragDist = charH * (maxYScale - 1);
            distY = mouseInitialY - mouseFinalY;
            dragYScale = distY / maxYDragDist;
            if (dragYScale > maxYScale - 1) {
                dragYScale = maxYScale - 1;
            } else if (dragYScale < -0.5) {
                dragYScale = -0.5;
            }
        }

        function setFontDragDimensions() {
            gsap.to(chars, {
                y: (index) => {
                    let fracDispersion = calcfracDispersion(index);
                    return fracDispersion * -2;
                },
                fontWeight: (index) => {
                    let fracDispersion = calcfracDispersion(index);
                    return weightInit - fracDispersion * weightDiff;
                },
                fontStretch: (index) => {
                    let fracDispersion = calcfracDispersion(index);
                    return stretchInit - fracDispersion * stretchDiff;
                },
                scaleY: (index) => {
                    let fracDispersion = calcfracDispersion(index);
                    let scaleY = 1 + fracDispersion;
                    if (scaleY < 0.5) scaleY = 0.5;
                    return scaleY;
                },
                ease: 'power4',
                duration: 0.6,
            });
        }

        function calcfracDispersion(index) {
            let dispersion = 1 - Math.abs(index - charIndexSelected) / (numChars * elasticDropOff);
            return dispersion * dragYScale;
        }

        function snapBackText() {
            gsap.to(chars, {
                y: 0,
                fontWeight: weightInit,
                fontStretch: stretchInit,
                scale: 1,
                ease: 'elastic(0.35, 0.1)',
                duration: 1,
                stagger: {
                    each: 0.02,
                    from: charIndexSelected,
                },
            });
        }

        function initEvents() {
            const onMouseUp = (e) => {
                if (isMouseDown) {
                    mouseFinalY = e.clientY;
                    isMouseDown = false;
                    snapBackText();
                    document.body.classList.remove('grab');
                }
            };
            const onMouseMove = (e) => {
                if (isMouseDown) {
                    mouseFinalY = e.clientY;
                    calcDist();
                    setFontDragDimensions();
                }
            };
            const onMouseLeave = (event) => {
                if (
                    event.clientY <= 0 ||
                    event.clientX <= 0 ||
                    event.clientX >= window.innerWidth ||
                    event.clientY >= window.innerHeight
                ) {
                    snapBackText();
                    isMouseDown = false;
                }
            };
            document.body.addEventListener('mouseup', onMouseUp);
            document.body.addEventListener('mousemove', onMouseMove);
            document.body.addEventListener('mouseleave', onMouseLeave);
            chars.forEach((char, index) => {
                char.addEventListener('mousedown', function (e) {
                    mouseInitialY = e.clientY;
                    charIndexSelected = index;
                    isMouseDown = true;
                    document.body.classList.add('grab');
                });
            });
            // Cleanup
            return () => {
                document.body.removeEventListener('mouseup', onMouseUp);
                document.body.removeEventListener('mousemove', onMouseMove);
                document.body.removeEventListener('mouseleave', onMouseLeave);
            };
        }

        animInTxt();
        // Cleanup listeners and restore price on unmount
        const currentPriceRef = priceRef.current;
        return () => {
            if (currentPriceRef) currentPriceRef.innerHTML = '$' + price;
        };
    }, [price, trigger]);

    return (
        <div className='pricing-card rounded-lg overflow-hidden shadow-md bg-background/70'>
            <div className='text-center custom-shape pt-5 pb-14 stage'>
                <h2 className='text-xl font-bold mb-4'>{title}</h2>
                <span ref={priceRef} className='!text-4xl font-semibold block txt cursor-pointer select-none'>${price}</span>
            </div>
            {/* ...existing code... */}
            <div className='p-6'>
                <ul className='list-none flex flex-col gap-2'>
                    {features.map((feature, index) => (
                        <li key={index} className='leading-relaxed flex items-center justify-center gap-2'>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Pricing;