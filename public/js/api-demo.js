// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Get references to the button and the container for displaying books
  const button = document.getElementById("loadBooksBtn");
  const booksData = document.getElementById("booksData");

  // Add event listener to handle button click
  button.addEventListener("click", async () => {
    try {
      // Fetch book data from the API
      const response = await fetch('/api/books');  
      const books = await response.json();

      // Hide the button after data is loaded
      button.classList.add("hidden");

      // Clear any previously loaded data
      booksData.innerHTML = '';
      
      // Loop through the fetched books and display them
      books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book-api-item');  // Add a class for styling API-loaded books
        bookDiv.innerHTML = `
          <h3>${book.title}</h3>
          <p><strong>By:</strong> ${book.author}</p>
          <p>${book.description}</p>
        `;
        booksData.appendChild(bookDiv); // Append the book element to the container
      });
    } catch (error) {
      // Handle any errors that occur during fetching
      console.error('Error fetching books:', error);
      booksData.innerHTML = '<p style="color:red;">Failed to load book data.</p>';
    }
  });
});