import futureFoodImg from "../future-food.jpg";

function loadMain(){
    const menuDiv = document.createElement("div");
    menuDiv.classList = "main neon-border-dark";

    const menuH1 = document.createElement("h1");
    menuH1.textContent = "MENU";

    //Three menu items
    const menuItemOne = document.createElement("div");
    const menuItemTwo = document.createElement("div");
    const menuItemThree = document.createElement("div");

    menuItemOne.classList = "menu-item neon-border-light";
    menuItemTwo.classList = "menu-item neon-border-light";
    menuItemThree.classList = "menu-item neon-border-light";

        //First item
        const firstItemDescriptionDiv = document.createElement("div");
        firstItemDescriptionDiv.classList = "item-description";

            //Item description
            const firstH2 = document.createElement("h2");
            firstH2.textContent = "Synth-Seared Scallops";
            const firstPara = document.createElement("p");
            firstPara.textContent = "Pan-seared scallops glazed in a citrus-ion reduction, served over microgreens grown on-station.";

            firstItemDescriptionDiv.append(firstH2, firstPara);

        const firstItemImg = document.createElement("img");
        firstItemImg.src = futureFoodImg;
        firstItemImg.alt = "picture of futuristic sandwich";
        firstItemImg.classList = "neon-border-dark";

        menuItemOne.append(firstItemDescriptionDiv, firstItemImg);

        //Second item
        const secondItemDescriptionDiv = document.createElement("div");
        firstItemDescriptionDiv.classList = "item-description";

            //Item description
            const secondH2 = document.createElement("h2");
            secondH2.textContent = "Nebula Ramen";
            const secondPara = document.createElement("p");
            secondPara.textContent = "A rich, slow-simmered broth swirling with color-shifting noodles, soft egg, and charred nova peppers.";

            secondItemDescriptionDiv.append(secondH2, secondPara);

            const secondItemImg = document.createElement("img");
            secondItemImg.src = futureFoodImg;
            secondItemImg.alt = "picture of futuristic sandwich";
            secondItemImg.classList = "neon-border-dark";

            menuItemTwo.append(secondItemDescriptionDiv, secondItemImg);

        //Third item
        const thirdItemDescriptionDiv = document.createElement("div");
        thirdItemDescriptionDiv.classList = "item-description";

            //Item description
            const thirdH2 = document.createElement("h2");
            thirdH2.textContent = "Orbital Ribeye";
            const thirdPara = document.createElement("p");
            thirdPara.textContent = "Dry-aged ribeye finished under plasma flame, served with mag-roasted vegetables and stardust salt.";

            thirdItemDescriptionDiv.append(thirdH2, thirdPara);

            const thirdItemImg = document.createElement("img");
            thirdItemImg.src = futureFoodImg;
            thirdItemImg.alt = "picture of futuristic sandwich";
            thirdItemImg.classList = "neon-border-dark";

            menuItemThree.append(thirdItemDescriptionDiv, thirdItemImg);

    menuDiv.append(menuH1, menuItemOne, menuItemTwo, menuItemThree);

    return menuDiv;
}

export default loadMain;