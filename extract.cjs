const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const urls = [
    { id: '3-bhk-loft', url: 'https://ariaholding.com/thelofts/residences-units/3-bedroom/' },
    { id: '2-bhk-loft', url: 'https://ariaholding.com/thelofts/residences-units/2-bedroom-loft/' },
    { id: '2-bhk', url: 'https://ariaholding.com/thelofts/residences-units/2-bedroom/' },
    { id: '1-bhk', url: 'https://ariaholding.com/thelofts/residences-units/1-bedroom/' },
    { id: 'studio', url: 'https://ariaholding.com/thelofts/residences-units/studio/' }
];

async function extract() {
    for (let item of urls) {
        try {
            const res = await fetch(item.url);
            const html = await res.text();
            const dom = new JSDOM(html);
            const document = dom.window.document;

            const allImages = [...document.querySelectorAll('img')].map(img => img.getAttribute('src') || img.getAttribute('data-src'));
            
            // Extract elementor backgrounds
            const bgDivs = document.querySelectorAll('.elementor-section, .elementor-background-overlay');
            let bgs = [];
            bgDivs.forEach(el => {
                let dset = el.getAttribute('data-settings');
                if (dset && dset.includes('background_image')) {
                    try {
                        let parsed = JSON.parse(dset);
                        if (parsed.background_background === 'classic' && parsed.background_image && parsed.background_image.url) {
                            bgs.push(parsed.background_image.url);
                        }
                    } catch(e){}
                }
                
                let style = el.getAttribute('style') || '';
                let m = style.match(/url\(['"]?(.*?)['"]?\)/);
                if (m) bgs.push(m[1]);
            });

            // Find all inline style backgrounds on page
            let styleTags = [...document.querySelectorAll('style')].map(s => s.innerHTML).join(' ');
            let styleBgs = [...styleTags.matchAll(/background-image:\s*url\(['"]?(https:\/\/[^'"]+)['"]?\)/g)].map(m => m[1]);

            let mergedBgs = [...new Set([...bgs, ...styleBgs])];

            const swiperImages = [...document.querySelectorAll('.swiper-slide-image, .elementor-image-carousel img')].map(img => img.getAttribute('data-src') || img.getAttribute('src')).filter(Boolean);
            
            const layoutMaps = allImages.filter(src => src && (src.toLowerCase().includes('floor') || src.toLowerCase().includes('type') || src.toLowerCase().includes('plan')));

            console.log(`\n--- ${item.id} ---`);
            console.log("Backgrounds (Hero):", mergedBgs.filter(src => src && !src.includes('svg')));
            console.log("Swiper Images (Visual Symphony):", swiperImages.length > 0 ? swiperImages[0] : null);
            console.log("Layout/Floor Plans:", [...new Set(layoutMaps)]);
        } catch(e){
            console.error(item.id, e);
        }
    }
}
extract();
