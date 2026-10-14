const AdmZip = require('adm-zip');
const fs = require('fs');

function extractPptText(filePath) {
    const zip = new AdmZip(filePath);
    const zipEntries = zip.getEntries();
    
    // Find all slide XML files
    const slideEntries = zipEntries.filter(entry => 
        entry.entryName.startsWith('ppt/slides/slide') && entry.entryName.endsWith('.xml')
    );
    
    // Sort slides numerically
    slideEntries.sort((a, b) => {
        const numA = parseInt(a.entryName.match(/slide(\d+)\.xml/)[1]);
        const numB = parseInt(b.entryName.match(/slide(\d+)\.xml/)[1]);
        return numA - numB;
    });

    console.log(`\n\n=== EXTRACING: ${filePath} ===\n`);
    
    for (const entry of slideEntries) {
        const xml = entry.getData().toString('utf8');
        // Extract text from <a:t> elements
        const textMatches = xml.match(/<a:t.*?>(.*?)<\/a:t>/g);
        if (textMatches) {
            const slideText = textMatches.map(m => m.replace(/<.*?>/g, '')).join(' ');
            console.log(`[${entry.entryName}] \n${slideText}\n`);
        }
    }
}

extractPptText(process.argv[2]);
