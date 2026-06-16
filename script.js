function searchCards() {

    let input = document.getElementById("searchInput").value.toUpperCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        if (card.innerText.toUpperCase().includes(input)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}
