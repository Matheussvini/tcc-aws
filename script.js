function showProfile(profileName) {
    const profiles = {
      matheus: {
        name: "Matheus Vinicius",
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        cvPath: "assets/matheus_cv.pdf",
        imagePath: "assets/matheus.jpg"
      },
      arquires: {
        name: "Arquires",
        bio: "Lore ipsum sobre Arquires...",
        cvPath: "assets/arquires_cv.pdf",
        imagePath: "assets/arquires.jpg"
      },
      eric: {
        name: "Eric",
        bio: "Lore ipsum sobre Eric...",
        cvPath: "assets/eric_cv.pdf",
        imagePath: "assets/eric.jpg"
      },
      liliane: {
        name: "Liliane",
        bio: "Lore ipsum sobre Liliane...",
        cvPath: "assets/liliane_cv.pdf",
        imagePath: "assets/liliane.jpg"
      },
      thayna: {
        name: "Thayná",
        bio: "Lore ipsum sobre Thayná...",
        cvPath: "assets/thayna_cv.pdf",
        imagePath: "assets/thayna.jpg"
      }
    };
  
    const profile = profiles[profileName];
  
    const modal = document.getElementById("modal");
    const modalName = document.getElementById("modal-name");
    const modalImage = document.getElementById("modal-image");
    const modalBio = document.getElementById("modal-bio");
    const modalCv = document.getElementById("modal-cv");
  
    modalName.textContent = profile.name;
    modalImage.src = profile.imagePath;
    modalBio.textContent = profile.bio;
    modalCv.href = profile.cvPath;
  
    modal.style.display = "flex";
  }
  
  function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  