document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById('markdown-content');
    const converter = new showdown.Converter();

    // Fetch and render the Markdown file
    fetch('MrRobot_Writeup.md')
        .then(response => response.text())
        .then(markdown => {
            contentDiv.innerHTML = converter.makeHtml(markdown);
        })
        .catch(err => {
            contentDiv.innerHTML = "Failed to load content. Please try again later.";
        });
});
