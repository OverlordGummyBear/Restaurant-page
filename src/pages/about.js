function loadAbout(){
    //about div
    const aboutDiv = document.createElement("div");
    aboutDiv.classList = "about neon-border-dark";

    //h1
    const h1 = document.createElement("h1");
    h1.textContent = "ABOUT NOVA CIRCUIT";

    //story container
    const storyContainer = document.createElement("div");
    storyContainer.classList = "story-container neon-border-light";

    const storyH2 = document.createElement("h2");
    storyH2.textContent = "The Story Behind the Station";

    const storyPara1 = document.createElement("p");
    const storyPara2 = document.createElement("p");
    const storyPara3 = document.createElement("p");

    storyPara1.textContent = "Nova Circuit was born from a simple idea: dining shouldn't stop at the edge of the atmosphere.";
    storyPara2.textContent = "Founded by a crew of chefs, engineers, and flavor scientists, we bring fine dining to the far reaches of space. Every dish is built with precision, curiosity, and a little stardust — old-world technique meets new-world technology, with flavor always first.";
    storyPara3.textContent = "Docked in Ring 3 of the Kepler-9 Orbital Station, Nova Circuit welcomes travelers, traders, and locals alike. Pull up a seat, watch the stars drift by, and let us take care of the rest.";

    storyContainer.append(storyH2, storyPara1, storyPara2, storyPara3);

    //quality container
    const qualityContainer = document.createElement("div");
    qualityContainer.classList = "quality-container neon-border-light";

    const qualityH2 = document.createElement("h2");
    qualityH2.textContent = "What Makes Us Special";

        //specific qualities container
        const qualities = document.createElement("div");
        qualities.classList = "qualities";

            //Quality 1
            const quality1 = document.createElement("div");
            quality1.classList = "quality-item";
            const quality1Para1 = document.createElement("p");
            quality1Para1.textContent = "Zero-G Dining";
            const quality1Para2 = document.createElement("p");
            quality1Para2.textContent = "Enjoy select courses in our low-gravity pod, where dishes, and diners, float just above the table.";

            quality1.append(quality1Para1, quality1Para2);

            //Quality 2
            const quality2 = document.createElement("div");
            quality2.classList = "quality-item";
            const quality2Para1 = document.createElement("p");
            quality2Para1.textContent = "Grown On-Station";
            const quality2Para2 = document.createElement("p");
            quality2Para2.textContent = "Our hydroponic gardens supply fresh greens and herbs daily, straight from deck to plate.";

            quality2.append(quality2Para1, quality2Para2);

            //Quality 3
            const quality3 = document.createElement("div");
            quality3.classList = "quality-item";

            const quality3Para1 = document.createElement("p");
            quality3Para1.textContent = "A View Like No Other";
            const quality3Para2 = document.createElement("p");
            quality3Para2.textContent = "Every table faces open space — comets, nebulae, and the slow turn of Kepler-9 itself.";

            quality3.append(quality3Para1, quality3Para2);

        qualities.append(quality1, quality2, quality3);

    qualityContainer.append(qualityH2, qualities)

    //append everything to about div
    aboutDiv.append(h1, storyContainer, qualityContainer)

    return aboutDiv;
}

export default loadAbout;