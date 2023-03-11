(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const playerLists = document.querySelectorAll(".player__item");
    const botLists = document.querySelectorAll(".bot__item");
    playerLists.forEach(((element, index) => {
        element.addEventListener("click", (() => {
            const playerIndex = index;
            const botIndex = Math.floor(3 * Math.random());
            playerLists[playerIndex].classList.add("active");
            setTimeout((() => {
                playerLists[playerIndex].classList.remove("active");
            }), 1e3);
            if (0 == playerIndex && playerIndex < botIndex && 2 !== botIndex) {
                console.log("Игрок победил");
                playerWin();
            } else if (0 == playerIndex && playerIndex < botIndex && 2 == botIndex) {
                console.log("Игрок проиграл");
                botWin();
            } else if (0 == playerIndex && playerIndex === botIndex) {
                console.log("Ничья");
                draw();
            }
            if (1 == playerIndex && playerIndex < botIndex) {
                console.log("Игрок победил");
                playerWin();
            } else if (1 == playerIndex && playerIndex > botIndex && 0 == botIndex) {
                console.log("Игрок проиграл");
                botWin();
            } else if (1 == playerIndex && playerIndex === botIndex && 1 == botIndex) {
                console.log("Ничья");
                draw();
            }
            if (2 == playerIndex && playerIndex > botIndex && 0 == botIndex) {
                console.log("Игрок победил");
                playerWin();
            } else if (2 == playerIndex && playerIndex > botIndex && 1 == botIndex) {
                console.log("Игрок проиграл");
                botWin();
            } else if (2 == playerIndex && playerIndex === botIndex && 2 == botIndex) {
                console.log("Ничья");
                draw();
            }
            botLists[botIndex].classList.add("active");
            setTimeout((() => {
                botLists[botIndex].classList.remove("active");
            }), 1e3);
        }));
    }));
    function playerWin() {
        const playerScore = document.querySelector(".score__player-span");
        let playerScores = ++playerScore.innerHTML;
        return playerScore.innerHTML = `${playerScores}`;
    }
    function botWin() {
        const botScore = document.querySelector(".score__bot-span");
        let botScores = ++botScore.innerHTML;
        return botScore.innerHTML = `${botScores}`;
    }
    function draw() {
        const draw = document.querySelector(".draw");
        let draws = ++draw.innerHTML;
        return draw.innerHTML = `${draws}`;
    }
    window["FLS"] = true;
    isWebp();
})();