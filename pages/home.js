const template = `
    <article>
        <h2>Home Page</h2>
        <p>lorem ipsum...</p>
    </article>
`;

export const page = () => {
    console.log('main page loaded');
    renderPage(template)
};
