(function() {
    const $  = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    
    // The sticky content
    const stickyContents = document.createElement("aside");

    stickyContents.id = "sticky-contents";
    stickyContents.classList.add("minimized");
    stickyContents.innerHTML = $("#contents").innerHTML;
    document.body.appendChild(stickyContents);

    stickyContents.querySelector("h2").addEventListener("click", (event) => {
        event.preventDefault();
        stickyContents.classList.toggle("minimized");
    });


    // Clicks observer
    document.body.addEventListener("click", (event) => {
        // Clicks outside the sticky content container
        if ( !event.target.closest(`#${stickyContents.id}`) ) {
            stickyContents.classList.add("minimized");
            return;
        }

        // Clicking on a link
        if ( event.target.closest("a") ) {
            event.preventDefault();

            const href = event.target.closest("a").getAttribute("href");
            const ele  = $(href);

            ele.scrollIntoView({
                behavior : "smooth"
            });

            history.replaceState({}, "", href);

            stickyContents.classList.add("minimized");

            return;
        }
    });
})();
