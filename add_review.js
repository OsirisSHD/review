document.getElementById('addReviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let productName = document.getElementById('productName').value;
    let reviewText = document.getElementById('reviewText').value;

    if (productName.trim() === '' || reviewText.trim() === '') {
        document.getElementById('error').innerText = 'Оба поля обязательны для заполнения!';
        return;
    }

    let review = {
        productName: productName,
        reviewText: reviewText
    };

    
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));

    
    document.getElementById('productName').value = '';
    document.getElementById('reviewText').value = '';
    document.getElementById('error').innerText = '';
});
