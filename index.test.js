const { generateSvgContent } = require('./index');

describe('generateSvgContent', () => {
    test('generates correct SVG for circle', () => {
        const input = {
            text: 'ABC',
            textColor: 'red',
            shape: 'circle',
            shapeColor: 'blue'
        };
        const expectedOutput = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="blue" />
        <text x="150" y="105" font-size="60" text-anchor="middle" fill="red">ABC</text>
    </svg>
    `.trim();
        expect(generateSvgContent(input)).toBe(expectedOutput);
    });

    test('generates correct SVG for triangle', () => {
        const input = {
            text: 'DEF',
            textColor: 'green',
            shape: 'triangle',
            shapeColor: 'yellow'
        };
        const expectedOutput = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,30 240,170 60,170" fill="yellow" />
        <text x="150" y="105" font-size="60" text-anchor="middle" fill="green">DEF</text>
    </svg>
    `.trim();
        expect(generateSvgContent(input)).toBe(expectedOutput);
    });

    test('generates correct SVG for square', () => {
        const input = {
            text: 'GHI',
            textColor: 'black',
            shape: 'square',
            shapeColor: 'white'
        };
        const expectedOutput = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="50" width="100" height="100" fill="white" />
        <text x="150" y="105" font-size="60" text-anchor="middle" fill="black">GHI</text>
    </svg>
    `.trim();
        expect(generateSvgContent(input)).toBe(expectedOutput);
    });
});