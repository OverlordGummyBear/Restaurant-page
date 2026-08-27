function loadHome(){
    //home div
    const homeDiv = document.createElement("div");
    homeDiv.classList = "home neon-border-dark";

    //h1
    const h1 = document.createElement("h1");
    h1.textContent = "Nova Circuit";

    //info-containers
    const reviewDiv = document.createElement("div");
    const hourInfoDiv = document.createElement("div");
    const locationDiv = document.createElement("div");

    reviewDiv.classList = "home-info-div review-container neon-border-light";
    hourInfoDiv.classList = "home-info-div hour-info-container neon-border-light";
    locationDiv.classList = "home-info-div location-container neon-border-light";

    //review-container
    const reviewPara = document.createElement("p");
    reviewPara.textContent = "\"Dinner at Nova Circuit felt like eating inside a warp drive — plates that glow, flavors that spark. The synth-seared scallops alone are worth the trip to the future.\""
    const reviewerPara = document.createElement("p");
    reviewerPara.textContent = "- Local Taste Quarterly";

    reviewDiv.append(reviewPara, reviewerPara);
    
    //hour-info-container
    const hourH2 = document.createElement("h2");
    hourH2.textContent = "OPENING HOURS"

    const boldWeekdays = document.createElement("b");
    boldWeekdays.textContent = "Mon-Thu: "
    const weekdaysPara = document.createElement("p");
    weekdaysPara.appendChild(boldWeekdays);
    weekdaysPara.appendChild(document.createTextNode("17:00 - 01:00 "));

    const boldWeekend = document.createElement("b");
    boldWeekend.textContent = "Fri-Sat: ";
    const weekendPara = document.createElement("p");
    weekendPara.appendChild(boldWeekend);
    weekendPara.appendChild(document.createTextNode("17:00 - 04:00 "));

    const boldSunday = document.createElement("b");
    boldSunday.textContent = "Sun: ";
    const sundayPara = document.createElement("p");
    sundayPara.appendChild(boldSunday);
    sundayPara.appendChild(document.createTextNode("17:00 - 02:00 "));

    hourInfoDiv.append(hourH2, weekdaysPara, weekendPara, sundayPara);

    //location-container
    const locationH2 = document.createElement("h2");
    locationH2.textContent = "LOCATION";

    const addressP1 = document.createElement("p");
    const addressP2 = document.createElement("p");
    const addressP3 = document.createElement("p");

    addressP1.textContent = "Ring 3, Berth 14";
    addressP2.textContent = "Kepler-9 Orbital Station";
    addressP3.textContent = "Outer Rim Corridor";

    locationDiv.append(locationH2, addressP1, addressP2, addressP3);

    //Append three divs to the homeDiv
    homeDiv.append(h1, reviewDiv, hourInfoDiv, locationDiv);

    return homeDiv;
}

export default loadHome;