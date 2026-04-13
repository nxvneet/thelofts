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
    let result = {};
    for (let item of urls) {
        try {
            const res = await fetch(item.url);
            const html = await res.text();
            const dom = new JSDOM(html);
            const document = dom.window.document;

            // 1. Global Floor Plans (Building Layout)
            // They are usually under a section. Let's just find the images named "FLOOR-scaled"
            const allImages = [...document.querySelectorAll('img')].map(img => img.getAttribute('src') || img.getAttribute('data-src')).filter(Boolean);
            
            const floorPlanImages = allImages.filter(src => src.includes('-FLOOR-scaled'));
            let globalFloorPlans = {};
            // Usually GROUND-FLOOR, FIRST-FLOOR, SECOND-FLOOR
            floorPlanImages.forEach(src => {
                let m = src.match(/([A-Z]+)-FLOOR-scaled/);
                if (m) {
                    let floorName = m[1].charAt(0).toUpperCase() + m[1].slice(1).toLowerCase() + ' Floor';
                    if (floorName === 'Ground Floor') floorName = 'Ground Floor';
                    // fix spelling if needed e.g. First, Second, Third, Fourth, Fifth, Sixth
                    globalFloorPlans[floorName] = src;
                }
            });

            // 2. Residence Layouts (Specific Unit Layouts)
            // It has titles like "3 Bedroom Loft Layout B (Ground Floor)"
            // And attributes like "No. of units:", "Amenity:", "Total:"
            let residenceLayouts = [];
            
            // In elementor, these might be in swiper slides or toggles. 
            // We can look for headings that contain "Layout"
            const headings = [...document.querySelectorAll('h3, h4, h2')].filter(h => h.textContent.toLowerCase().includes('layout') && h.textContent.toLowerCase().includes('floor'));
            
            // To get images associated with them, it's tricky because they are in carousels next to the text.
            // Let's just grab all layout images:
            const layoutImages = allImages.filter(src => src.toLowerCase().includes('type') && !src.toLowerCase().includes('svg') && !src.toLowerCase().includes('logo'));
            
            // This is a naive extraction. We will just dump what we find so we can build the JSON manually if needed, or structured.
            let extractedHeadings = headings.map(h => {
                let text = h.textContent.trim();
                // look for next elements to find units, amenity, area
                let parent = h.parentElement;
                while(parent && parent.textContent.length < 200 && parent.tagName !== 'SECTION') {
                    parent = parent.parentElement;
                }
                return {
                    title: text,
                    text: parent ? parent.textContent.replace(/\s+/g, ' ').trim() : ''
                }
            });

            result[item.id] = {
                globalFloorPlans,
                layoutImages: [...new Set(layoutImages)],
                extractedDetails: extractedHeadings
            };

            console.log(`\n\n=== ${item.id} ===`);
            console.log("Global floor plans:", Object.keys(globalFloorPlans).length);
            console.log("Residence Layout Images:", [...new Set(layoutImages)]);
            console.log("Layout Text Nodes:", extractedHeadings.slice(0, 3));

        } catch(e) {
            console.error("Error on", item.id, e);
        }
    }
    
    const fs = require('fs');
    fs.writeFileSync('full_data.json', JSON.stringify(result, null, 2));
}

extract();
