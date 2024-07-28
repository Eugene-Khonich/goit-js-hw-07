const categories = document.querySelectorAll('.item');
console.log(`Number of categories:  ${categories.length}`);

categories.forEach(item => {
  const categoryHeader = item.querySelector('h2');
  const categoryList = item.querySelectorAll('li');
  console.log(`Category: ${categoryHeader.innerText}`);
  console.log(`Elements: ${categoryList.length}`);
});
