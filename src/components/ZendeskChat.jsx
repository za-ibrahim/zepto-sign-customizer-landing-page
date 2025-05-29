import { useEffect } from 'react';

const ZENDESK_KEY = import.meta.env.VITE_ZENDESK_KEY;

const ZendeskChat = () => {

    useEffect(() => {
        if (window.zE) return;

        let user_info = {};
        try {
            user_info = JSON.parse(window?.__APP_DATA__?.user_info)
            // console.log(user_info)
        } catch (error) { }

        window.zESettings = {
            webWidget: {
                color: { theme: '#010035' }
            },
            contactForm: {
                fields: [
                    { id: 'name', prefill: { '*': user_info?.shop_owner }, required: true },
                    { id: 'email', prefill: { '*': user_info?.email }, required: true }
                ]
            },
            identify: {
                name: user_info?.shop_owner,
                email: user_info?.email
            }
        };

        const script = document.createElement('script');
        script.id = 'ze-snippet';
        script.src = 'https://static.zdassets.com/ekr/snippet.js?key=' + ZENDESK_KEY;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            const el = document.getElementById('ze-snippet');
            if (el) document.body.removeChild(el);
        };
    }, []);

    return null;
};

export default ZendeskChat;
