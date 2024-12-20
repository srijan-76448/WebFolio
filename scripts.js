const data_file_path = 'data.jsonc';
const icons_file_path = 'icons.jsonc';

const socialLinksEl = document.querySelector('.Social-Links');

// fetch(data_file_path)
//   .then(response => response.text())
//   .then(data => {
//     const jsonData = JSON.parse(data);
//     const twitterLink = jsonData.x;
//     const githubLink = jsonData.github;
//     const linkedinLink = jsonData.linkedin;

//     const twitterPointer = socialLinksEl.querySelector('.social-icon a[aria-label="Twitter"]');
//     const githubPointer = socialLinksEl.querySelector('.social-icon a[aria-label="GitHub"]');
//     const linkedinPointer = socialLinksEl.querySelector('.social-icon a[aria-label="LinkedIn"]');

//     twitterPointer.href = twitterLink;
//     githubPointer.href = githubLink;
//     linkedinPointer.href = linkedinLink;
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

// fetch(icons_file_path)
//   .then(response => response.text())
//   .then(data => {
//     const jsonData = JSON.parse(data);
//     const twitterLink = jsonData.x;
//     const githubLink = jsonData.github;
//     const linkedinLink = jsonData.linkedin;

//     const twitterPointer = socialLinksEl.querySelector('.social-icon a[aria-label="Twitter"]'); 
//     const githubPointer = socialLinksEl.querySelector('.social-icon a[aria-label="GitHub"]');
//     const linkedinPointer = socialLinksEl.querySelector('.social-icon a[aria-label="LinkedIn"]');

//     twitterPointer.href = twitterLink;
//     githubPointer.href = githubLink;
//     linkedinPointer.href = linkedinLink;
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

fetch(data_file_path)
  .then(response => response.json())
  .then(data => {
      // Get the bio text from the JSON data
      const bioText = data.bio;

      // Select the element to be updated
      const bioElement = document.querySelector('.Home-Typewriter');

      // Update the text content of the element
      bioElement.textContent = bioText;
  })
  .catch(error => {
      console.error('Error fetching data:', error);
  });