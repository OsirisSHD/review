document.addEventListener('DOMContentLoaded', function() {
    displayReviews();
});

function displayReviews() {
    let productList = document.getElementById('productList');
    productList.innerHTML = '';

    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

    reviews.forEach(function(review, index) {
        let productDiv = document.createElement('div');
        productDiv.innerHTML = '<h3>' + review.productName + '</h3>' +
                               '<p>' + review.reviewText + '</p>' +
                               '<button id="toggleBtn-' + index + '">Показывать отзывы</button>' +
                               '<button id="deleteBtn-' + index + '">Удалить отзыв</button>';
        productList.appendChild(productDiv);

        let toggleBtn = document.getElementById('toggleBtn-' + index);
        let deleteBtn = document.getElementById('deleteBtn-' + index);

        toggleBtn.addEventListener('click', function() {
            let reviewText = productDiv.querySelector('p');
            if (reviewText.style.display === 'none') {
                reviewText.style.display = 'block';
                toggleBtn.innerText = 'Скрыть отзывы';
            } else {
                reviewText.style.display = 'none';
                toggleBtn.innerText = 'Показывать отзывы';
            }
        });

        deleteBtn.addEventListener('click', function() {
            reviews.splice(index, 1);
            localStorage.setItem('reviews', JSON.stringify(reviews));
            productDiv.remove();
        });
    });
}
