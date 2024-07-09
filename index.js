const inquirer = require('inquirer');
const fs = require('fs');

async function main() {
    const { text } = await inquirer.prompt({
        type: 'input',
        name: 'text',
        message: 'Enter text (up to 3 characters):',
        validate: input => input.length <= 3 || 'Text must be up to 3 characters.'
    });

    const { textColor } = await inquirer.prompt({
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hexadecimal):',
    });

    const { shape } = await inquirer.prompt({
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square']
    });

    const { shapeColor } = await inquirer.prompt({
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hexadecimal):',
    });


    let shapeSvg = '';
    if (shape === 'circle') {
        shapeSvg = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
    } else if (shape === 'triangle') {
        shapeSvg = `<polygon points="150,30 240,170 60,170" fill="${shapeColor}" />`;
    } else if (shape === 'square') {
        shapeSvg = `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
    }

    const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeSvg}
        <text x="150" y="105" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
    `;

    fs.writeFileSync('logo.svg', svgContent.trim());
    console.log('Generated logo.svg');
}

main();

// module.exports = { getUserInput, generateSvgContent, main };

